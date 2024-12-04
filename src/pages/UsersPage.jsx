import { BarChart2, UserCheck, UserIcon, UserPlus } from "lucide-react"
import { motion } from "framer-motion"
import Header from "../components/common/Header"
import { StateCard } from "../components/common/StateCard"
import SalesOverviewChart from "../components/overview/SalesOverviewChart"
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"
import SalesChannelChart from "../components/overview/SalesChannelChart"
import UsersTable from "../components/users/UsersTable"

const userStats = {
    totalUsers: 152845,
    newUsersToday: 8237,
    actieUsers: 22,
    churnRate: '15%'
}

const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Usuários"} />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
      {/* STATS */}
        <motion.div 
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
        >
        <StateCard 
          name="Total de Usuários" icon={UserIcon} value={userStats.totalUsers.toLocaleString()} color='#6366F1'
        />   
        <StateCard 
          name="Novos Usuários" icon={UserPlus} value={userStats.newUsersToday} color='#10b981'
        />   
        <StateCard 
          name="Usuários Ativos" icon={UserCheck} value={userStats.newUsersToday} color='#f59e0b'
        />   
        <StateCard 
          name="Taxa de Rotatividade" icon={BarChart2} value={userStats.churnRate}  color='#ef4444'
        />   
        </motion.div>

        <UsersTable />

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SalesOverviewChart />
        <CategoryDistributionChart />
        <SalesChannelChart />
      </div>
      </main>
    </div>
  )
}

export default UsersPage
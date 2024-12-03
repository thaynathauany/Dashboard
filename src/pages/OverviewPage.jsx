import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Header from "../components/common/Header"
import { StateCard } from "../components/common/StateCard"
import SalesOverviewChart from "../components/overview/SalesOverviewChart"
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"
import SalesChannelChart from "../components/overview/SalesChannelChart"


const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Visão Geral"} />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
      {/* STATS */}
        <motion.div 
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
        >
        <StateCard 
          name="Valor Total" icon={Zap} value='R$12,345' color='#6366F1'
        />   
        <StateCard 
          name="Novos Usuários" icon={Users} value='1.234' color='#8B5CF6'
        />   
        <StateCard 
          name="Total de Produtos" icon={ShoppingBag} value='11' color='#EC4899'
        />   
        <StateCard 
          name="Taxa de Conversão" icon={BarChart2} value='12.5%' color='#10B981'
        />   
        </motion.div>

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

export default OverviewPage
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import { StateCard } from "../components/common/StateCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";

const salesStats = {
	totalRevenue: "R$1,234,567",
	averageOrderValue: "R$78.90",
	conversionRate: "3.45%",
	salesGrowth: "12.3%",
};

const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
    <Header title={"Vendas"} />
    <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        
    {/* STATS */}
      <motion.div 
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
      >
        <StateCard 
          name="Receita total" icon={DollarSign} value={salesStats.totalRevenue} color='#6366F1'
        />   
        <StateCard 
          name="Ticket Médio" icon={ShoppingCart} value={salesStats.averageOrderValue} color='#10b981'
        />   
        <StateCard 
          name="Taxa de Conversão" icon={TrendingUp} value={salesStats.conversionRate} color='#f59e0b'
        />   
        <StateCard 
          name="Total de Vendas" icon={CreditCard} value={salesStats.salesGrowth} color='#ef4444'
        />   
      </motion.div>

      <SalesOverviewChart />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <SalesByCategoryChart />
        <DailySalesTrend />
      </div>
  
    </main>
  </div>
  )
}

export default SalesPage;
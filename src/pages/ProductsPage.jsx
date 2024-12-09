import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import Header from "../components/common/Header"
import { StateCard } from "../components/common/StateCard"
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"
import ProductsTable from "../components/products/ProductsTable"
import SalesTrendChart from "../components/products/SalesTrendChart"


const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Produtos"} />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
      {/* STATS */}
        <motion.div 
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
        >
        <StateCard 
          name="Total de Produtos" icon={Package} value='11' color='#6366F1'
        />   
        <StateCard 
          name="Mais vendidos" icon={TrendingUp} value='Professional
          Scrum Master™' color='#10b981'
        />   
        <StateCard 
          name="Baixo Estoque" icon={AlertTriangle} value='Professional
          Scrum Product Owner™' color='#f59e0b'
        />   
        <StateCard 
          name="Total de Venda" icon={DollarSign} value='R$20.850' color='#ef4444'
        />   
        </motion.div>

      {/* PRODUCT TABLE */}
      <ProductsTable/>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SalesTrendChart />
        <CategoryDistributionChart />
      </div>
      </main>
    </div>
  )
}

export default ProductsPage
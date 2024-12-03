import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const salesData = [
	{ name: "Jul", sales: 4200 },
	{ name: "Ago", sales: 3800 },
	{ name: "Set", sales: 5100 },
	{ name: "Out", sales: 4600 },
	{ name: "Nov", sales: 5400 },
	{ name: "Dez", sales: 7200 },
	{ name: "Jan", sales: 6100 },
	{ name: "Fev", sales: 5900 },
	{ name: "Mar", sales: 6800 },
	{ name: "Abr", sales: 6300 },
	{ name: "Mai", sales: 7100 },
	{ name: "Jun", sales: 7500 },
];

const SalesOverviewChart = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
        initial= {{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
    >
        <h2 className="text-lg font-medium mb-4 text-gray-400">Resumo de Vendas</h2>
        <div className="h-80">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart
                    data={salesData}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
                            borderColor: "#4B5563"
                        }}
                        itemStyle={{ color: "#E5E7EB" }}
                    />
                    <Line 
                        type="monotone" 
                        dataKey="sales" 
                        stroke="#6366F1"
                        strokeWidth={3} dot= {{ fill: "#6366F1", strokeWidth: 2, r: 6}} 
                        activeDat= {{ r: 8, strokeWidth: 2 }} 
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default SalesOverviewChart
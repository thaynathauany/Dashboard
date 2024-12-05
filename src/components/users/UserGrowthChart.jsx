import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const userGrowthData = [
	{ name: "Jul", sales: 4200 },
	{ name: "Ago", sales: 3800 },
	{ name: "Set", sales: 5100 },
	{ name: "Out", sales: 4600 },
	{ name: "Nov", sales: 13400 },
	{ name: "Dez", sales: 7200 },
]
const UserGrowthChart = () => {
  return (
    <motion.div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
    initial= {{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2 }}
>
    <h2 className="text-lg font-medium mb-4 text-gray-400">Crescimento do Usuário</h2>
    <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart
                data={userGrowthData}
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

export default UserGrowthChart
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const productPerformanceData = [
	{ name: "PSM", vendas: 4000, receita: 2400, lucros: 2400 },
	{ name: "PSPO", vendas: 3000, receita: 1398, lucros: 2210 },
	{ name: "Agile Academy", vendas: 2000, receita: 9800, lucros: 2290 },
	{ name: "KSI", vendas: 2780, receita: 3908, lucros: 2000 },
	{ name: "PPDV", vendas: 1890, receita: 4800, lucros: 2181 },
];

const ProductPerformance = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-medium mb-4 text-gray-400'>Desempenho do produto</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={productPerformanceData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Bar dataKey='vendas' fill='#8B5CF6' />
						<Bar dataKey='receita' fill='#10B981' />
						<Bar dataKey='lucros' fill='#F59E0B' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default ProductPerformance;
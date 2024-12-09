import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";

const orderData = [
	{ id: "PED001", customer: "Carlos Silva", total: 235.4, status: "Concluído", date: "2023-07-01" },
	{ id: "PED002", customer: "Ana Oliveira", total: 412.0, status: "Processando", date: "2023-07-02" },
	{ id: "PED003", customer: "Marcos Souza", total: 162.5, status: "Cancelado", date: "2023-07-03" },
	{ id: "PED004", customer: "Juliana Lima", total: 750.2, status: "Pendente", date: "2023-07-04" },
	{ id: "PED005", customer: "Rafael Santos", total: 95.8, status: "Concluído", date: "2023-07-05" },
	{ id: "PED006", customer: "Fernanda Costa", total: 310.75, status: "Processando", date: "2023-07-06" },
	{ id: "PED007", customer: "Luiz Pereira", total: 528.9, status: "Cancelado", date: "2023-07-07" },
	{ id: "PED008", customer: "Camila Almeida", total: 189.6, status: "Concluído", date: "2023-07-08" },
];
const OrdersTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOrders, setFilteredOrders] = useState(orderData);

    const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = orderData.filter(
			(order) => order.id.toLowerCase().includes(term) || order.customer.toLowerCase().includes(term)
		);
		setFilteredOrders(filtered);
	};

    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
            initial= {{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
                <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium mb-4 text-gray-400"> Lista de Pedidos</h2>

            {/* Barra de Pesquisa */}
            <div className="relative">
                <input 
                type="text"
                placeholder="Procurar pedidos..."
                className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={handleSearch}
                value={searchTerm}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18}/>
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">ID do Pedido</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Cliente</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Total</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Data</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Ação</th>
                    </tr>
                </thead>
                <tbody className="divide divide-gray-700">
                    {filteredOrders.map((order) => (
                        <motion.tr
                            key={order.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3}}        
                        >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                {order.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                {order.customer}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                                {order.total}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											order.status === "Concluído"
												? "bg-green-100 text-green-800"
												: order.status === "Processando"
												? "bg-yellow-100 text-yellow-800"
												: order.status === "Pendente"
												? "bg-blue-100 text-blue-800"
												: "bg-red-100 text-red-800"
										}`}
									>
										{order.status}
									</span>
							</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{order.date}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
										<Eye size={18} />
									</button>
							</td>

                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
        </motion.div>
    )
}

export default OrdersTable
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";


const userData = [
    { id: 1, name: "Ana Silva", email: "ana.silva@example.com", role: "Admin", status: "Ativo" },
    { id: 2, name: "Carlos Souza", email: "carlos.souza@example.com", role: "Editor", status: "Ativo" },
    { id: 3, name: "Beatriz Oliveira", email: "beatriz.oliveira@example.com", role: "Usuário", status: "Inativo" },
    { id: 4, name: "Daniel Ferreira", email: "daniel.ferreira@example.com", role: "Admin", status: "Ativo" },
    { id: 5, name: "Fernanda Lima", email: "fernanda.lima@example.com", role: "Usuário", status: "Ativo" },
    { id: 6, name: "Gabriel Almeida", email: "gabriel.almeida@example.com", role: "Editor", status: "Inativo" },
    { id: 7, name: "Juliana Costa", email: "juliana.costa@example.com", role: "Admin", status: "Ativo" },
    { id: 8, name: "Rafael Santos", email: "rafael.santos@example.com", role: "Usuário", status: "Inativo" },
    { id: 9, name: "Patrícia Mendes", email: "patricia.mendes@example.com", role: "Editor", status: "Ativo" },
    { id: 10, name: "Lucas Pereira", email: "lucas.pereira@example.com", role: "Usuário", status: "Ativo" }
  ];

const UsersTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
	const [filteredUsers, setFilteredUsers] = useState(userData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = userData.filter(
			(user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
		);
		setFilteredUsers(filtered);
	};

    return (
        <motion.div 
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
            initial= {{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
        >
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium mb-4 text-gray-400">Usuários</h2>

            {/* Barra de Pesquisa */}
            <div className="relative">
                <input 
                type="text"
                placeholder="Procurar usuários..."
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
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Nome</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">E-mail</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Papel</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Ação</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-700">
                        {filteredUsers.map(user => (
                            <motion.tr
                                key={user.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3}}
                            >
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                                                {user.name.charAt(0)}
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-100"> {user.name} </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap "> {user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800">
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === "Ativo"
                                        ? "bg-green-800 text green-100"
                                        : "bg-red-800 text-red-100"
                                    }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300"> 
                                    <button className="text-indigo-400 hover:text-indigo-300 mr-2">Editar</button>
                                    <button className="text-red-400 hover:text-red-300 mr-2">Editar</button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    )
}


export default UsersTable
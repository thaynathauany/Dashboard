import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";


const userData = [
    { id: 1, nome: "Ana Silva", email: "ana.silva@example.com", role: "Admin", status: "Ativo" },
    { id: 2, nome: "Carlos Souza", email: "carlos.souza@example.com", role: "Editor", status: "Ativo" },
    { id: 3, nome: "Beatriz Oliveira", email: "beatriz.oliveira@example.com", role: "Usuário", status: "Inativo" },
    { id: 4, nome: "Daniel Ferreira", email: "daniel.ferreira@example.com", role: "Admin", status: "Ativo" },
    { id: 5, nome: "Fernanda Lima", email: "fernanda.lima@example.com", role: "Usuário", status: "Ativo" },
    { id: 6, nome: "Gabriel Almeida", email: "gabriel.almeida@example.com", role: "Editor", status: "Inativo" },
    { id: 7, nome: "Juliana Costa", email: "juliana.costa@example.com", role: "Admin", status: "Ativo" },
    { id: 8, nome: "Rafael Santos", email: "rafael.santos@example.com", role: "Usuário", status: "Inativo" },
    { id: 9, nome: "Patrícia Mendes", email: "patricia.mendes@example.com", role: "Editor", status: "Ativo" },
    { id: 10, nome: "Lucas Pereira", email: "lucas.pereira@example.com", role: "Usuário", status: "Ativo" }
  ];

const UsersTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(userData)

    const handleSearch = (e) => {

        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
    
        const filtered = userData.filter(product => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term));
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
            placeholder="Procurar produtos..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={searchTerm}
            value={searchTerm}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18}/>
        </div>
        </div>
        </motion.div>
    )
}


export default UsersTable
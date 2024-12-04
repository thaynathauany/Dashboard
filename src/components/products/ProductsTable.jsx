
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from 'lucide-react';
import { useState } from "react";

const PRODUCT_DATA = [
  {id: 1, photoURL: 'https://agileschool.com.br/wp-content/uploads/2024/11/IMG_0064.png', name: 'PPDV – Professional Product Discovery and Validation™', category: 'Scrum.org', price:1.701 , stock: 22, sales: 2},
  {id: 2, photoURL: 'https://agileschool.com.br/wp-content/uploads/2024/05/PSPO.png',name: 'PSPO – Professional Scrum Product Owner™',  category: 'Scrum.org', price:2.790 , stock: 9, sales: 15},
  {id: 3, photoURL: 'https://agileschool.com.br/wp-content/uploads/2024/05/PSM.png', name: 'PSM – Professional Scrum Master™',  category: 'Scrum.org', price: 1.990 , stock: 4, sales: 20},
  {id: 4, photoURL: 'https://agileschool.com.br/wp-content/uploads/2024/11/logo-kanban.png', name: 'KSD – Kanban System Design',  category: 'Kanban University', price:2.400 , stock: 22, sales: 7, className: 'highlight'},
  {id: 5, photoURL: 'https://agileschool.com.br/wp-content/uploads/2024/11/logo-kanban.png', name: 'KSI – Kanban System Improvement',  category: 'Kanban University', price:2.400 , stock: 24, sales: 0, className: 'highlight'},
  {id: 6, photoURL: 'https://agileschool.com.br/wp-content/uploads/2024/11/logo-customerExperience.png', name: 'F4P – Fit for Purpose',  category: 'Kanban University', price:1.701 , stock: 22, sales: 7, className: 'highlight'},
  {id: 7, photoURL: 'https://agileschool.com.br/wp-content/uploads/2024/05/PSMA-II.png', name: 'PSM-A – Professional Scrum Master Advanced Training™',  category: 'Scrum.org', price: 2.790 , stock: 22, sales: 7},
  {id: 8, photoURL: 'https://agileschool.com.br/wp-content/uploads/2024/05/SAFe.png', name: 'Leading SAFe® (Preparatório para certificação SAFe® 6 Agilist)',  category: 'Scaled Agile', price:1.701 , stock: 22, sales: 7},
  {id: 9, photoURL: 'https://agileschool.com.br/wp-content/uploads/2024/05/M-30-Foundation-Workshop.png', name: 'Management 3.0 Foundation Workshop',  category: 'Management 3.0', price:1.701 , stock: 22, sales: 7},
  {id: 10, photoURL: 'https://agileschool.com.br/wp-content/uploads/2024/05/PSPO-A.png', name: 'PSPO-A – Professional Scrum Product Owner Advanced™™',  category: 'Scrum.org', price: 2.790 , stock: 24, sales: 0},
  {id: 11, photoURL: 'https://agileschool.com.br/wp-content/uploads/2024/05/PSPBMs.png', name: 'PSPBM – Product Backlog Management Skills™',  category: 'Scrum.org', price:1.701 , stock: 24, sales: 0},
  {id: 12, photoURL: 'https://agileschool.com.br/wp-content/uploads/2024/05/PAL-E.png', name: 'PAL-E – Professional Agile Leadership Essentials™',  category: 'Scrum.org', price:1.990 , stock: 22, sales: 7},
  {id: 13, photoURL: 'https://agileschool.com.br/wp-content/uploads/2024/05/Logo-Agile-Academy-600x600.png', name: 'Agile Academy',  category: 'Agile School', price: 99, stock: '', sales: 79},
]
const ProductsTable = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);
  
  const handleSearch = (e) => {

    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = PRODUCT_DATA.filter(product => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term));
    setFilteredProducts(filtered);

  };

  return (
    <motion.div 
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial= {{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium mb-4 text-gray-400">Lista de Produtos</h2>

        {/* Barra de Pesquisa */}
        <div className="relative">
          <input 
            type="text"
            placeholder="Procurar produtos..."
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
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider"
              >
                Nome
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider"
              >
                Categoria
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider"
              >
                Preço
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider"
              >
                Estoque
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider"
              >
                Vendas
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider"
              >
                Ação
              </th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map(product => (
              <motion.tr 
                key={product.id} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3}}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  <img 
                    src={product.photoURL}
                    className={`w-12 ${product.className === 'highlight' ? 'custom-size' : 'size-10'}`}         
                    alt={`logo-${product.name}`} 
                  />
                  {product.name}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {product.category}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {product.price}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {product.stock}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {product.sales}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={18}/>
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <Trash2 size={18}/>
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

export default ProductsTable;
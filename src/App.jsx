import { Route, Routes } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import Sidebar from "./components/Sidebar";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";


function App() {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"/>
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidebar />
      <Routes>
        <Route path="/" element={< OverviewPage />}> </Route>
        <Route path="/produtos" element={< ProductsPage />}> </Route>
        <Route path="/usuarios" element={< UsersPage />}> </Route>
        <Route path="/vendas" element={< SalesPage />} ></Route>
        <Route path="/pedidos" element={< OrdersPage />} ></Route>
        <Route path="/analytics" element={< AnalyticsPage />} ></Route>
      </Routes>
    </div>
  )
}

export default App

import './App.css'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import './index.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from './components/ScrollToTop';


function App () {

  return (
    <>
      <div className="h-screen grid grid-rows-[auto_1fr]">
        <Navbar />
        <ScrollToTop/>
        <AppRoutes />
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
      
      </div>

    </>
  )
}

export default App
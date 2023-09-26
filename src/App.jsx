import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, ContactUs, Register, Login, Reset } from "./pages"
import { Header, Footer } from "./components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
    

  return (
    <>
      <BrowserRouter>
       <ToastContainer />
        <Header />
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/contactUs" element={<ContactUs />} />
             <Route path="/register" element={<Register />} />
             <Route path="/login" element={<Login />} />
             <Route path="/reset" element={<Reset />} />
           </Routes>
        <Footer />
      </BrowserRouter>
        
    </>
  )
}

export default App

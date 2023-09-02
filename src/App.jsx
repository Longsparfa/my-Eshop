import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, ContactUs, Register, Login, Reset } from "./pages"
import { Header, Footer } from "./components"



function App() {
    

  return (
    <>
      <BrowserRouter>
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

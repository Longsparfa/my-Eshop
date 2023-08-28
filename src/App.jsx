import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header, Footer } from "./components"
import { Home, ContactUs } from "./pages"



function App() {
    

  return (
    <>
      <BrowserRouter>
        <Header />
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/contactUs" element={<ContactUs />} />
           </Routes>
        <Footer />
      </BrowserRouter>
        
    </>
  )
}

export default App

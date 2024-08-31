import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom'
import Cart from "./pages/Cart"
import StoreContext from "./contexts/StoreContext"
import Dummy from "./pages/Dummy"
import PrintInvoice from "./components/PrintInvoice"

function App() {
  return (
    // <StoreContext>
    //   <Routes>
    //     <Route path="/" index element={<Home />} />
    //     <Route path="/cart" element={<Cart />} />
    //     <Route path="/dummy" element={<Dummy />} />
    //   </Routes>
    // </StoreContext>
    <PrintInvoice/>
  )
}

export default App

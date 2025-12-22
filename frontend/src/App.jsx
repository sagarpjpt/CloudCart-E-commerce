import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductListing from './pages/ProductListing'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path='/product-listing' element={<ProductListing />} />
      </Routes>
      <div className="bg-[#f8e3f5]">
        <Footer />
      </div>
    </div>
  )
}

export default App
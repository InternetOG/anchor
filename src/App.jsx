import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import RootLayout from "./routes/RootLayout"
import Home from "./pages/Home"
import About from "./pages/ErrorBoundary"
import Shop from "./pages/Shop"
import Faq from "./pages/Faq"
import ErrorBoundary from './pages/ErrorBoundary'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="faq" element={<Faq />} />
    </Route>
  )
)

function App() {
  return (
    <main>
      <RouterProvider router={router}/>
    </main>
  )
}

export default App

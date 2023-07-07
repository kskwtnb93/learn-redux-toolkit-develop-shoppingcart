import './App.css'
import { Navbar } from './components/Navbar'
import { CartContainer } from './components/CartContainer'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals } from './features/cart/CartSlice'

function App() {
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(calculateTotals())
  }, [items, dispatch])

  return (
    <main>
      <Navbar />

      <CartContainer />
    </main>
  )
}

export default App

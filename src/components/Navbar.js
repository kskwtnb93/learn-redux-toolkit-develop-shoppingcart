import { useSelector } from 'react-redux'
import { CartIcon } from '../HeroIcons'

export const Navbar = () => {
  const { totalCount } = useSelector((store) => store.cart)

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Shopping</h3>

        <div className="nav-container">
          <CartIcon />

          <div className="amount-container">
            <p className="total-amount">{totalCount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

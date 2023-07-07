import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/CartSlice'
import { CartItem } from './CartItem'

export const CartContainer = () => {
  const dispatch = useDispatch()
  const { items, totalCount, totalPrice } = useSelector((state) => state.cart)

  return (
    <section>
      <header className="cart">
        <h2>買い物かご</h2>

        {totalCount === 0 ? (
          <p className="empty-cart">何も入ってません</p>
        ) : (
          <>
            <div>
              {items.map((item) => {
                return <CartItem key={item.id} {...item} />
              })}
            </div>

            <footer>
              <hr />
              <div className="cart-total">
                <h4>
                  合計 <span>{totalPrice}円</span>
                </h4>
              </div>

              <button
                className="btn clear-btn"
                onClick={() => dispatch(clearCart())}
              >
                全削除
              </button>
            </footer>
          </>
        )}
      </header>
    </section>
  )
}
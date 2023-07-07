import { useSelector, useDispatch } from 'react-redux'
import { CartItem } from './CartItem'
import { openModal } from '../features/modal/ModalSlice'

export const CartContainer = () => {
  const dispatch = useDispatch()
  const { items, totalPrice } = useSelector((state) => state.cart)

  return (
    <section>
      <header className="cart">
        <h2>買い物かご</h2>

        {items.length === 0 ? (
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
                onClick={() => dispatch(openModal())}
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

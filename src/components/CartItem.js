import { PlusIcon, MinusIcon } from '../HeroIcons'
import { useDispatch } from 'react-redux'
import { removeItem, increase, decrease } from '../features/cart/CartSlice'

export const CartItem = ({ id, img, title, price, count }) => {
  const dispatch = useDispatch()

  return (
    <article className="cart-item">
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <p className="cart-price">{price}円</p>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          削除
        </button>
      </div>

      <div>
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <PlusIcon />
        </button>
        <p className="amount">{count}</p>
        <button
          className="amount-btn"
          onClick={() =>
            count === 1 ? dispatch(removeItem(id)) : dispatch(decrease(id))
          }
        >
          <MinusIcon />
        </button>
      </div>
    </article>
  )
}

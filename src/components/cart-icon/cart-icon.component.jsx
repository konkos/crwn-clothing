import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { CartIconContainer, ItemCount } from './cart-icon.styles'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'


export default function CartIcon() {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const toggleIsCartOpen = () => { setIsCartOpen(!isCartOpen) }

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

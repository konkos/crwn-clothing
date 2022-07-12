import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Button from '../button/button.component'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item.component'
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx'


export default function CartDropdown() {



    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (
                        cartItems && cartItems.map(item => <CartItem cartItem={item} key={item.id} />)

                    ) :
                        <EmptyMessage>Your Cart Is Empty</EmptyMessage>
                }
            </CartItems>
            <Link to='/checkout' >
                <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
            </Link>
        </CartDropdownContainer>
    )
}

import { Outlet } from 'react-router-dom'
import { useContext } from 'react'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from './navigation.styles'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../contexts/cart.context'

export default function Navigation() {

    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>

                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {
                        //{<span>{currentUser.displayName} </span>} add to signout
                        currentUser ? (<NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>) : (<NavLink to='/auth'>Sign In</NavLink>)
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    )
}
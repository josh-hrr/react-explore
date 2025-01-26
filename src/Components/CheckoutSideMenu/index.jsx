
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/outline'  
import { ShoppingCartContext } from '../../Context'
import '../CheckoutSideMenu/styles.css'
import { OrderCard } from '../OrderCard'

import { totalPrice } from '../../utils/index.js'

export const CheckoutSideMenu = () => {
    const {
        isCheckoutSideMenuOpen, 
        closeCheckoutSideMenu,
        cartProducts,
        setCartProducts,
        setOrder,
        order,
        setSearchByTitle} = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
    }
    const handleCheckout = () => { 
        const orderToAdd = {
            date: '01.02.25',
            product: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }
        setOrder([...order, orderToAdd])
        setCartProducts([])
        setSearchByTitle(null)
        closeCheckoutSideMenu()
    }

    return (
        <aside 
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={() => closeCheckoutSideMenu()}>
                    <XMarkIcon  className='h-6 w-6 text-black' />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>   
            {
                cartProducts.map((product) => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        imageUrl={product.images}
                        price={product.price}
                        handleDelete={handleDelete}
                        />
                ))
            }
            </div>
            <div className='p-6 '>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light '>Total: </span>
                    <span className='font-medium text-2xl '>{totalPrice(cartProducts)}</span>
                </p> 
                <Link to={'/my-orders/last'}>
                    <button 
                        className='text-white w-full py-3 bg-black rounded-lg' 
                        onClick={() => handleCheckout()}>
                            Checkout
                    </button>
                </Link>
            </div>
        </aside>
    )
}
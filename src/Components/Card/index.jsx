import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline'


export const Card = ({data}) => {
    const { count, 
            setCount, 
            openProductDetail, 
            setProductToShow, 
            cartProducts, 
            setCartProducts,
            openCheckoutSideMenu,
            closeProductDetail,
            closeCheckoutSideMenu } = useContext(ShoppingCartContext)
    const showProduct = (productDetail) => {
        openProductDetail()
        setProductToShow(productDetail)
        closeCheckoutSideMenu()
    }
    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        setCount(count + 1)
        setCartProducts([...cartProducts, productData]) 
        openCheckoutSideMenu()
        closeProductDetail()
    }
    const renderIcon = (data) => {
        const isInCart = cartProducts.filter(product => product.id === data.id).length > 0
         
        if(isInCart){
            return (
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                >
                    <CheckIcon className='h-6 w-6 text-black'/>
                </div>
                )
        }else{ 
            return (
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={(event) => addProductsToCart(event, data)}    
                >
                    <PlusIcon className='h-6 w-6 text-black'/>
                </div> 
                )
        } 
    }

    return (
        <div 
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={() => showProduct(data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black m-2 px-3 py-0.5'>{data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.images} alt={data.title} />
                {renderIcon(data)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.title}</span>
                <span className='text-lg font-medium'>{data.price}</span>
            </p>
        </div>  
    )
}
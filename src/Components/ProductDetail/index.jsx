import { XMarkIcon } from '@heroicons/react/24/outline'  
import { ShoppingCartContext } from '../../Context'
import { useContext } from 'react'
import '../ProductDetail/styles.css'


export const ProductDetail = () => {
    const {
            isProductDetailOpen, 
            closeProductDetail, 
            productToShow }  = useContext(ShoppingCartContext)
    return (
        <aside 
            className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={() => closeProductDetail()}>
                    <XMarkIcon  className='h-6 w-6 text-black' />
                </div>
            </div>
            <figure className='px-6'>
                <img 
                    className='w-full h-full rounded-lg' 
                    src={productToShow.images} 
                    alt={productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
                <span className='font-medium text-md'>{productToShow.title}</span>
                <span className='font-light text-sm'>{productToShow.description}</span>
            </p>
        </aside>
    )
}


/* my solution 
import { useContext } from "react"
import { ShoppingCartContext } from '../Context' 
export const TotalPrice = () => { 
    const { cartProducts } = useContext(ShoppingCartContext)
    let sum = 0;
    cartProducts.map((data) => {
        if(data.price != null){ 
            sum = sum + data.price 
        }
    }) 
    return sum;
}
*/

/**
 * This function calculates total price of a new order
 * @param {Array} products cartProducts: Array of objects 
 * @returns {number} totalPrice
 */

export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price)
    return sum
}
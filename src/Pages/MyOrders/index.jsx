import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppingCartContext } from '../../Context'
import { Link } from "react-router-dom"; 


export function MyOrders() { 

  const { order } = useContext(ShoppingCartContext) 

    return (
      <> 
        <Layout> 
          <div className='flex flex-col w-100'>   
          <h1 className='text-center mb-2'>My Orders</h1> 
            <div> 
                {
                  order.map((order, index) => (
                    <Link key={index} to={`/my-order/${index}`}>
                      <OrdersCard 
                        totalPrice={order.totalPrice}
                        totalProducts={order.totalProducts} />  
                    </Link>
                    
                  ))
                }
            </div> 
          </div>
        </Layout>
      </>
    )
  } 
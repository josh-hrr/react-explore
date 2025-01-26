import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export function MyOrder() {  
  const { order } = useContext(ShoppingCartContext) 
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if(index === 'last'){
    index = order?.length - 1;
  } 

    return (
      <> 
        <Layout> 
          <div className='flex flex-col w-80'>   
            <div className="flex w-80  m-5 justify-center items-center relative"> 
              <Link to='/my-orders' className='absolute left-0'> 
                <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'> 
                </ChevronLeftIcon> 
              </Link>
              <h1>My Order</h1>
            </div>
            {
                order?.[index]?.product.map((product) => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        imageUrl={product.images}
                        price={product.price} 
                    />
                ))
            }
            </div>
        </Layout>
      </>
    )
  } 
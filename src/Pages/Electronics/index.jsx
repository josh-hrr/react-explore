import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"
import { Card } from "../../Components/Card"

export const Electronics = () => {
    const { items, setSearchByTitle, searchByCategory, filteredItems } = useContext(ShoppingCartContext)
    const renderView = () => {
    if(searchByCategory?.length > 0){  
        if(filteredItems?.length > 0){
        return (
            filteredItems?.map((item) => (
            <Card key={item.id} data={item} />
            ))
        )
        }else{
        return (
            <div>
            No products found, search again
            </div>
            )
        } 
    }else {
            return (
            items?.map((item) => (
                <Card key={item.id} data={item} />
            ))
            )
        }
    }

    return (
        <> 
            <Layout> 
                <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>Electronics</h1>
                </div>
                <input 
                type="text" 
                placeholder='Search a product' 
                className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                onChange={(event) => setSearchByTitle(event.target.value)}/>
                <section className='grid gap-5 grid-cols-3 w-full max-w-screen-lg'>
                    { 
                    renderView()
                    }  
                </section> 
                <ProductDetail />
            </Layout>
        </>
    )
}
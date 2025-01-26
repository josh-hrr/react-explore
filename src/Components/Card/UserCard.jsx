export const UserCard = ({data}) => {
    console.log(data)
    return (
        <div className='bg-white cursor-pointer w-full h-50 rounded-lg grid grid-cols-2 items-center border-r-8 border-b-4 border-green-100 m-3'>
            <div> 
                <figure className='relative w-full h-4/5 justify-center flex m-2'>
                    <span className='absolute bottom-0 left-10 rounded-lg text-black text-xs m-2 px-3 py-0.5 bg-green-100'>📍 Ciudad de Guatemala</span>
                    <span className='absolute bottom-6 left-10 rounded-lg text-black text-xs m-2 px-3 py-0.5 bg-green-300'>Disponible</span>
                    <div className=' flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'></div>  
                    <img className='rounded-full w-40 h-40 object-cover' src='https://images.pexels.com/photos/30155287/pexels-photo-30155287/free-photo-of-man-cuddling-black-labrador-puppy-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt={data.title} />
                </figure>
            </div>
            <div className='h-full flex flex-col justify-around m-2'>  
                    <p className='flex justify-between items-center'>
                        <span className='text-sm font-bold'>Hans Herrera</span>
                        <span className='text-lg font-light'>Q. {data.price}/dia</span>
                    </p>   
                    <p>Sera como un nuevo miembro de la familia</p>
                    <img width='100px' src="https://static.vecteezy.com/system/resources/thumbnails/035/715/505/small_2x/3d-glossy-yellow-five-stars-rating-png.png" alt="" />
                    <div className='flex gap-3'>
                        <p className='bg-white/60 rounded-lg text-black text-xs px-3 py-0.5 bg-yellow-200 w-20 text-center'>Grooming</p>
                        <p className='bg-white/60 rounded-lg text-black text-xs px-3 py-0.5 bg-yellow-200 w-20 text-center'>Walks</p>
                    </div> 
             </div>
        </div>    
    )
}
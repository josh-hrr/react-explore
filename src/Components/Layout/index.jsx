export const Layout = ({children}) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center mt-20'>
                {children}
            </div>
        </>
    )
}
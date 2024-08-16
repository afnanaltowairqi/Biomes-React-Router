import Cards from '../components/Cards.jsx'

function Beach() {
    return(
        <>
        <div className="flex flex-col justify-center items-center h-screen bg-center bg-cover beach-img max-sm:h-[100vh]">
            <div className='h-[100vh] flex flex-col justify-end max-sm:h-[40vh]'>
            <div className='flex flex-col justify-center items-center text-center gap-4 w-[30vw] h-[30vh] bg-[#1a1a1a7a] rounded-lg max-sm:w-[80vw] max-sm:h-[30vh]'>
                <h1 className='text-white text-2xl font-medium font-sans'>Beach</h1>
                <p className='text-white font-sans max-sm:text-sm'> The beach is a shoreline area made up of sand, pebbles, or rocks along a body of water. It's a popular spot for activities like swimming, sunbathing, and sports. Beaches vary in appearance and serve as important ecosystems and cultural gathering places.</p>
            </div>
            </div>
            <div className='flex items-end h-[60vh] '>
                <Cards />
            </div>
        
        </div>
        

        </>
    );
}
export default Beach
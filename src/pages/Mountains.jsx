import Cards from '../components/Cards.jsx'

function Mauntains() {
    return(
        <>
        <div className="flex flex-col justify-center items-center h-screen bg-center bg-cover mount-img max-sm:h-[100vh]">
            <div className='h-[100vh] flex flex-col justify-end max-sm:h-[40vh] '>
            <div className='flex flex-col justify-center items-center text-center gap-4 w-[30vw] h-[30vh] bg-[#1a1a1a7a] rounded-lg max-sm:w-[80vw] max-sm:h-[30vh]'>
                <h1 className='text-white text-2xl font-medium font-sans'>Mauntains</h1>
                <p className='text-white font-sans max-sm:text-sm'> Mountains are large landforms with steep slopes and significant elevation, formed by tectonic forces or volcanic activity. They influence weather, provide habitats for diverse species, and are popular for activities like hiking, climbing, and skiing.</p>
            </div>
            </div>
            <div className='flex items-end h-[60vh] '>
                <Cards />
            </div>
        
        </div>
        

        </>
    );
}
export default Mauntains
import Cards from '../components/Cards.jsx'

function Desert() {
    return(
        <>
        <div className="flex flex-col justify-center items-center h-screen bg-center bg-cover desert-img max-sm:h-[100vh]">
            <div className='h-[100vh] flex flex-col justify-end max-sm:h-[40vh]'>
            <div className='flex flex-col justify-center items-center text-center gap-4 w-[30vw] h-[30vh] bg-[#1a1a1a7a] rounded-lg max-sm:w-[80vw] max-sm:h-[30vh]'>
                <h1 className='text-white text-2xl font-medium font-sans'>Desert</h1>
                <p className='text-white font-sans max-sm:text-sm'> A desert is a dry, barren area with very little rainfall, extreme temperatures, and sparse vegetation. Deserts can be hot or cold and have unique landscapes like sand dunes and rocky plateaus. Despite harsh conditions, they support specially adapted plants and animals.</p>
            </div>
            </div>
            <div className='flex items-end h-[60vh] '>
                <Cards />
            </div>
        
        </div>
        

        </>
    );
}
export default Desert
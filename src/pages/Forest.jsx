import Cards from '../components/Cards.jsx'

function Forest() {
    return(
        <>
        <div className="flex flex-col justify-center items-center h-screen bg-center bg-cover forest-img max-sm:h-[100vh]">
            <div className='h-[100vh] flex flex-col justify-end max-sm:h-[40vh]'>
            <div className='flex flex-col justify-center items-center text-center gap-4 w-[30vw] h-[30vh] bg-[#1a1a1a7a] rounded-lg max-sm:w-[80vw] max-sm:h-[30vh]'>
                <h1 className='text-white text-2xl font-medium font-sans'>Forest</h1>
                <p className='text-white font-sans max-sm:text-sm'> A forest is a large area covered with trees and other vegetation. Forests are vital ecosystems, providing habitat for wildlife, regulating the climate, and supporting biodiversity. They are also important for human recreation and resources such as timber and medicinal plants.</p>
            </div>
            </div>
            <div className='flex items-end h-[60vh] '>
                <Cards />
            </div>
        
        </div>
        

        </>
    );
}
export default Forest
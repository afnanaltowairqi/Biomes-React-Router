import Cards from '../components/Cards.jsx'

function Snow() {
    return(
        <>
        <div className="flex flex-col justify-center items-center h-screen bg-center bg-cover snow-img max-sm:h-[100vh]">
            <div className='h-[100vh] flex flex-col justify-end max-sm:h-[40vh]'>
            <div className='flex flex-col justify-center items-center text-center gap-4 w-[30vw] h-[30vh] bg-[#1a1a1a7a] rounded-lg max-sm:w-[80vw] max-sm:h-[30vh]'>
                <h1 className='text-white text-2xl font-medium font-sans'>Snow</h1>
                <p className='text-white font-sans max-sm:text-sm'> A snow biome, or tundra, is a cold environment with low temperatures and heavy snowfall. It experiences two main seasons, winter and summer, and hosts specialized plant and animal life. These biomes exist in polar regions and on high mountain tops.</p>
            </div>
            </div>
            <div className='flex items-end h-[60vh] '>
                <Cards />
            </div>
        
        </div>
        

        </>
    );
}
export default Snow
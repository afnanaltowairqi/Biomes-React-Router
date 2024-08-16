import { Link } from "react-router-dom"
function Cards() {
    return(
        <>
        <div className="cards flex flex-row justify-center items-center gap-2 p-2 max-sm:flex-col max-sm:h-[60vh]">
        <Link to ="/Beach"> <div className="bg-[#dbdbdb] w-[18vw] h-[18vh] flex justify-center items-center rounded-lg max-sm:h-[10vh] max-sm:w-[60vw] "> 
                <p className='text-black font-bold font-sans'>Beach</p>
            </div> </Link>
        <Link to ="/Desert"><div className="bg-[#dbdbdb] w-[18vw] h-[18vh] flex justify-center items-center rounded-lg max-sm:h-[10vh] max-sm:w-[60vw]"> 
                <p className='text-black font-bold font-sans'>Desert</p>
            </div></Link>
        <Link to ="/Forest"><div className="bg-[#dbdbdb] w-[18vw] h-[18vh] flex justify-center items-center rounded-lg max-sm:h-[10vh] max-sm:w-[60vw]"> 
                <p className='text-black font-bold font-sans'>Forest</p>
            </div></Link>
        <Link to ="/Snow"><div className="bg-[#dbdbdb] w-[18vw] h-[18vh] flex justify-center items-center rounded-lg max-sm:h-[10vh] max-sm:w-[60vw]"> 
                <p className='text-black font-bold font-sans'>Snow</p>
            </div></Link>
            <Link to ="/Mountains"><div className="bg-[#dbdbdb] w-[18vw] h-[18vh] flex justify-center rounded-lg items-center max-sm:h-[10vh] max-sm:w-[60vw] "> 
                <p className='text-black font-bold font-sans'>Mountains</p>
            </div></Link>

        </div>
        </>
    );
}
export default Cards
import Navbar from "./Navbar";
import axios from "axios";
import { Outlet, useLoaderData, useLocation, useNavigate } from "react-router-dom";

function Root() {
    const location = useLocation();
    const curr_path = location.pathname ;
    
    return (
        <>
            {
                curr_path === '/register' ||  curr_path === '/login' ? '': <Navbar/> 
            }
            <Outlet />
            {
                curr_path === '/' ? 
                 <button id='back-to-top' className="group fixed right-3 sm:right-5 z-50 bottom-4 sm:bottom-8 sm:mr-10 p-2 w-10 h-10 stroke-1 hover:stroke-2 bg-black text-white rounded-full hover:scale-x-105 ring-1 ring-transparent" onClick={()=>backToTop()}>
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
                : ''
            }
        </>
     );
}

export default Root;

/////////back to top button function for home page//////
function backToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

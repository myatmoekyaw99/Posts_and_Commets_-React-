import { HomeIcon } from "@heroicons/react/24/outline";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { getLoginUser } from "../users/UserProfile";
import { useContext } from "react";
import { AuthContext } from "../users/context/AuthContext";

function Navbar() {
    let user = getLoginUser();

    const navigator = useNavigate();
    const location = useLocation();

    const curr_path = location.pathname ;

    const handleLogout = ()=>{
        userLogout();
        curr_path === '/' ? window.location.reload()
        :navigator('/');
    }

    return ( 
        <>
        {
            curr_path === '/' ?
            <HomePageNavbar user={user} handleLogout={()=>handleLogout()}/>
            :
            <OtherPageNavbar user={user} handleLogout={()=>handleLogout()}/>
        }
        </>
     );
}

export default Navbar;

/////////////Homepage Navbar component////////////
export function HomePageNavbar({user,handleLogout}){
    return (
        <nav className="sticky top-0 z-50 bg-slate-400 flex flex-col min-[810px]:flex-row w-full min-[810px]:h-14 lg:h-12 min-[810px]:py-2 border-b-[1px] border-b-slate-600 hover:border-b-gray-500 ">
            <h3 className="bg-gray-800 md:bg-slate-400 mt-0 text-center min-[810px]:basis-1/12 text-blue-900 md:ml-5 lg:ml-10 hover:ml-11 text-2xl font-bold font-serif">OurBlog</h3>
            <ul className="w-[80%] min-[810px]:basis-10/12 text-center mx-auto my-1 lg:my-0 flex flex-row gap-4 min-[810px]:gap-5 lg:gap-10 ">
                <NavLink to="/" className={({ isActive, isPending }) =>
                    isActive
                        ? "active text-sm my-1 font-bold hidden sm:inline-block"
                        : isPending
                        ? "pending hidden sm:inline-block"
                        : "text-sm my-1 font-bold text-blue-800 hover:text-gray-950 hidden sm:inline-block"
                }>Home</NavLink>  
                <ListItem avalue="#feature-post" listvalue="Feature Posts"/>
                <ListItem avalue="#about" listvalue="About"/>
                <ListItem avalue="#all-post" listvalue="All Posts"/>
                <ListItem avalue="#contact" listvalue="Contact"/>
                <span  className="border border-r-[1px] border-r-slate-500 hidden sm:inline-block"></span>
                {
                    user ? <LoginProfile userlogout={handleLogout}/> 
                    : <>
                        <NavLink to="/register" className="text-blue-800 hover:text-slate-600 hover:bg-slate-700 text-lg sm:text-sm my-0 sm:my-1 mx-auto font-bold">Register</NavLink> 
                        <NavLink to="/login" className="text-blue-800 hover:text-slate-600 hover:bg-slate-700 text-lg sm:text-sm my-0 sm:my-1 mx-auto font-bold">Login</NavLink> 
                      </>
                }
            </ul>
        </nav>
    );
}

//////////////Other page navbar component/////
export function OtherPageNavbar({user,handleLogout}){
    return (
        <nav className="sticky top-0 z-50 bg-gray-900 flex flex-col min-[810px]:flex-row min-[810px]:gap-20 w-full min-[810px]:h-14 lg:h-12 min-[810px]:py-2 border-b-[0.8px] border-b-gray-600 hover:border-b-gray-400 ">
            <h3 className="mt-0 text-center min-[810px]:basis-1/12 text-white ml-10 hover:ml-11 text-2xl font-bold font-serif">OurBlog</h3>
            <ul className="flex min-[810px]:basis-10/12 mx-auto justify-center max-md:my-1 gap-5 md:gap-10 my-1 lg:my-0">
                <NavLink to="/" className={({ isActive, isPending }) =>
                    isActive
                        ? "active text-sm my-1 font-bold"
                        : isPending
                        ? "pending"
                        : "text-sm my-1 font-bold text-slate-200 hover:text-blue-500"
                }>
                <HomeIcon className="w-6 h-6"></HomeIcon>
                </NavLink>  
                <span  className="border border-r-[1px] border-r-slate-400"></span>
                {
                    user ? <LoginProfile userlogout={()=>handleLogout()}/> 
                    : <>
                        <NavLink to="/register" className="text-blue-800 hover:text-slate-600 hover:bg-slate-700 text-lg sm:text-sm my-0 sm:my-1 mx-auto font-bold">Register</NavLink> 
                        <NavLink to="/login" className="text-blue-800 hover:text-slate-600 hover:bg-slate-700 text-lg sm:text-sm my-0 sm:my-1 mx-auto font-bold">Login</NavLink> 
                      </> 
                }
            </ul>
        </nav>
    );
}


////////list component for navbar//////////
export function ListItem({avalue,listvalue}) {
    return ( 
        <a href={avalue} className="text-blue-800 hover:text-slate-600 hover:bg-slate-700 text-lg sm:text-sm my-0 sm:my-1 font-bold hidden sm:inline-block">
            <li>{listvalue}</li>
        </a>
     );
}

////////Logout button and user profile component////////
export function LoginProfile({userlogout}){

    const user_login = getLoginUser();
    const navigator = useNavigate();
    const {login,user} = useContext(AuthContext);

    const handleClick = ()=>{
        if(user){
            navigator('/profile');
        }else{
            navigator('/login');
        }
    };

    return (
        <div className="max-sm:w-full flex flex-row justify-center align-middle gap-2">
            <span onClick={handleClick} className="group text-sm font-bold text-white hover:text-blue-800 hover:cursor-pointer"><img src={user_login.profile_url} className="w-9 h-8 inline-block mr-1 rounded-full align-middle group-hover:ring-2 group-hover:ring-slate-200 hover:cursor-pointer"/><span className="max-sm:inline-block hidden min-[950px]:inline-block">{user_login.name}</span></span>
            <button className="text-blue-800 bg-white shadow-sm shadow-black font-bold text-md font-serif ml-4 px-2 rounded-xl hover:text-red-400 hover:ring-1 hover:ring-white hover:scale-x-90" onClick={userlogout}>Logout</button>
        </div>
    );
}

/////////logout function/////////
export function userLogout(){
    localStorage.removeItem('login_user');
    alert('Account successfully logout!');
}

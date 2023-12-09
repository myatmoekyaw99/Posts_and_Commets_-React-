import { HomeIcon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router-dom";
import { getLoginUser } from "../users/UserProfile";
import { useAuth } from "../users/context/AuthContext";


function Navbar() {
    // let user = getLoginUser();

    const {user,logout} = useAuth();
    const navigate = useNavigate();

    const curr_path = window.location.pathname ;

    const handleLogout = ()=>{
        userLogout();
        logout;
        curr_path === '/' ? location.reload()
        :navigate('/');
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
        <nav className="sticky top-0 z-50 bg-slate-400 flex flex-row w-full h-12 py-2 border-b-[1px] border-b-slate-600 hover:border-b-gray-500 ">
            <h3 className="basis-1/12 text-blue-900 ml-10 hover:ml-11 text-2xl font-bold font-serif lg:w-10">OurBlog</h3>
            <ul className="basis-10/12 mx-auto flex flex-row gap-10">
                <NavLink to="/" className={({ isActive, isPending }) =>
                    isActive
                        ? "active text-sm my-1 font-bold"
                        : isPending
                        ? "pending"
                        : "text-sm my-1 font-bold text-blue-800 hover:text-gray-950"
                }>Home</NavLink>  
                <ListItem avalue="#feature-post" listvalue="Feature Posts"/>
                <ListItem avalue="#about" listvalue="About"/>
                <ListItem avalue="#all-post" listvalue="All Posts"/>
                <ListItem avalue="#contact" listvalue="Contact"/>
                <span  className="border border-r-[1px] border-r-slate-500"></span>
                {
                    user ? <LoginProfile userlogout={handleLogout}/> 
                    : <><ListItem avalue="/register" listvalue="Register"/> 
                        <ListItem avalue="/login" listvalue="Login"/> </>
                }
            </ul>
        </nav>
    );
}

//////////////Other page navbar component/////
export function OtherPageNavbar({user,handleLogout}){
    return (
        <nav className="sticky top-0 z-50 bg-gray-900 flex flex-row gap-40 justify-between align-middle w-full h-14 py-3 border-b-[0.8px] border-b-gray-600 hover:border-b-gray-400 ">
            <h3 className="max-w-[50px] text-white ml-10 hover:ml-11 text-2xl font-bold font-serif">OurBlog</h3>
            <ul className="flex flex-row gap-10 mr-10">
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
                    : <><ListItem avalue="/register" listvalue="Register"/> 
                        <ListItem avalue="/login" listvalue="Login"/> </> 
                }
            </ul>
        </nav>
    );
}


////////list component for navbar//////////
export function ListItem({avalue,listvalue}) {
    return ( 
        <a href={avalue} className="text-blue-800 hover:text-slate-600 text-sm my-1 font-bold">
            <li>{listvalue}</li>
        </a>
     );
}

////////Logout button and user profile component////////
export function LoginProfile({userlogout}){

    const user = getLoginUser();
    return (
        <div className="flex flex-row justify-center align-middle gap-2">
            <a href="/profile" className="group text-sm font-bold text-white hover:text-blue-800"><img src={user.profile_url} className="w-9 h-8 inline-block mr-1 rounded-full align-middle group-hover:ring-2 group-hover:ring-slate-200 hover:cursor-pointer"/>{user.name}</a>
            <button className="text-blue-800 bg-white shadow-sm shadow-black font-bold text-md font-serif ml-4 px-2 rounded-xl hover:text-red-400 hover:ring-1 hover:ring-white hover:scale-x-90" onClick={userlogout}>Logout</button>
        </div>
    );
}

/////////logout function/////////
export function userLogout(){
    localStorage.removeItem('login_user');
    alert('Account successfully logout!');
}

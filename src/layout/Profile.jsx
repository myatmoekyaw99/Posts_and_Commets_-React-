import { DocumentTextIcon, IdentificationIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { NavLink, Outlet } from "react-router-dom";

function Profile() {

    return ( 
        <div className="w-full h-[91vh] flex flex-row gap-0 bg-gray-900 text-white">
            <SideBar/>
            <Outlet/>
        </div>
     );
}

export default Profile;

//////Sidebar component//////
export function SideBar(){
    return (
        <div className="relative basis-1/5 pt-4 pl-2 bg-gray-800 text-white text-inner shadow-inner shadow-zinc-950">
            <ul className="w-full flex flex-col gap-1">
                <SideBarLink url={"/profile"} icon={<IdentificationIcon className="w-6 h-6 inline-block"></IdentificationIcon>} name={"Profile"}/>
                <SideBarLink url={"/profile/posts"} icon={<DocumentTextIcon className="w-6 h-6 inline-block"></DocumentTextIcon>} name={"Posts"}/>
                <SideBarLink url={"/profile/create"} icon={<PlusCircleIcon className="w-6 h-6 inline-block"></PlusCircleIcon>} name={"Post Create"}/>
            </ul>

            <p className="fixed left-6 bottom-0 mb-3 text-sm text-gray-400">Copyright<sup className="text-blue-500 text-sm font-bold animate-ping">&copy;</sup> @OurBlog.com</p>
        </div>
    );
}

////////////Sidebar's link component//////////
export function SideBarLink({url,icon,name}){
    return (
        <NavLink to={url} end className={({ isActive, isPending }) =>
            isActive
                ? "mr-1 p-1 bg-gray-700 rounded-2xl cursor-pointer"
                : isPending
                ? "mr-1 p-1 bg-blue-300 rounded-2xl cursor-pointer"
                : "mr-1 p-1 text-gray-500 hover:text-gray-300 rounded-2xl cursor-pointer"
        }
        >
            <li className="ml-1 p-1 flex flex-row align-middle content-center">
                {icon}
                <span className="ml-2">{name}</span>
            </li>
        </NavLink>
    );
}


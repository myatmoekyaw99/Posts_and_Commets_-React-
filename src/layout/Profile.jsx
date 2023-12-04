import { DocumentTextIcon, IdentificationIcon } from "@heroicons/react/24/outline";
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


export function SideBar(){
    return (
        <div className="relative basis-1/5 pt-4 pl-2 bg-gray-800 text-white text-inner shadow-inner shadow-zinc-950">
            <ul className="w-full flex flex-col gap-1">
                <NavLink to="/profile" end className={({ isActive, isPending }) =>
                    isActive
                        ? "mr-1 p-1 bg-gray-700 rounded-2xl cursor-pointer"
                        : isPending
                        ? "mr-1 p-1 bg-blue-300 rounded-2xl cursor-pointer"
                        : "mr-1 p-1 text-gray-500 hover:text-gray-300 rounded-2xl cursor-pointer"
                }
                >
                    <li className="ml-1 p-1 flex flex-row align-middle content-center">
                        <IdentificationIcon className="w-6 h-6 inline-block"></IdentificationIcon>
                        <span className="ml-2">Profile</span>
                    </li>
                </NavLink>
                
                <NavLink to="/profile/posts" className={({ isActive, isPending }) =>
                    isActive
                        ? "mr-1 p-1 bg-gray-700 rounded-2xl cursor-pointer"
                        : isPending
                        ? "mr-1 p-1 bg-blue-300 rounded-2xl cursor-pointer"
                        : "mr-1 p-1 text-gray-500 hover:text-gray-300 hover:bg-gray-700 rounded-2xl cursor-pointer"
                }
                >
                    <li className="ml-1 p-1 flex flex-row align-middle content-center">
                        <DocumentTextIcon className="w-6 h-6 inline-block"></DocumentTextIcon>
                        <span className="ml-2">Posts</span>
                    </li>
                </NavLink>
            </ul>
            <p className="fixed left-10 bottom-0 mb-3 text-gray-400">Copyright<sup className="text-blue-500 text-[16px] font-bold animate-ping">&copy;</sup> @OurBlog.com</p>
        </div>
    );
}


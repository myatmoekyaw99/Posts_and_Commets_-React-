import { CalendarIcon, EnvelopeIcon, PencilSquareIcon, PhoneIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserProfile() {

    const user = getLoginUser();
    const ctime = new Date(user.created_at);
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3030/posts?userId=${user.id}&_sort=created_at&_order=desc`).then(res=> setPosts(res.data));
    },[]);

    console.log(posts);
    
    const navigate = useNavigate();

    return ( 
        <div className="w-[83vw] min-[450px]:basis-4/5 relative shadow-inner shadow-zinc-950">
            <div className="min-[450px]:w-full bg-gray-800 shadow-inner shadow-zinc-950 h-[15%] sm:h-[20%] md:h-[25%] p-1"></div>
            <div className="absolute left-4 md:left-[42%] top-12 md:top-14 text-center">
                <img src={user.profile_url} className="w-24 sm:w-28 md:w-44 h-24 sm:h-28 md:h-48 ring-[5px] ring-gray-900 rounded-full "/>
                <h1 className="md:text-2xl font-bold mt-2 ">{user.name}</h1>
                <p className="text-sm text-gray-400 mt-1">
                    Total Posts - <span className="animate-bounce w-2 h-2 inline-block align-start text-gray-100">{posts.length}</span>
                </p>
                <span className="flex flex-row justify-center mt-2 max-[450px]:text-[10px] text-[13px] text-gray-400 hover:text-white cursor-pointer" onClick={()=>navigate(`/profile/${user.id}/edit`)}><PencilSquareIcon className="w-3 sm:w-4 md:w-5 h-4 md:h-5"></PencilSquareIcon> Edit</span>
            </div>
            <div className="w-full bg-gray-800 h-[25vh] mt-14 shadow-inner shadow-gray-900">
            </div>
            <div className="min-[768px]:mt-10 p-4 bg-gray-700 max-[450px]:text-sm">
                <p className="flex flex-row align-middle justify-center text-gray-400"><EnvelopeIcon className="w-6 h-6 text-white"></EnvelopeIcon><span className="ml-2">{user.email}</span></p>
                <p className="flex flex-row align-middle justify-center text-gray-400 mt-2"><PhoneIcon className="w-6 h-6 text-white"></PhoneIcon><span className="ml-2">{user.phone_number}</span></p>
                <p className="flex flex-row align-middle justify-center text-gray-400 mt-2"><CalendarIcon className="w-6 h-6 text-white"></CalendarIcon><span className="ml-2">Created at -{
                    ctime.getFullYear()+'/'+ctime.getMonth()+'/'+ctime.getDay()
                }</span></p>
            </div>
        </div>
     );
}

export default UserProfile;

export function getLoginUser(){
    const user =JSON.parse(localStorage.getItem('login_user'));
    return user;
}
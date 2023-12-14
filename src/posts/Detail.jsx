import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getLoginUser } from "../users/UserProfile";
import CommentSection from "../comments/CommentSection";

export default function Detail() {
    const initialValue = {title:'',body:'',profile_url:'',user:[]};

    const user = getLoginUser();
    const {post_id} = useParams();
    const [post,setPost] = useState(initialValue);
    
    useEffect(()=>{

        /////fetch post include user data////
        async function fetchPosts(){
            await  axios.get(`http://localhost:3030/posts/${post_id}?_expand=user`).then(res => setPost(res.data));
        }
        fetchPosts();
    },[]);


    return ( 
        <div className="flex flex-col md:flex-row gap-1 w-[94%] mx-auto mt-1 md:h-[88vh] bg-dark-800 text-blue-600 overflow-y-scroll no-scrollbar md:overflow-hidden">
            <DetailPhoto post={post}/>
            <DetailBodyText post={post}/>
            <CommentSection post_id={post_id}/>      
        </div>
     );
}

///////Left side of detail section/////////
export function DetailPhoto({post}){
    return (
        <div className="md:basis-1/3">
            <img src={post.profile_url} className="w-[95%] h-[90%] mx-auto mt-2 rounded-md hover:ring-1 ring-white hover:cursor-pointer shadow-sm shadow-white"/>
            <h1 className="text-gray-50 bg-clip-text text-center font-bold text-xl mt-2">{post.title}</h1>
        </div>
    );
}

////////////middle side of Detail section/////////////
export function DetailBodyText({post}){
    const post_ctime = new Date(post.created_at);
    return (
        <div className="md:basis-1/3 bg-gray-800 mt-0 md:mt-2 shadow-sm shadow-black md:no-scrollbar md:h-[87vh] lg:h-full md:overflow-y-scroll rounded-lg">
            <div className="relative flex flex-row content-center align-middle mt-2">
                <img src={post.user.profile_url} className="w-10 h-10 ml-2 rounded-full inline-block hover:ring-1 ring-slate-400 hover:cursor-pointer"/>
                <span className="absolute top-5 right-2 md:text-[10px] lg:text-xs text-gray-300 font-mono">{post_ctime.getDate()+'-'+post_ctime.getMonth()+'-'+post_ctime.getFullYear()}</span>
                <span className="text-gray-200 md:text-sm lg:text-md font-serif ml-2">{post.user.name}<span className="text-gray-400 text-xs font-mono block">{post_ctime.getHours()+':'+post_ctime.getMinutes()+':'+post_ctime.getSeconds()}</span></span>
            </div>

            <div className="m-2">
                <p className="text-white md:text-xs lg:text-sm ml-2 mt-2 mb-4 text-clip">
                    {post.body}
                </p>
            </div>
        </div>
    );
}


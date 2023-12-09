import { ArchiveBoxXMarkIcon, ChatBubbleLeftIcon, FolderOpenIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { getLoginUser } from "../users/UserProfile";
import Loading from "../errors/Loading";
import axios from "axios";

function ProfilePosts() {

    const login_user = getLoginUser();
    const [posts,setPosts] = useState();

    useEffect(()=>{
        async function fetchPosts(){
            await axios.get(`http://localhost:3030/posts?userId=${login_user.id}&_sort=created_at&_order=desc`).then(res=> setPosts(res.data));
        }
        fetchPosts();
    },[]);

    // console.log(posts);

    return ( 
        <div className="w-[30%] h-[90vh] mx-auto p-2 snap-y snap-mandatory overflow-y-scroll no-scrollbar">
            {
                posts ?
                posts.map((post)=>
                    <PostCard key={post.id} user={login_user} post={post}/>
                )
                : 
                <Loading/>
            }
        </div>
     );
}

export default ProfilePosts;

///////////////post component//////////
export function PostCard({user,post}){

    const ctime = new Date(post.created_at);

    const handleDelete = (pid)=>{
        deletePost(pid);
        location.reload();
    }

    return (
        <div className="snap-start scroll-m-2 mt-3 w-full h-[540px] rounded-2xl bg-gray-800">
            <div className="relative flex flex-row ml-1 pt-3 content-center align-middle">
                <img src={user.profile_url} className="w-10 h-10 ml-2 rounded-full inline-block hover:ring-1 ring-slate-400 hover:cursor-pointer"/>
                <span className="absolute top-5 right-2 text-xs text-gray-300 font-mono">{ctime.getDate()+'-'+ctime.getMonth()+'-'+ctime.getFullYear()}</span>
                <span className="text-gray-200 text-md font-serif ml-2">{user.name}<span className="text-gray-300 text-xs font-mono block">{
                    ctime.getHours()+':'+ctime.getMinutes()+':'+ctime.getSeconds()
                }</span></span>
            </div>
            <h1 className="text-sm text-gray-100 ml-3 mt-3 ">{post.title}</h1>

            <img src={post.profile_url} className="w-full h-[70%] mt-2 rounded-sm"/>
            <div className="w-full h-[40px] p-1 flex flex-row justify-center gap-10 border-b border-b-gray-600">
                <a href={`/profile/posts/${post.id}/edit`} className="w-24 h-8 p-1 group text-gray-400 hover:text-gray-50 flex justify-center rounded-lg hover:bg-gray-700"><PencilSquareIcon className="w-6 h-6 text-gray-400 group-hover:text-gray-50"></PencilSquareIcon> <span className="ml-2">Edit</span></a>
                <button className="w-24 h-8 p-1 group text-gray-400 hover:text-gray-50 flex justify-center rounded-lg hover:bg-gray-700" onClick={()=>handleDelete(`${post.id}`)}><ArchiveBoxXMarkIcon className="w-6 h-6 text-gray-400 group-hover:text-gray-50"></ArchiveBoxXMarkIcon> <span className="ml-2">Delete</span></button>
                <a href={`/profile/posts/${post.id}/detail`} className="w-24 h-8 p-1 group text-gray-400 hover:text-gray-50 flex justify-center rounded-lg hover:bg-gray-700"><FolderOpenIcon className="w-6 h-6 text-gray-400 group-hover:text-gray-50"></FolderOpenIcon> <span className="ml-2">Detail</span></a>
            </div>
            <p className="ml-2 mr-4 flex justify-end text-gray-300"><ChatBubbleLeftIcon className="w-6 h-5 mt-1 text-gray-300"></ChatBubbleLeftIcon> <span className="text-sm ml-1 mt-[2px]">13 comments</span></p>
        </div>
    );
}

///////delete post function//////////
async function deletePost(post_id){
    await axios.delete(`http://localhost:3030/posts/${post_id}`).
    then(res => {
        alert(`Post id - ${post_id} was successfully deleted!`);
    });
}
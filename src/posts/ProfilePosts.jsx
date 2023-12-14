import { ArchiveBoxXMarkIcon, ChatBubbleLeftIcon, FolderOpenIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { getLoginUser } from "../users/UserProfile";
import Loading from "../errors/Loading";
import axios from "axios";
import { Link } from "react-router-dom";

const login_user = getLoginUser();

function ProfilePosts() {

    const login_user = getLoginUser();
    const [posts,setPosts] = useState();

    useEffect(()=>{
        async function fetchPosts(){
            await axios.get(`http://localhost:3030/posts?userId=${login_user.id}&_sort=created_at&_order=desc&_embed=comments`).then(res=> setPosts(res.data));
        }
        fetchPosts();
    },[]);

    console.log(posts);

    return ( 
        <div className="md:w-[45%] lg:w-[35%] h-[85vh] lg:h-[90vh] mx-auto p-2 snap-y snap-mandatory overflow-y-scroll no-scrollbar">
            {
                posts ?
                posts.map((post)=>
                    <PostCard key={post.id} user={login_user} setPosts={setPosts} post={post}/>
                )
                : 
                <Loading/>
            }
        </div>
     );
}

export default ProfilePosts;

///////////////post component//////////
export function PostCard({user,setPosts,post}){

    const ctime = new Date(post.created_at);

    const handleDelete = (pid)=>{
        deletePost(pid,setPosts);
    }

    return (
        <div className="snap-y lg:snap-start scroll-m-2 mt-3 w-[75vw] min-[450px]:w-full h-[400px] lg:h-[540px] rounded-2xl bg-gray-800">
            <div className="relative flex flex-row ml-1 pt-3 content-center align-middle">
                <img src={user.profile_url} className="w-10 h-10 ml-2 rounded-full inline-block hover:ring-1 ring-slate-400 hover:cursor-pointer"/>
                <span className="absolute top-5 right-2 text-xs text-gray-300 font-mono">{ctime.getDate()+'-'+ctime.getMonth()+'-'+ctime.getFullYear()}</span>
                <span className="text-gray-200 text-sm min-[450px]:text-md font-serif ml-2">{user.name}<span className="text-gray-300 text-[11px] font-mono block">{
                    ctime.getHours() > 12 ? ctime.getHours()-12 : ctime.getHours() }:{ctime.getMinutes()+':'+ctime.getSeconds()} {ctime.getHours() >12 ? 'pm' : 'am'
                }</span></span>
            </div>
            <h1 className="text-sm text-gray-100 ml-3 mt-3 ">{post.title}</h1>

            <img src={post.profile_url} className="w-full h-[60%] lg:h-[68%] mt-2 rounded-sm"/>
            <div className="w-full h-[40px] p-1 flex flex-row justify-center min-[450px]:gap-10 border-b border-b-gray-600">
                <Link to={`/profile/posts/${post.id}/edit`} className="w-24 h-8 p-1 group text-gray-400 hover:text-gray-50 flex justify-center rounded-lg hover:bg-gray-700"><PencilSquareIcon className="w-6 h-6 text-gray-400 group-hover:text-gray-50"></PencilSquareIcon> <span className="ml-2">Edit</span></Link>
                <button className="w-24 h-8 p-1 group text-gray-400 hover:text-gray-50 flex justify-center rounded-lg hover:bg-gray-700" onClick={()=>handleDelete(`${post.id}`)}><ArchiveBoxXMarkIcon className="w-6 h-6 text-gray-400 group-hover:text-gray-50"></ArchiveBoxXMarkIcon> <span className="ml-2">Delete</span></button>
                <Link to={`/profile/posts/${post.id}/detail`} className="w-24 h-8 p-1 group text-gray-400 hover:text-gray-50 flex justify-center rounded-lg hover:bg-gray-700"><FolderOpenIcon className="w-6 h-6 text-gray-400 group-hover:text-gray-50"></FolderOpenIcon> <span className="ml-2">Detail</span></Link>
            </div>
            <p className="ml-2 mr-4 flex justify-end text-gray-300"><ChatBubbleLeftIcon className="w-6 h-5 mt-1 text-gray-300"></ChatBubbleLeftIcon> <span className="text-sm ml-1 mt-[2px]">{post.comments.length} comments</span></p>
        </div>
    );
}

///////delete post function//////////
async function deletePost(post_id,setPosts){
    await axios.delete(`http://localhost:3030/posts/${post_id}`).
    then(res => {
        alert(`Post id - ${post_id} was successfully deleted!`);
    });

    await axios.get(`http://localhost:3030/posts?userId=${login_user.id}&_sort=created_at&_order=desc&_embed=comments`).then(res=> setPosts(res.data));
}
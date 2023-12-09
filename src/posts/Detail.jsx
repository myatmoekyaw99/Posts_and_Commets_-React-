import { ArchiveBoxXMarkIcon, EllipsisVerticalIcon, PaperAirplaneIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLoginUser } from "../users/UserProfile";
import Loading from "../errors/Loading";

export default function Detail() {
    const initialValue = {title:'',body:'',profile_url:'',user:[]};

    const {post_id} = useParams();
    const [post,setPost] = useState(initialValue);
    const [comments,setComments] = useState('');
    const [formData,setFormData] = useState('');

    useEffect(()=>{

        /////fetch post include user data////
        async function fetchPosts(){
            await  axios.get(`http://localhost:3030/posts/${post_id}?_expand=user`).then(res => setPost(res.data));
        }
        fetchPosts();

        /////fetch comments include user data
        async function fetchComments(){
            await  axios.get(`http://localhost:3030/posts/${post_id}/comments?_expand=user`).then(res => setComments(res.data));
        }
        fetchComments();
    },[]);

    const handleChange = (event) => {
        setFormData(event.target.value);
    };

    function handleSubmit(event){
        event.preventDefault();
        if(formData !== ''){
            createComment(post_id,formData);
            location.reload();
        }else{
            alert('Fill your comment input data!');
        }
    }

    return ( 
        <div className="flex flex-row gap-1 w-[95%] mx-auto mt-1 h-[90vh] bg-dark-800 text-blue-600 overflow-hidden">

            <DetailPhoto post={post}/>
            <DetailBodyText post={post}/>

            <div className="basis-1/3 flex flex-col mt-2 mr-1 rounded-sm border-l border-l-gray-800">
                <h1 className="sticky top-0 z-50 p-2 text-gray-400 border-b border-b-gray-400 bg-gray-800">Comments</h1>
                <div className="w-full h-full bg-gray-800 overflow-y-scroll no-scrollbar">
                {
                comments ?
                comments.map((comment)=>
                    <Comment key={comment.id} comment_values={comment}/>
                )
                :
                <Loading/>
                }
                </div>
                <div className="w-full h-14 border-t border-t-gray-600 bg-gray-800">
                {
                    localStorage.getItem('login_user') ?
                    <form method="post" onSubmit={(e)=>handleSubmit(e)}>
                        <div className="flex flex-row justify-center align-middle">
                            <input type="text" name="comment" id="comment" className="basis-[90%] w-full bg-gray-700 text-gray-300 p-2 my-2 ml-2 outline-none rounded-2xl shadow-sm shadow-gray-900" placeholder="Enter your comment" value={formData} onChange={handleChange}/>
                            <button type="submit" className="basis-[10%] my-4 cursor-pointer active:animate-bounce"><PaperAirplaneIcon className="w-10 h-7 text-gray-100"></PaperAirplaneIcon></button>
                        </div>
                    </form>
                    :<span className="text-center my-2 block">You need to login to comment a post!</span>

                }
                   
                </div>
            </div>
            
        </div>
     );
}

///////Left side of detail section/////////
export function DetailPhoto({post}){
    return (
        <div className="basis-1/3">
            <img src={post.profile_url} className="w-[95%] h-[90%] mx-auto mt-2 rounded-md hover:ring-1 ring-white hover:cursor-pointer shadow-sm shadow-white"/>
            <h1 className="text-gray-50 bg-clip-text text-center font-bold text-xl mt-2">{post.title}</h1>
        </div>
    );
}

////////////middle side of Detail section/////////////
export function DetailBodyText({post}){
    const post_ctime = new Date(post.created_at);
    return (
        <div className="basis-1/3 bg-gray-800 mt-2 shadow-sm shadow-black no-scrollbar h-full overflow-y-scroll rounded-lg">
            <div className="relative flex flex-row content-center align-middle mt-2">
                <img src={post.user.profile_url} className="w-10 h-10 ml-2 rounded-full inline-block hover:ring-1 ring-slate-400 hover:cursor-pointer"/>
                <span className="absolute top-5 right-2 text-xs text-gray-300 font-mono">{post_ctime.getDate()+'-'+post_ctime.getMonth()+'-'+post_ctime.getFullYear()}</span>
                <span className="text-gray-200 text-md font-serif ml-2">{post.user.name}<span className="text-gray-400 text-xs font-mono block">{post_ctime.getHours()+':'+post_ctime.getMinutes()+':'+post_ctime.getSeconds()}</span></span>
            </div>

            <div className="m-2">
                <p className="text-white text-sm ml-2 mt-2 mb-4 text-clip">
                    {post.body}
                </p>
            </div>
        </div>
    );
}

export function Comment({comment_values}){

    const user = getLoginUser();
    const [showSetting,setShowSetting] = useState(false);
    const ctime = new Date(comment_values.created_at);

    function handleClick(){
        setShowSetting(!showSetting);
    }

    return (      
            <div className="flex flex-row justify-start">
                <div className="basis-10 mt-4">
                    <img src={comment_values.user.profile_url} className="w-8 h-8 ml-1 rounded-full inline-block hover:ring-1 ring-slate-400 hover:cursor-pointer"/>
                </div>
                <div className="basis-2/3 relative z-0 mt-3 ml-2 mr-1 bg-gray-900 rounded-xl px-4 w-auto h-auto">
                    <span className="text-white text-md font-serif">{comment_values.user.name}</span>
                    {
                        user.id === comment_values.user.id 
                        ? <span className="absolute right-2 cursor-pointer active:animate-bounce" onClick={handleClick}><EllipsisVerticalIcon className="w-4 h-4 text-white inline-block"/></span>
                        :''
                    }
                    <p className="text-slate-400 text-sm font-light mb-1">{comment_values.description}</p>
                    <span className="block float-right text-slate-400 text-[10px] font-mono font-thin">{ctime.getHours()+':'+ctime.getMinutes()+':'+ctime.getSeconds()}</span>

                    {
                        user.id === comment_values.user.id 
                        ? 
                         showSetting && <CommentSetting id={comment_values.id}/>
                        :''
                    }
                </div>
            </div>
    );
}

export function CommentSetting({id}){

    const handleDelete = (id)=>{
        deleteComment(id);
        location.reload();
    }

    return (
        <div className="absolute justify-center -right-5 top-0">
            <span className="cursor-pointer active:animate-bounce mx-auto" onClick={()=>handleDelete(id)}><ArchiveBoxXMarkIcon className="w-4 h-4 text-red-500 inline-block"/></span>
        </div>
    );
}

async function deleteComment(id){
    await axios.delete(`http://localhost:3030/comments/${id}`).
    then(res => {
        alert(`Comment id - ${id} was successfully deleted!`);
    });
}

async function createComment(post_id,formData){
    const user = getLoginUser();
    await axios.post('http://localhost:3030/comments',{
        id:'',
        postId: post_id,
        userId: user.id,
        description: formData,
        created_at: new Date(),
    }
    ).then(res =>res.data);
}
import { useEffect, useState } from "react";
import Loading from "../errors/Loading";
import { getLoginUser } from "../users/UserProfile";
import { ArchiveBoxXMarkIcon, EllipsisVerticalIcon, PaperAirplaneIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import axios from "axios";

function CommentSection({post_id}) {

    const [comments,setComments] = useState('');
    const [formData,setFormData] = useState('');
    const user = getLoginUser();
    // console.log(post_id);

    useEffect(()=>{
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

        if(user){
            if(formData !== ''){
                createComment(post_id,formData,setComments);
                setFormData('');
            }else{
                alert('Fill your comment input data!');
            }
        }else{
            window.location = '/login';
        }
    }

    return ( 
        <div className="md:basis-1/3 flex flex-col mt-2 ml-2 mr-1 rounded-sm border-l border-l-gray-500 rounded-t-lg">
            <h1 className="sticky top-0 z-40 p-2 text-gray-400 border-b border-b-gray-400 bg-gray-800 rounded-t-lg">{comments.length} Comments</h1>
            <div className="w-full max-sm:h-[200px] sm:h-[300px] md:h-full bg-gray-800 overflow-y-scroll no-scrollbar">
            {
            comments ?
            comments.map((comment,index)=>
                <Comment key={index} comment_values={{post_id,comment,setComments}}/>
            )
            :
            <Loading/>
            }
            </div>
            <div className="w-full h-14 border-t border-t-gray-600 bg-gray-800">
        
                <form method="post" onSubmit={(e)=>handleSubmit(e)}>
                    <div className="flex flex-row justify-center align-middle">
                        <input type="text" name="comment" id="comment" className="basis-[90%] w-full bg-gray-700 text-gray-300 p-2 my-2 ml-2 outline-none rounded-2xl shadow-sm shadow-gray-900" placeholder="Enter your comment" value={formData} onChange={handleChange}/>
                        <button type="submit" className="basis-[10%] my-4 cursor-pointer active:animate-bounce"><PaperAirplaneIcon className="w-10 h-7 text-gray-100"></PaperAirplaneIcon></button>
                    </div>
                </form>
            
            </div>
        </div>
     );
}

export default CommentSection;

export function Comment({comment_values}){

    const {post_id,comment,setComments} = comment_values;
    const [showDelete,setShowDelete] = useState(false);
    const ctime = new Date(comment.created_at);

    return (      
            <div className="flex flex-row justify-start">
                <div className="basis-10 mt-4">
                    <img src={comment.user.profile_url} className="w-8 h-8 ml-1 rounded-full inline-block hover:ring-1 ring-slate-400 hover:cursor-pointer"/>
                </div>
                <div className="basis-2/3 relative z-0 mt-3 ml-2 mr-1 bg-gray-900 rounded-xl px-4 w-auto h-auto">
                    <span className="text-white text-md font-serif">{comment.user.name}</span>

                    <span className="absolute right-2 cursor-pointer rounded-full active:bg-gray-800" onClick={()=>setShowDelete(!showDelete)}><EllipsisVerticalIcon className="w-3 h-3 text-white inline-block"/></span>

                    <p className="text-slate-400 text-sm font-light mb-1">{comment.description}</p>
                    <span className="block float-right text-slate-400 text-[10px] font-mono font-thin">{ctime.getHours()+':'+ctime.getMinutes()+':'+ctime.getSeconds()}</span>

                    {
                        showDelete 
                        && <CommentSetting uid={comment.user.id} cid={comment.id} show={{showDelete,setShowDelete,setComments,post_id}}/>
                    }
        
                </div>
            </div>
    );
}



export function CommentSetting({uid,cid,show}){
    const {showDelete,setShowDelete,setComments,post_id} = show;
    const user = getLoginUser() ?? '';
    
    const handleDelete = (uid,cid,setComments,post_id)=>{
       
        if(user.id === uid){
            deleteComment(cid,setComments,post_id);
            setShowDelete(!showDelete);
        }else{
            window.location ="/login";
        }
    }

    return (
        <div className="absolute justify-center -right-5 top-0">
            <span className="cursor-pointer active:animate-bounce mx-auto" onClick={()=>handleDelete(uid,cid,setComments,post_id)}><ArchiveBoxXMarkIcon className="w-4 h-4 text-red-500 inline-block"/></span>
        </div>
    );
}

async function deleteComment(id,setComments,post_id){
    await axios.delete(`http://localhost:3030/comments/${id}`).
    then(res => {
        alert(`Comment id - ${id} was successfully deleted!`);
    });
   
    await  axios.get(`http://localhost:3030/posts/${post_id}/comments?_expand=user`).then(res => setComments(res.data));
}

async function createComment(post_id,formData,setComments){
    const user = getLoginUser();
    await axios.post('http://localhost:3030/comments',{
        id:'',
        postId: post_id,
        userId: user.id,
        description: formData,
        created_at: new Date(),
    }
    ).then(res =>res.data);

    await  axios.get(`http://localhost:3030/posts/${post_id}/comments?_expand=user`).then(res => setComments(res.data));
}
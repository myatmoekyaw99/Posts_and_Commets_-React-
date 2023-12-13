import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../errors/Loading";

export default function FeaturePosts(){
   
    const [posts,setPost] = useState();

    useEffect(()=>{
        async function fetchPosts(){
            axios.get('http://localhost:3030/posts?_sort=created_at&_order=desc&_limit=10&_expand=user')
            .then(res=>setPost(res.data));
        }
        fetchPosts();
    },[]);
    // console.log(posts);

    return (
        <div id="feature-posts" className="w-screen h-[450px] py-10 bg-slate-100 overflow-auto">
            <h1 className="text-center"><span className="pb-2 bg-clip-text text-blue-800 text-2xl font-bold uppercase border-b-2 border-b-blue-800 hover:border-b-slate-800">Feature Posts</span></h1>
            <div className="w-[93%] h-[280px] mx-auto flex gap-2 snap-x snap-mandatory overflow-scroll no-scrollbar mt-10 my-1">
            {
                posts ?
                posts.map((post)=>
                    <Card key={post.id} pvalue={post}/>
                )
                : 
                <Loading/>
            }
               
            </div>
        </div>
    );
}

export function Card({pvalue}){
    // console.log(post);
    const ctime = new Date(pvalue.created_at);
    return (
        <div id="feature-post" className="w-[245px] flex-shrink-0 group snap-start h-auto shadow-black shadow-inner rounded-lg hover:rounded-none overflow-hidden bg-opacity-50 hover:bg-opacity-100 bg-slate-200">
            <img  className="w-full mb-1 h-40 rounded-t-lg group-hover:rounded-none brightness-75 hover:brightness-100 hover:scale-x-110" src={pvalue.profile_url}/>
            <h5 className="text-center text-md text-black font-serif font-bold">{pvalue.title}</h5>
            
            <div className="flex flex-row content-center align-middle mt-1">
                <img src={pvalue.user.profile_url} className="w-10 h-10 ml-2 rounded-full inline-block hover:ring-1 ring-slate-400 hover:cursor-pointer"/>
                <span className="text-black text-md font-serif ml-2">{pvalue.user.name}<span className="text-slate-800 text-[10px] font-mono block">
                {  ctime.getHours() > 12 ? ctime.getHours()-12 : ctime.getHours() }:{ctime.getMinutes()+':'+ctime.getSeconds()} {ctime.getHours() >12 ? 'pm' : 'am'}
                </span></span>
            </div>
            
            <div className="w-full border-t-[1px] mt-1 border-slate-400">
                <span className="inline-block m-3 text-xs text-gray-800 font-mono">{ctime.getDate()+'-'+ctime.getMonth()+'-'+ctime.getFullYear()}</span>
                <a href={`posts/${pvalue.id}/detail`} className="m-2 px-5 ring-0 hover:ring-1 ring-inset ring-slate-500 text-slate-800 text-sm hover:font-serif hover:bg-slate-100 rounded-md hover:scale-x-110 float-right">Detail</a>
            </div>
        </div> 
    );
}
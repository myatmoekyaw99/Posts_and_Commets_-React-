import { CameraIcon, ChatBubbleBottomCenterTextIcon, ChatBubbleLeftRightIcon, ClipboardDocumentListIcon, LightBulbIcon, MoonIcon, StarIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import axios, { all } from "axios";
import Loading from "../errors/Loading";
import { getLoginUser } from "../users/UserProfile";

function AllPosts() {
    const [allposts,setAllPost] = useState('');
    const [current_page,setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    
    useEffect(()=>{
        axios.get(`http://localhost:3030/posts?_expand=user`)
        .then(res=>setAllPost(res.data));
    },[]);

    const lastPostIndex = current_page * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = allposts.slice(firstPostIndex,lastPostIndex);

    return ( 
        <div id="all-post" className="relative pt-10 pb-16 bg-slate-600">
            <TopIconsGroup/>
            <LeftIconsGroup/>
            <RightIconsGroup/>       
            <h1 className="text-center">
                <span className="z-50 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-extrabold uppercase border-b-2 border-b-orange-400">
                All Posts
                </span>
            </h1>
            <div className="w-10/12 mx-auto flex flex-row flex-wrap justify-center gap-5 mt-12">
            {
                currentPosts ?
                currentPosts.map((post,index)=>
                    <AllCard key={index} pvalue={post}/>
                )
                : 
                <Loading/>
            }
            </div>
           <PageNavigatior totalPosts={allposts.length}
             postsPerPage={postPerPage} 
             currentPage={current_page}
             setCurrentPage={setCurrentPage}
             />
        </div>
     );
}

export default AllPosts;

//////background icons top side/////
export function TopIconsGroup(){
    return (
        <div className="group" id="top-group-icons">
            <StarIcon className="absolute w-12 h-10 top-16 left-[300px] stroke-[0.5px] stroke-white group-hover:stroke-[1px]"/>
            <MoonIcon className="absolute top-5 left-[450px] h-14  w-14 stroke-[0.5px] stroke-white group-hover:stroke-blue-500"/>
            <MoonIcon className="absolute top-8 right-[280px] h-14  w-12 stroke-[0.5px] stroke-white group-hover:stroke-blue-600"/>
            <StarIcon className="absolute top-12 right-[460px] h-12  w-12 stroke-[0.5px] stroke-blue-500 group-hover:stroke-white"/>
        </div>
    );
}

//////background icons left side/////
export function LeftIconsGroup(){
    return (
        <div className="group" id="left-group-icons">
            <ChatBubbleBottomCenterTextIcon className="absolute top-5 left-4 h-24 w-24 stroke-[0.2px] hover:stroke-[0.6px] stroke-cyan-500 group-hover:stroke-blue-500"/>
            <MoonIcon className="absolute w-12 h-10 top-4 left-36 stroke-[0.6px] stroke-blue-400 group-hover:stroke-white"/>
            <StarIcon className="absolute bottom-4 left-32 h-14  w-14 stroke-[0.5px] stroke-white group-hover:stroke-blue-600"/>
            <MoonIcon className="absolute bottom-40 left-3 h-10  w-10 stroke-[0.6px] stroke-blue-400 group-hover:stroke-white"/>
            <StarIcon className="absolute bottom-72 left-14 h-12  w-12 stroke-[0.5px] stroke-blue-500 group-hover:stroke-white"/>
            <SunIcon className="absolute bottom-[440px] left-0 h-16  w-16 stroke-[0.5px] stroke-white group-hover:stroke-yellow-500"/>
            <MoonIcon className="absolute bottom-[40%] left-4 h-10  w-14 stroke-[0.6px] stroke-blue-500 group-hover:stroke-white"/>
            <SunIcon className="absolute top-[45%] left-14 h-14  w-14 stroke-[0.6px] hover:stroke-[1px] stroke-yellow-500 group-hover:stroke-white"/>
            <MoonIcon className="absolute top-[520px] left-2 h-12  w-14 stroke-[0.5px] stroke-white group-hover:stroke-blue-600"/>
            <StarIcon className="absolute top-80 left-12 h-12  w-14 stroke-[0.6px] stroke-blue-400 group-hover:stroke-white"/>
            <MoonIcon className="absolute top-44 left-3 h-12  w-14 stroke-[0.6px] stroke-white group-hover:stroke-blue-600"/>
            <CameraIcon className="absolute bottom-5 left-4 h-24  w-24 stroke-[0.2px] hover:stroke-[0.6px] stroke-blue-500 group-hover:stroke-white"/>
        </div>
    );
}

//////background icons right side/////
export function RightIconsGroup(){
    return (
        <div className="group" id="right-group-icons">
            <ChatBubbleLeftRightIcon className="absolute top-5 right-4 h-24  w-24 stroke-[0.2px] hover:stroke-[0.6px] stroke-orange-300 group-hover:stroke-orange-500"/>
            <MoonIcon className="absolute w-12 h-10 top-4 right-36 stroke-[0.5px] stroke-white group-hover:stroke-blue-600"/>
            <StarIcon className="absolute bottom-4 right-32 h-14  w-14 stroke-[0.5px] stroke-white group-hover:stroke-blue-600"/>
            <MoonIcon className="absolute bottom-40 right-3 h-10  w-10 stroke-[0.5px] stroke-blue-400 group-hover:stroke-white"/>
            <StarIcon className="absolute bottom-72 right-14 h-12  w-12 stroke-[0.5px] stroke-blue-400 group-hover:stroke-white"/>
            <SunIcon className="absolute bottom-[440px] right-0 h-16  w-16 stroke-[0.6px] stroke-white group-hover:stroke-yellow-600"/>
            <MoonIcon className="absolute bottom-[40%] right-4 h-10  w-14 stroke-[0.6px] stroke-blue-500 group-hover:stroke-white"/>
            <SunIcon className="absolute top-[45%] right-14 h-14  w-14 stroke-[0.6px] hover:stroke-[1px] stroke-yellow-500 group-hover:stroke-white"/>
            <MoonIcon className="absolute top-[520px] right-2 h-12  w-14 stroke-[0.5px] stroke-white group-hover:stroke-blue-600"/>
            <StarIcon className="absolute top-80 right-12 h-14  w-12 stroke-[0.6px] stroke-white group-hover:stroke-blue-600"/>
            <MoonIcon className="absolute top-44 right-3 h-12  w-14 stroke-[0.6px] stroke-blue-400 group-hover:stroke-white"/>
            <ClipboardDocumentListIcon className="absolute bottom-5 right-4 h-24  w-24 stroke-[0.2px] hover:stroke-[0.6px] stroke-orange-300"/>
        </div>
    );
}

//////////page navigation button component///////////
export function PageNavigatior({totalPosts,postsPerPage,setCurrentPage,currentPage}){
    let pages = [];

    const [user,setUser] = useState('');

    useEffect(()=>{
        setUser(localStorage.getItem('login_user'));
    },[user]);

    for(let i=1;i<= Math.ceil(totalPosts/postsPerPage);i++){
        pages.push(i);
    }
    
    const handleClick = (page)=>{
        user ? setCurrentPage(page)
        : window.location = '/login';
    }
    return (
        <div className="text-center mt-8">  
        {
            pages.map((page,index) =>{
                return (
                    <button key={index} className={
                        page === currentPage ? "ml-2 bg-gray-800 text-blue-600 font-bold px-3 py-1 hover:ring-inset ring-1 ring-white rounded-md"
                        : "ml-2 bg-slate-200 text-black hover:font-bold px-3 py-1 hover:ring-inset ring-1 ring-black"
                    } onClick={()=>handleClick(page)}>{page}</button>
                )
            })
        }
        </div>
    );
}

/////////component for post card///////////
export function AllCard({pvalue}){
    // console.log(post);
    const ctime = new Date(pvalue.created_at);
    return (
        <div id="feature-post" className="w-[245px] flex-shrink-0 group snap-start h-auto shadow-black shadow-inner rounded-lg hover:rounded-none overflow-hidden bg-opacity-50 hover:bg-opacity-100 bg-slate-200">
            <img  className="w-full mb-1 h-40 rounded-t-lg group-hover:rounded-none brightness-75 hover:brightness-100 hover:scale-x-110" src={pvalue.profile_url}/>
            <h5 className="text-center text-md text-black font-serif font-bold">{pvalue.title}</h5>
            
            <div className="flex flex-row content-center align-middle mt-1">
                <img src={pvalue.user.profile_url} className="w-10 h-10 ml-2 rounded-full inline-block hover:ring-1 ring-slate-400 hover:cursor-pointer"/>
                <span className="text-black text-md font-serif ml-2">{pvalue.user.name}<span className="text-slate-800 text-xs font-mono block">
                {ctime.getHours()+':'+ctime.getMinutes()+':'+ctime.getSeconds()}
                </span></span>
            </div>
            
            <div className="w-full border-t-[1px] mt-1 border-slate-400">
                <span className="inline-block m-3 text-xs text-gray-800 font-mono">{ctime.getDate()+'-'+ctime.getMonth()+'-'+ctime.getFullYear()}</span>
                <a href={`posts/${pvalue.id}/detail`} className="m-2 px-5 ring-0 hover:ring-1 ring-inset ring-slate-500 text-slate-800 text-sm hover:font-serif hover:bg-slate-100 rounded-md hover:scale-x-110 float-right">Detail</a>
            </div>
        </div> 
    );
}


import { NavLink } from "react-router-dom";
import { Card } from "./FeaturePosts";
import { BellAlertIcon, BoltIcon, CameraIcon, ChatBubbleBottomCenterTextIcon, ChatBubbleLeftRightIcon, ClipboardDocumentListIcon, LightBulbIcon, MoonIcon, StarIcon, SunIcon } from "@heroicons/react/24/outline";

function AllPosts() {
    return ( 
        <div className="relative pt-10 pb-16 bg-slate-600">
            <TopIconsGroup/>
            <LeftIconsGroup/>
            <RightIconsGroup/>       
            <h1 className="text-center">
                <span className="pb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-2xl font-extrabold uppercase border-b-2 border-b-orange-400">
                All Posts
                </span>
            </h1>
            <div className="w-10/12 mx-auto grid grid-cols-4 gap-5 mt-12">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <PageNavigatior/>
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

export function PageNavigatior(){
    return (
        <div className="text-center mt-8">
                <NavLink to="/" className="bg-slate-200 text-black hover:font-bold px-3 py-1 hover:ring-inset ring-1 ring-black">First</NavLink>
                <NavLink to="/" className="bg-slate-200 text-black hover:font-bold px-3 py-1 hover:ring-inset ring-1 ring-black">Prev</NavLink>
                <NavLink to="/" className="bg-slate-200 text-blue-900 font-bold hover:bg-white px-5 py-1 hover:ring-inset ring-1 ring-black">1</NavLink>
                <NavLink to="/" className="bg-slate-200 text-black hover:font-bold px-3 py-1 hover:ring-inset ring-1 ring-black">Next</NavLink>
                <NavLink to="/" className="bg-slate-200 text-black hover:font-bold px-3 py-1 hover:ring-inset ring-1 ring-black">Last</NavLink>
            </div>
    );
}

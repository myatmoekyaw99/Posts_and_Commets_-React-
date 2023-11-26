import { Card } from "./FeaturePosts";
import { BellAlertIcon, BoltIcon, CameraIcon, ChatBubbleBottomCenterTextIcon, ChatBubbleLeftRightIcon, ClipboardDocumentListIcon, MoonIcon, StarIcon } from "@heroicons/react/24/outline";

function AllPosts() {
    return ( 
        <div className="relative pt-10 pb-20 bg-slate-600">
            <StarIcon className="absolute w-12 h-10 top-16 left-[300px] stroke-[0.5px] stroke-slate-400"/>
            <MoonIcon className="absolute top-5 left-[450px] h-14  w-14 stroke-[0.5px] stroke-white"/>
            <MoonIcon className="absolute top-8 right-[280px] h-14  w-12 stroke-[0.5px] stroke-white"/>
            <StarIcon className="absolute top-12 right-[460px] h-12  w-12 stroke-[0.5px] stroke-slate-400"/>

            <ChatBubbleBottomCenterTextIcon className="absolute top-5 left-4 h-24 w-24 stroke-[0.2px] hover:stroke-[0.6px] stroke-cyan-500"/>
            <MoonIcon className="absolute w-12 h-10 top-4 left-36 stroke-[0.5px] stroke-blue-400"/>
            <StarIcon className="absolute bottom-4 left-32 h-14  w-14 stroke-[0.5px] stroke-white"/>
            <MoonIcon className="absolute bottom-40 left-3 h-10  w-10 stroke-[0.5px] stroke-blue-400"/>
            <StarIcon className="absolute bottom-72 left-14 h-12  w-12 stroke-[0.5px] stroke-blue-400"/>
            <StarIcon className="absolute bottom-[440px] left-0 h-16  w-16 stroke-[0.6px] stroke-white"/>
            <StarIcon className="absolute top-80 left-12 h-12  w-14 stroke-[0.6px] stroke-white"/>
            <MoonIcon className="absolute top-44 left-3 h-12  w-14 stroke-[0.6px] stroke-slate-200"/>
            <CameraIcon className="absolute bottom-5 left-4 h-24  w-24 stroke-[0.2px] hover:stroke-[0.6px] stroke-blue-300"/>

            <ChatBubbleLeftRightIcon className="absolute top-5 right-4 h-24  w-24 stroke-[0.2px] hover:stroke-[0.6px] stroke-orange-300"/>
            <MoonIcon className="absolute w-12 h-10 top-4 right-36 stroke-[0.5px] stroke-slate-200"/>
            <StarIcon className="absolute bottom-4 right-32 h-14  w-14 stroke-[0.5px] stroke-white"/>
            <MoonIcon className="absolute bottom-40 right-3 h-10  w-10 stroke-[0.5px] stroke-blue-400"/>
            <StarIcon className="absolute bottom-72 right-14 h-12  w-12 stroke-[0.5px] stroke-blue-400"/>
            <StarIcon className="absolute bottom-[440px] right-0 h-16  w-16 stroke-[0.6px] stroke-white"/>
            <StarIcon className="absolute top-80 right-12 h-14  w-12 stroke-[0.6px] stroke-white"/>
            <MoonIcon className="absolute top-44 right-3 h-12  w-14 stroke-[0.6px] stroke-blue-400"/>
            <ClipboardDocumentListIcon className="absolute bottom-5 right-4 h-24  w-24 stroke-[0.2px] hover:stroke-[0.6px] stroke-orange-300"/>
            
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
            </div>
        </div>
     );
}

export default AllPosts;
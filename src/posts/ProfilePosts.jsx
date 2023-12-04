import { ArchiveBoxXMarkIcon, ChatBubbleLeftIcon, FolderOpenIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

function ProfilePosts() {
    return ( 
        <div className="w-[30%] h-[90vh] mx-auto p-2 snap-y snap-mandatory overflow-y-scroll no-scrollbar">
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
     );
}

export default ProfilePosts;

export function PostCard(){
    return (
        <div className="snap-start scroll-m-2 mt-3 w-full h-[540px] rounded-2xl bg-gray-800">
                <div className="flex flex-row ml-1 pt-3 content-center align-middle">
                    <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?" className="w-10 h-10 ml-2 rounded-full inline-block hover:ring-1 ring-slate-400 hover:cursor-pointer"/>
                    <span className="text-gray-200 text-md font-serif ml-2">author<span className="text-gray-300 text-xs font-mono block">date</span></span>
                </div>
                <h1 className="text-sm text-gray-100 ml-3 mt-3 ">title</h1>
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?" className="w-full h-[70%] mt-2 rounded-sm"/>
                <div className="w-full h-[40px] p-1 flex flex-row justify-center gap-10 border-b border-b-gray-600">
                    <button className="w-24 h-8 p-1 group text-gray-400 hover:text-gray-50 flex justify-center rounded-lg hover:bg-gray-700"><PencilSquareIcon className="w-6 h-6 text-gray-400 group-hover:text-gray-50"></PencilSquareIcon> <span className="ml-2">Edit</span></button>
                    <button className="w-24 h-8 p-1 group text-gray-400 hover:text-gray-50 flex justify-center rounded-lg hover:bg-gray-700"><ArchiveBoxXMarkIcon className="w-6 h-6 text-gray-400 group-hover:text-gray-50"></ArchiveBoxXMarkIcon> <span className="ml-2">Delete</span></button>
                    <button className="w-24 h-8 p-1 group text-gray-400 hover:text-gray-50 flex justify-center rounded-lg hover:bg-gray-700"><FolderOpenIcon className="w-6 h-6 text-gray-400 group-hover:text-gray-50"></FolderOpenIcon> <span className="ml-2">Detail</span></button>
                </div>
                <p className="ml-2 mr-4 flex justify-end text-gray-300"><ChatBubbleLeftIcon className="w-6 h-5 mt-1 text-gray-300"></ChatBubbleLeftIcon> <span className="text-sm ml-1 mt-[2px]">13 comments</span></p>
            </div>
    );
}
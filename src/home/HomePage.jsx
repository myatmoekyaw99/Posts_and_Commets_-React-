import Navbar from "../layout/Navbar";
import FeaturePosts from "./FeaturePosts";

function HomePage() {
    return (
        <>
            <Navbar/> 
            <section className="h-auto overflow-auto mt-0 border-t-[1px] bg-slate-300">
                <Welcome/>
                <FeaturePosts/>
                <About/>
            </section>
        </>
     );
}

export function Welcome(){
    return(
        <div className="pt-40 h-[400px] text-center border-b-2 bg-gradient-to-r from-cyan-800 from-10% via-blue-500 via-40% to-gray-900 to-90% hover:from-pink-300 hover:from-20% hover:via-cyan-500 hover:via-40% hover:to-yellow-300 hover:90%">
            <h1 className="uppercase text-orange-500 text-3xl font-extrabold">Welcome from ourBlog</h1>
            <span className="pb-2 border-b-[1px] border-b-orange-500">Share your posts with others</span>
        </div>
    );
}

export function About(){
    return (
        <div className="mt-14 pt-10 pb-5" id="about">
            <h1 className="text-center"><span className="pb-1 text-blue-800 text-2xl font-bold uppercase border-b-2 border-b-blue-800 hover:border-b-slate-900">About</span></h1>
            <div className="w-7/12 mx-auto mt-10 text-center rounded-lg bg-opacity-25 hover:bg-opacity-50 bg-white">
                <blockquote className="text-blue-500">OurBlog is a website.You can share your thoughts,ideas,story and hobbies etc.You can also see the others user's posts and comments on their posts.It is free and simple to use in your daily life.</blockquote>
            </div>
            <div id="quote" className="w-6/12 mx-auto mt-4 text-center rounded-lg bg-opacity-25 hover:bg-opacity-50 bg-white">
                <blockquote className="text-white hover:text-slate-600">OurBlog is a website.You can share your thoughts,ideas,story and hobbies etc.You can also see the others user's posts and comments on their posts.It is free and simple to use in your daily life.</blockquote>
            </div>
        </div>
    );
}

export default HomePage;
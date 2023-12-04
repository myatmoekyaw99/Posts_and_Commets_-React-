import AllPosts from "../posts/AllPosts";
import FeaturePosts from "../posts/FeaturePosts";
import Contact from "./Contact";

function HomePage() {
    return ( 
        <section className="h-auto mt-0 border-t-[1px] bg-slate-300 overflow-hidden">
            <Welcome/>
            <FeaturePosts/>
            <About/>
            <AllPosts/>
            <Contact/>
        </section>
     );
}

export default HomePage;


/////welcome component for homepage//////////
export function Welcome(){
    return(
        <div id="home" className="pt-40 h-[400px] text-center border-b-2 bg-gradient-to-r from-cyan-800 from-10% via-blue-500 via-40% to-gray-900 to-90% hover:from-pink-300 hover:from-20% hover:via-cyan-500 hover:via-40% hover:to-yellow-300 hover:90%">
            <h1 className="uppercase bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-lime-800 text-3xl font-extrabold">Welcome from ourBlog</h1>
            <span className="pb-2 border-b-[1px] border-b-orange-500 text-white text-sm bg-clip-text hover:font-bold">Share your posts with others</span>
        </div>
    );
}

///////about component for home page///////
export function About(){
    return (
        <div className="pt-10 pb-5 bg-fixed border-t-[1px] border-b-white" id="about">
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

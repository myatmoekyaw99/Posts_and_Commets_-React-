import { BookOpenIcon, EnvelopeIcon, HomeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Navbar from "../layout/Navbar";
import AllPosts from "./AllPosts";
import FeaturePosts from "./FeaturePosts";

function HomePage() {
    return (
        <>
            <Navbar/> 
            <section className="h-auto overflow-auto mt-0 border-t-[1px] bg-slate-300">
                <Welcome/>
                <FeaturePosts/>
                <About/>
                <AllPosts/>
                <Contact/>
            </section>
        </>
     );
}

export default HomePage;

export function Welcome(){
    return(
        <div className="pt-40 h-[400px] text-center border-b-2 bg-gradient-to-r from-cyan-800 from-10% via-blue-500 via-40% to-gray-900 to-90% hover:from-pink-300 hover:from-20% hover:via-cyan-500 hover:via-40% hover:to-yellow-300 hover:90%">
            <h1 className="uppercase bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-lime-800 text-3xl font-extrabold">Welcome from ourBlog</h1>
            <span className="pb-2 border-b-[1px] border-b-orange-500">Share your posts with others</span>
        </div>
    );
}

export function About(){
    return (
        <div className="mt-14 pt-10 pb-5 bg-fixed border-t-[1px] border-b-white" id="about">
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

export function Contact(){
    return (
        <div className="bg-gray-700 h-[300px] text-white grid grid-cols-3 gap-10 justify-between">
            <div className="mx-20 my-10 text-sm font-serif">
                <BookOpenIcon className="w-16 h-16 text-blue-500 font-bold">&lt;</BookOpenIcon>
                <h1 className="inline-block text-[40px]  font-bold bg-clip-text  text-blue-500">OurBlog</h1>  
                <p className="mt-2">&copy; 2023 coypright | OurBlog.com</p> 
                <div className="mt-2 text-blue-500 flex flex-row">
                    <a href="#" className="text-lg"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" className="ml-4 text-lg"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#" className="ml-4 text-lg"><i class="fa-brands fa-github"></i></a>
                    <a href="#" className="ml-4 text-lg"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#" className="ml-4 text-lg"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <div className="my-10 font-serif text-sm">
                <HomeIcon className="w-6 h-6 text-blue-500"></HomeIcon>
                <span className=""> Address :</span>
                <p>Block(4),Room(404),(8)Qtr,Mayangone,Yangon.</p>

                <PhoneIcon className="w-6 h-6 mt-2 text-blue-500"></PhoneIcon>
                <span className=""> Phone :</span>
                <p>09-222443556 , 09-887997667</p>

                <EnvelopeIcon className="w-6 h-6 mt-2 text-blue-500"></EnvelopeIcon>
                <span className=""> Gmail :</span>
                <p>ourBlog-admin@gmail.com</p>
            </div>
            <div className="mx-auto font-serif">
                dvja
            </div>
        </div>
    );
}
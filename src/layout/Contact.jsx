import { BookOpenIcon, ChevronDoubleUpIcon, EnvelopeIcon, HomeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Contact(){
    return (
        <div id="contact" className="bg-black text-white flex max-[580px]:flex-col min-md:flex-row justify-center align-middle gap-5 min-[720px]:gap-10">
            <LeftContact/>
            <MiddleContact/>
            <RightContact/>
        </div>
    );
}

/////Left side of contact section/////
export function LeftContact(){
    return (
        <div className="max-[580px]:mx-auto max-md:mx-8px md:mx-20 mt-16 mb-10 text-sm font-serif group">
            <BookOpenIcon className="w-16 h-16 text-blue-500 font-bold group-hover:text-blue-800">&lt;</BookOpenIcon>
            <h1 className="inline-block text-[40px]  font-bold bg-clip-text  text-blue-500 group-hover:text-white">OurBlog</h1>  
            <p className="mt-2 hover:text-blue-500">&copy; 2023 coypright | OurBlog.com</p> 
            <div className="mt-2 text-blue-500 flex flex-row">
                <a href="#" className="text-lg hover:text-white"><i className="fa-brands fa-facebook"></i></a>
                <a href="#" className="ml-4 text-lg hover:text-white"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#" className="ml-4 text-lg hover:text-white"><i className="fa-brands fa-github"></i></a>
                <a href="#" className="ml-4 text-lg hover:text-white"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" className="ml-4 text-lg hover:text-white"><i className="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    );
}

/////middle part of contact section/////
export function MiddleContact(){
    return (
        <div className="max-[580px]:mx-auto mt-10 font-serif text-sm">
            <HomeIcon className="w-6 h-6 text-blue-500"></HomeIcon>
            <span className="hover:text-blue-500"> Address :</span>
            <p>Block(4),Room(404),(8)Qtr,Mayangone,Yangon.</p>

            <PhoneIcon className="w-6 h-6 mt-2 text-blue-500"></PhoneIcon>
            <span className="hover:text-blue-500"> Phone :</span>
            <p>09-222443556 , 09-887997667</p>

            <EnvelopeIcon className="w-6 h-6 mt-2 text-blue-500"></EnvelopeIcon>
            <span className="hover:text-blue-500"> Gmail :</span>
            <p>ourBlog-admin@gmail.com</p>
        </div>
    );
}


/////right side of contact section/////
export function RightContact(){
    return (
        <div className=" max-[580px]:mx-auto  mt-10 mb-10 text-sm font-serif">
            <h2 className="text-2xl text-blue-500 hover:text-white">Page Contents</h2>
            <div className="mt-2">
                <a href="#feature-posts" className="mr-2 hover:text-blue-500">Feature Posts</a>
                <span>|</span>
                <a href="#about" className="mx-2 hover:text-blue-500">About</a>
                <span>|</span>
                <a href="#all-posts" className="mx-2 hover:text-blue-500">All Posts</a>
                <span>|</span>
                <a href="/login" className="mx-2 hover:text-blue-500">Login</a>
            </div>
            <div className="mt-10 font-sans text-sm group">
                <h2 className="text-xl text-blue-500 group-hover:text-white">Terms & Policies</h2>
                <p className="cursor-pointer hover:text-blue-500">Policies</p>
                <p className="cursor-pointer hover:text-blue-500">Terms of use</p>
                <p className="cursor-pointer hover:text-blue-500">Privacy</p>
            </div>
        </div>
    );
}
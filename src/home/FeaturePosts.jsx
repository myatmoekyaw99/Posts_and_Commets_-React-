export default function FeaturePosts(){
    return (
        <div id="feature-posts" className="pt-10 bg-slate-300">
            <h1 className="text-center"><span className="pb-2 bg-clip-text text-blue-800 text-2xl font-bold uppercase border-b-2 border-b-blue-800 hover:border-b-slate-800">Feature Posts</span></h1>
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

export function Card(){
    return (
        <div className="group h-auto shadow-black shadow-inner rounded-lg hover:rounded-none overflow-hidden bg-opacity-50 hover:bg-opacity-100 bg-slate-100">
            <img  className="w-full mb-1 h-40 rounded-t-lg group-hover:rounded-none brightness-75 hover:brightness-100 hover:scale-x-110" src="https://images.pexels.com/photos/18332225/pexels-photo-18332225/free-photo-of-young-woman-in-elegant-black-blazer-posing-outdoors-at-night.jpeg"/>
            <h5 className="text-center text-md text-black font-serif font-bold">Title</h5>
            
            <div className="flex flex-row content-center align-middle mt-1">
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?" className="w-10 h-10 ml-2 rounded-full inline-block hover:ring-1 ring-slate-400 hover:cursor-pointer"/>
                <span className="text-black text-md font-serif ml-2">author<span className="text-slate-800 text-xs font-mono block">date</span></span>
            </div>
            
            <form className="w-full border-t-[1px] mt-1 border-slate-400">
                <button href="/detail/:id" className="m-2 px-5 ring-0 hover:ring-1 ring-inset ring-slate-500 text-slate-800 text-sm hover:font-serif hover:bg-slate-100 rounded-md hover:scale-x-110 float-right">Detail</button>
            </form>
        </div> 
    );
}
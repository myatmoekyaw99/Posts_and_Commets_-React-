export default function FeaturePosts({posts}){

    // const feature_posts = posts.sort((function(a,b){
    //     return new Date(b.created_at) - new Date(a.created_at);
    // })).slice(0,10);
    //  console.log(feature_posts);

    return (
        <div id="feature-posts" className="w-screen h-[450px] py-10 bg-slate-100 overflow-auto">
            <h1 className="text-center"><span className="pb-2 bg-clip-text text-blue-800 text-2xl font-bold uppercase border-b-2 border-b-blue-800 hover:border-b-slate-800">Feature Posts</span></h1>
            <div className="w-[93%] h-[280px] mx-auto flex gap-2 snap-x snap-mandatory overflow-scroll no-scrollbar mt-10 my-1">
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
        <div id="feature-post" className="w-[245px] flex-shrink-0 group snap-start h-auto shadow-black shadow-inner rounded-lg hover:rounded-none overflow-hidden bg-opacity-50 hover:bg-opacity-100 bg-slate-200">
            <img  className="w-full mb-1 h-40 rounded-t-lg group-hover:rounded-none brightness-75 hover:brightness-100 hover:scale-x-110" src="https://images.pexels.com/photos/18332225/pexels-photo-18332225/free-photo-of-young-woman-in-elegant-black-blazer-posing-outdoors-at-night.jpeg"/>
            <h5 className="text-center text-md text-black font-serif font-bold">Title</h5>
            
            <div className="flex flex-row content-center align-middle mt-1">
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?" className="w-10 h-10 ml-2 rounded-full inline-block hover:ring-1 ring-slate-400 hover:cursor-pointer"/>
                <span className="text-black text-md font-serif ml-2">author<span className="text-slate-800 text-xs font-mono block">date</span></span>
            </div>
            
            <div className="w-full border-t-[1px] mt-1 border-slate-400">
                <a href="/detail/:id" className="m-2 px-5 ring-0 hover:ring-1 ring-inset ring-slate-500 text-slate-800 text-sm hover:font-serif hover:bg-slate-100 rounded-md hover:scale-x-110 float-right">Detail</a>
            </div>
        </div> 
    );
}
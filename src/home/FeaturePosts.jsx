export default function FeaturePosts(){
    return (
        <div id="feature-posts" className="my-10 bg-slate-300">
            <h1 className="text-center"><span className="pb-2 text-blue-800 text-2xl font-bold uppercase border-b-2 border-b-blue-800 hover:border-b-slate-800">Feature Posts</span></h1>
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
        <div className="h-auto shadow-sm shadow-black rounded-lg hover:rounded-none overflow-hidden bg-opacity-30 hover:bg-opacity-70 bg-white">
            <img  className="w-full mt-[1px] mb-1 h-40 rounded-t-lg brightness-75 hover:brightness-100 hover:scale-x-110" src="https://images.pexels.com/photos/18332225/pexels-photo-18332225/free-photo-of-young-woman-in-elegant-black-blazer-posing-outdoors-at-night.jpeg"/>
            <h5 className="text-center text-lg text-black">Title</h5>
            {/* <p className="text-center text-slate-800 font-medium">llaffo</p> */}
            <span className="text-slate-800 text-sm font-serif ml-2">author</span>
            <span className="text-slate-800 text-sm font-serif mr-2 float-right">date</span>
            
            <form className="w-full border-t-2 border-slate-800">
                <button href="/detail/:id" className="m-2 px-5 ring-0 hover:ring-1 ring-inset ring-blue-800 text-slate-800 text-sm hover:font-serif hover:bg-slate-200 rounded-md hover:scale-x-110 float-right">Detail</button>
            </form>
        </div> 
    );
}
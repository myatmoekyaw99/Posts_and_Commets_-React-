import { NavLink } from "react-router-dom";

function Navbar() {
    return ( 
        <nav className="sticky top-0 z-50 bg-white flex flex-row gap-40 justify-between align-middle w-full h-12 py-2 border border-b-[1px] border-b-blue-500 hover:border-b-gray-500 ">
            <h3 className="max-w-[50px] text-blue-900 ml-10 hover:ml-11 text-2xl font-bold font-serif">OurBlog</h3>
            <ul className="flex flex-row gap-10 mr-20">
                <ListItem avalue="#home" listvalue="Home"/>
                <ListItem avalue="#feature-post" listvalue="Feature Posts"/>
                <ListItem avalue="#about" listvalue="About"/>
                <ListItem avalue="#all-post" listvalue="All Posts"/>
                <ListItem avalue="#contact" listvalue="Contact"/>
                <span  className="border border-r-[1px] border-r-slate-500"></span>
                <ListItem avalue="/register" listvalue="Register"/>
            </ul>
            {/* <div className="flex flex-row gap-10 mr-20">
            <NavLink to="/" className="text-blue-800 hover:text-slate-900 text-sm my-1 font-bold">Home</NavLink>
            <NavLink to="#feature-posts" className="text-blue-800 hover:text-slate-900 text-sm my-1 font-bold">Feature Posts</NavLink>
            <NavLink to="/" className="text-blue-800 hover:text-slate-900 text-sm my-1 font-bold">About</NavLink>
            <NavLink to="/" className="text-blue-800 hover:text-slate-900 text-sm my-1 font-bold">All Posts</NavLink>
            <NavLink to="/" className="text-blue-800 hover:text-slate-900 text-sm my-1 font-bold">Contact</NavLink>
            <span  className="border border-r-[1px] border-r-slate-500"></span>
            <NavLink to="/register" className="text-blue-800 hover:text-slate-900 text-sm my-1 font-bold">Register</NavLink>
            </div> */}
        </nav>
     );
}

export function ListItem({avalue,listvalue}) {
    return ( 
        <a href={avalue} className="text-blue-800 hover:text-slate-900 text-sm my-1 font-bold">
            <li>{listvalue}</li>
        </a>
     );
}

export default Navbar;
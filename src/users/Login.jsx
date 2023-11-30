import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    return ( 
        <>
            <span className="inline-block" onClick={()=>{navigate('/')}}>
            <ArrowLeftOnRectangleIcon className="w-10 h-8 text-white mt-3 ml-5 hover:scale-110"/>
            </span>
            <h1 className="mt-10 text-center text-blue-500 text-3xl contrast-200 font-bold">Login</h1>
            <div className="bg-white p-5 mb-4 outline-none rounded-2xl shadow-inner shadow-black  w-[40%] mt-2 mx-auto hover:border border-blue-500">
                <form action="" className="w-[60%] mx-auto flex flex-col">
        
                        <label className="block ml-2 font-bold text-blue-500" htmlFor="email">Email :</label>
                         <input type="email" name="email" id="email" className="bg-slate-200 text-blue-500 p-2 mb-4 outline-none ring-1 ring-gray-100 rounded-2xl shadow-inner shadow-gray-300 " placeholder="Enter your email"/>
                        {/* {
                            formData.email === '' ? <small id="input-error">Email is empty</small> : <span>&nbsp;</span>
                        } */}

                        <label className="block ml-2 font-bold text-blue-500" htmlFor="password">Password :</label>
                         <input type="password" name="password" id="password" className="bg-slate-200 text-blue-500 p-2 mb-4 outline-none ring-1 ring-gray-100 rounded-2xl shadow-inner shadow-gray-300 " placeholder="Enter your password"/>
                        {/* {
                            formData.password === '' ? <small id="input-error">Password is empty</small> : ''
                        } */}

                        <input type="submit" name="submit" id="submit" className="w-[50%] mx-auto mt-3 rounded-full p-2 font-bold font-serif bg-blue-500 cursor-pointer text-white hover:bg-black" value="LOGIN"/>
                    </form>
            </div>
        </>       
    );
}

export default Login
 
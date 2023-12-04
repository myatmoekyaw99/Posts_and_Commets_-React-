import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs';

function Login() {
    const initialValue = {email:'',password:''};

    useEffect(()=>{
        axios.get('http://localhost:3030/users').then((res) =>{
            setUsers(res.data);
        })
    },[]);

    const navigate = useNavigate();
    const [users,setUsers] = useState([]);
    const [formData,setFormData] = useState(initialValue);
    const [isSubmit,setIsSubmit] = useState(false);

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData((prevFormData) => ( ({ ...prevFormData, [name]: value })));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        setIsSubmit(true);
        const user = users.filter((user) =>
            formData.email === user.email );

        ///to match password///
        if(bcrypt.compareSync(formData.password,user[0].password)){
            localStorage.setItem('login_user',JSON.stringify(user[0]));
            setIsSubmit(false);
            alert('Login successful!')
            navigate('/');
        }else{
            alert("Password doesn't match");
        }
        
    }

    return ( 
        <>
            <span className="inline-block" onClick={()=>{navigate('/')}}>
            <ArrowLeftOnRectangleIcon className="w-10 h-8 text-white mt-3 ml-5 hover:scale-110"/>
            </span>
            <h1 className="mt-10 text-center text-blue-500 text-3xl contrast-200 font-bold">Login</h1>
            <div className=" w-[40%] mt-2 mx-auto bg-gray-100 p-5 mb-4 outline-none rounded-2xl shadow-inner shadow-black border border-gray-200 hover:bg-white">
                <form onSubmit={(e)=>handleSubmit(e)} className="w-[60%] mx-auto flex flex-col">
        
                        <label className="block ml-2 font-bold text-blue-500" htmlFor="email">Email :</label>
                         <input type="email" name="email" id="email" value={formData.email} onChange={(e)=>handleChange(e)} className="bg-slate-200 text-blue-500 p-2 mb-2 outline-none ring-1 ring-gray-100 rounded-2xl shadow-inner shadow-gray-400 " placeholder="Enter your email"/>
                        { isSubmit ?
                            formData.email === '' ? <small className="mb-2 ml-2 text-xs animate-bounce text-red-500">Email is empty</small> : <span>&nbsp;</span> 
                          :''
                        }

                        <label className="block ml-2 font-bold text-blue-500" htmlFor="password">Password :</label>
                         <input type="password" name="password" id="password" value={formData.password} onChange={(e)=>handleChange(e)} className="bg-slate-200 text-blue-500 p-2 mb-2 outline-none ring-1 ring-gray-100 rounded-2xl shadow-inner shadow-gray-400 " placeholder="Enter your password"/>
                        { isSubmit ?
                            formData.password === '' ? <small className="mb-2 ml-2 text-xs animate-bounce text-red-500">Password is empty</small> : ''
                          : ''
                        }

                        <input type="submit" name="submit" id="submit" className="w-[50%] mx-auto mt-3 rounded-full p-2 font-bold font-serif bg-blue-500 cursor-pointer text-white hover:bg-black" value="LOGIN"/>
                    </form>
            </div>
        </>       
    );
}

export default Login
 
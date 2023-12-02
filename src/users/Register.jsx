import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs';

function Register() {
    const initialValue = {name:'',email:'',phone:'',profile:'',password:'',confirmPassword:''};
     
    const navigate = useNavigate();
    const [formData,setFormData] = useState(initialValue);
    const [isSubmit,setIsSubmit] = useState(false);

    const handleChange = (event) => {
        const { name, value} = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) =>{
        event.preventDefault();

        if(formData.name !== '' && formData.email !== '' && formData.phone !== '' && formData.profile !== ''){
            if(formData.password === formData.confirmPassword && formData.password !== ''){
                createPost(formData);
                setFormData(initialValue);
            }else{
                setIsSubmit(false);
                alert("Password does not match!");
            }
        }else{
            setIsSubmit(true);
            alert("Fill the input form data!");
        }
        
    }

    return (  
        <>
            <div className="relative">
            <span className="inline-block" onClick={()=>{navigate(-1)}}>
            <ArrowLeftOnRectangleIcon className="w-10 h-8 text-white mt-3 ml-5 hover:scale-110"/>
            </span>
            {/* <span className="absolute top-1 right-2 mb-2 text-white">Already have an account?</span> */}
            <a href="/login" className="absolute top-5 inline-block right-12 p-2 rounded-xl text-gray-400 font-bold ring-2 ring-gray-800 shadow-md shadow-gray-700  hover:ring-gray-900 hover:text-gray-300">Login Here</a>
            </div>
            <h1 className="text-center text-white text-2xl bg-clip-text contrast-200 font-bold">Registration</h1>
            <div className="bg-blue-500 p-5 mb-4 outline-none ring-1 ring-gray-500 rounded-2xl shadow-inner shadow-black  w-[40%] mt-2 mx-auto hover:ring-2">

                <form method="post" className="w-[80%] mx-auto flex flex-col" onSubmit={(e)=>handleSubmit(e)}>
                        <label className="block ml-2 font-bold text-white" htmlFor="name">Name :</label>
                         <input type="text" name="name" id="name" className="bg-white text-blue-600 p-2 mb-2 outline-none ring-1 ring-gray-100 rounded-2xl shadow-inner shadow-gray-800 " placeholder="Enter your name" value={formData.name} onChange={handleChange}/>
                        {
                            isSubmit ?
                                formData.name === '' ? <small id="input-error" className="text-red-600 text-bold ml-2">Name is empty</small> : ''
                            :''
                        }

                        <label className="block ml-2 font-bold text-white" htmlFor="email">Email :</label>
                         <input type="email" name="email" id="email" className="bg-white text-blue-600 p-2 mb-2 outline-none ring-1 ring-gray-100 rounded-2xl shadow-inner shadow-gray-800 " placeholder="Enter your email" value={formData.email} onChange={handleChange}/>
                        {
                            isSubmit ?
                                formData.email === '' ? <small id="input-error" className="text-red-600 text-bold ml-2">Email is empty</small> : <span>&nbsp;</span>
                            : ''
                        }

                        <label className="block ml-2 font-bold text-white" htmlFor="phone">Phone No :</label>
                         <input type="phone" name="phone" id="phone" className="bg-white text-blue-600 p-2 mb-2 outline-none ring-1 ring-gray-100 rounded-2xl shadow-inner shadow-gray-800 " placeholder="Enter your phone" value={formData.phone} onChange={handleChange}/>
                        {
                            isSubmit ?
                                formData.phone === '' ? <small id="input-error" className="text-red-600 text-bold ml-2">Phone number is empty</small> : ''
                            : ''
                        }

                        <label className="block ml-2 font-bold text-white" htmlFor="profile">Profile :</label>
                         <input type="text" name="profile" id="profile" className="bg-white text-blue-600 p-2 mb-2 outline-none ring-1 ring-gray-100 rounded-2xl shadow-inner shadow-gray-800 " placeholder="Enter your profile url" value={formData.profile} onChange={handleChange}/>
                        {
                            isSubmit ?
                                formData.profile_url === '' ? <small id="input-error" className="text-red-600 text-bold ml-2">Name is empty</small> : ''
                            : ''
                        }

                        <label className="block ml-2 font-bold text-white" htmlFor="password">Password :</label>
                         <input type="password" name="password" id="password" className="bg-white text-blue-600 p-2 mb-2 outline-none ring-1 ring-gray-100 rounded-2xl shadow-inner shadow-gray-800 " placeholder="Enter your password" value={formData.password} onChange={handleChange}/>
                        { isSubmit ?
                            formData.password === '' ? <small id="input-error" className="text-red-600 text-bold ml-2">Password is empty</small> : ''
                          : ''
                        }

                        <label className="block ml-2 font-bold text-white" htmlFor="confirmPassword">Comfirm Password :</label>
                         <input type="password" name="confirmPassword" id="confirmPassword" className="bg-white text-blue-600 p-2 mb-2 outline-none ring-1 ring-gray-100 rounded-2xl shadow-inner shadow-gray-800 " placeholder="Comfirm your password" value={formData.confirmPassword} onChange={handleChange}/>
                        {isSubmit ?
                            formData.confirmPassword === '' ? <small id="input-error" className="text-red-600 text-bold ml-2">Confirm Password is empty</small> : ''
                        : ''
                        }

                        <div className="flex flex-row">
                            <input type="submit" name="submit" id="submit" className="w-[30%] mx-auto mt-3 inline-block rounded-full p-2 font-bold font-serif bg-white text-blue-500 cursor-pointer hover:shadow-inner hover:shadow-black" value="Register"/>
                            <button type="reset" name="cancel" id="cancel" className="w-[30%] mx-auto mt-3 inline-block rounded-full p-2 font-bold font-serif text-white border-blue-300 border hover:ring-1 hover:ring-white active:animate-bounce" onClick={()=>{
                                setFormData(initialValue);
                            }}>Cancel</button>
                        </div>
                    </form>
            </div>
        </>
    );
}

export default Register;

export async function createPost(formData){
    const res = await axios.post('http://localhost:3030/users',{
            id:'',
            name:formData.name,
            email: formData.email,
            phone_number: formData.phone,
            profile_url:formData.profile,
            password: bcrypt.hashSync(formData.password),
            created_at: new Date(),
        }
    ).then(res => {
        alert(`Create new user ${res.data.name} successful!`);
    });
    // console.log(user);
}
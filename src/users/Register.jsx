import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Form } from "react-router-dom";

function Register() {

    const [formData,setFormData] = useState({name:'',email:'',phone:'',password:'',confirmPassword:''});
    const [isSubmit,setIsSubmit] = useState(false);

    const handleChange = (event) => {
        const { name, value} = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    return (  
        <>
        <a href="/">
        <ArrowLeftOnRectangleIcon className="w-10 h-8 text-white mt-3 ml-5 hover:scale-110"/>
        </a>
        <h1 className="text-center text-white text-xl mt-10">Registration</h1>
        <div className="bg-gray-300 p-5 m-2 outline-none ring-1 ring-gray-500 rounded-2xl shadow-inner shadow-gray-800  w-[40%] mt-4 mx-auto">
            <form action="" className="w-[80%] mx-auto">
                    <label className="block ml-2" htmlFor="name">Name :</label>
                    <input type="text" name="name" id="name" className="bg-gray-300 p-2 m-2 outline-none ring-1 ring-gray-500 rounded-2xl shadow-inner shadow-gray-800 " placeholder="Enter your name" value={formData.name} onChange={handleChange}/>
                    {/* {
                        formData.name === '' ? <small id="input-error">Name is empty</small> : ''
                    } */}

                    <label className="block ml-2" htmlFor="email">Email :</label>
                    <input type="email" name="email" id="email" className="bg-gray-300 p-2 m-2 outline-none ring-1 ring-gray-500 rounded-2xl shadow-inner shadow-gray-800 " placeholder="Enter your email" value={formData.email} onChange={handleChange}/>
                    {/* {
                        formData.email === '' ? <small id="input-error">Email is empty</small> : <span>&nbsp;</span>
                    } */}

                    <label className="block ml-2" htmlFor="phone">Phone No :</label>
                    <input type="phone" name="phone" id="phone" className="bg-gray-300 p-2 m-2 outline-none ring-1 ring-gray-500 rounded-2xl shadow-inner shadow-gray-800 " placeholder="Enter your phone" value={formData.phone} onChange={handleChange}/>
                    {/* {
                        formData.phone === '' ? <small id="input-error">Phone number is empty</small> : ''
                    } */}

                    <label className="block ml-2" htmlFor="password">Password :</label>
                    <input type="password" name="password" id="password" className="bg-gray-300 p-2 m-2 outline-none ring-1 ring-gray-500 rounded-2xl shadow-inner shadow-gray-800 " placeholder="Enter your password" value={formData.password} onChange={handleChange}/>
                    {/* {
                        formData.password === '' ? <small id="input-error">Password is empty</small> : ''
                    } */}

                    <label className="block ml-2" htmlFor="confirmPassword">Comfirm Password :</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" className="bg-gray-300 p-2 m-2 outline-none ring-1 ring-gray-500 rounded-2xl shadow-inner shadow-gray-800 " placeholder="Comfirm your password" value={formData.confirmPassword} onChange={handleChange}/>
                    {/* {
                        formData.confirmPassword === '' ? <small id="input-error">Confirm Password is empty</small> : ''
                    } */}

                    <input type="submit" name="submit" id="submit" className="submit-btn" value="Submit"/>
                </form>
        </div>
        </>
    );
}

export default Register;
import axios from "axios";
import { useEffect, useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import bcrypt from 'bcryptjs';
import { getLoginUser } from "./UserProfile";

function EditUser() {
    const initialValue = {name:'',email:'',phone_number:'',profile_url:'',password:''};

    const {user_id} = useParams();
    
    const [formData,setFormData] = useState(initialValue);
    const [isSubmit,setIsSubmit] = useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:3030/users/${user_id}`).then(res => setFormData(res.data));
    },[]);

    const handleChange = (event) => {
        const { name, value} = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) =>{
        event.preventDefault();

        if(formData.name !== '' && formData.email !== '' && formData.phone !== '' && formData.profile !== '' && formData.password !== ''){
            updateUser(formData);
            // localStorage.setItem('login_user',JSON.stringify(formData));
            window.location='/profile';
        }else{
            setIsSubmit(true);
            alert("Fill the input form data!");
        }
        
    }

    return (  
        <div className="bg-blue-400 p-5 mb-4 outline-none ring-1 ring-gray-500 rounded-2xl shadow-inner shadow-black w-90% md:w-[40%] mt-2 mx-auto hover:ring-2 overflow-scroll no-scrollbar">
            <h1 className="mt-3 text-center text-white text-xl md:text-2xl bg-clip-text contrast-200 font-bold">Edit Profile</h1>
            <form className="w-[80%] mt-2 mx-auto flex flex-col" onSubmit={(e)=>handleSubmit(e)}>
                    <label className="block ml-2 font-bold text-gray-200" htmlFor="name">Name :</label>
                        <input type="text" name="name" id="name" className="bg-gray-200 text-blue-400 p-2 mb-2 outline-none ring-1 ring-gray-100 rounded-2xl shadow-inner shadow-gray-800 " placeholder="Enter your name" value={formData.name} onChange={handleChange}/>
                    {
                        isSubmit ?
                            formData.name === '' ? <small id="input-error" className="text-red-600 text-bold ml-2">Name is empty</small> : ''
                        :''
                    }

                    <label className="block ml-2 font-bold text-gray-200" htmlFor="email">Email :</label>
                        <input type="email" name="email" id="email" className="bg-gray-200 text-blue-400 p-2 mb-2 outline-none ring-1 ring-gray-100 rounded-2xl shadow-inner shadow-gray-800 " placeholder="Enter your email" value={formData.email} onChange={handleChange}/>
                    {
                        isSubmit ?
                            formData.email === '' ? <small id="input-error" className="text-red-600 text-bold ml-2">Email is empty</small> : <span>&nbsp;</span>
                        : ''
                    }

                    <label className="block ml-2 font-bold text-gray-200" htmlFor="phone">Phone No :</label>
                        <input type="phone" name="phone_number" id="phone" className="bg-gray-200 text-blue-400 p-2 mb-2 outline-none ring-1 ring-gray-100 rounded-2xl shadow-inner shadow-gray-800 " placeholder="Enter your phone" value={formData.phone_number} onChange={handleChange}/>
                    {
                        isSubmit ?
                            formData.phone_number === '' ? <small id="input-error" className="text-red-600 text-bold ml-2">Phone number is empty</small> : ''
                        : ''
                    }

                    <label className="block ml-2 font-bold text-gray-200" htmlFor="profile">Profile :</label>
                        <input type="text" name="profile_url" id="profile" className="bg-gray-200 text-blue-400 p-2 mb-2 outline-none ring-1 ring-gray-100 rounded-2xl shadow-inner shadow-gray-800 " placeholder="Enter your profile url" value={formData.profile_url} onChange={handleChange}/>
                    {
                        isSubmit ?
                            formData.profile_url === '' ? <small id="input-error" className="text-red-600 text-bold ml-2">Name is empty</small> : ''
                        : ''
                    }

                    <label className="block ml-2 font-bold text-gray-200" htmlFor="password">Password :</label>
                        <input type="password" name="password" id="password" className="bg-gray-200 text-blue-400 p-2 mb-2 outline-none ring-1 ring-gray-100 rounded-2xl shadow-inner shadow-gray-800 " placeholder="Enter your password" value={formData.password} onChange={handleChange}/>
                    { isSubmit ?
                        formData.password === '' ? <small id="input-error" className="text-red-600 text-bold ml-2">Password is empty</small> : ''
                        : ''
                    }

                    <div className="flex flex-row">
                        <input type="submit" name="submit" id="submit" className="px-3 md:px-6 py-1 mx-auto mt-3 inline-block rounded-lg font-md font-serif bg-gray-800 text-blue-400 cursor-pointer shadow-sm shadow-gray-800 hover:ring-2 hover:ring-white " value="Update"/>
                        <button type="reset" name="cancel" id="cancel" className="px-3 md:px-6 py-1 mx-auto mt-3 inline-block rounded-lg font-md font-serif bg-gray-900 text-white border-gray-800 border hover:ring-2 hover:ring-white active:animate-bounce" onClick={()=>{
                            setFormData(initialValue);
                            setIsSubmit(false);
                        }}>Cancel</button>
                    </div>
                </form>
        </div>
    );
}

export default EditUser;

export async function updateUser(formData){

    const user = getLoginUser();
    await axios.patch(`http://localhost:3030/users/${formData.id}`,{
            name:formData.name,
            email: formData.email,
            phone_number: formData.phone_number,
            profile_url:formData.profile_url,
            password: formData.password === user.password ? user.password : bcrypt.hashSync(formData.password,8)
        }
    ).then(res => {
        alert(`Edit user - ${res.data.name} successful!`);
    });
    localStorage.setItem('login_user',JSON.stringify(formData));
    // console.log(user);
}
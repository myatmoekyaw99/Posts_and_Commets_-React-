import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {

    const {postId} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:3030/posts/${postId}`).then(res => setFormData(res.data));
    },[]);
    
    const initialValue = {title:'',profile_url:'',body:''};
     
    const [formData,setFormData] = useState(initialValue);
    const [isSubmit,setIsSubmit] = useState(false);
    const navigator = useNavigate();

    const handleChange = (event) => {
        const { name, value} = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) =>{
        event.preventDefault();

        if(formData.title !== '' && formData.profile_url !== '' && formData.body !== ''){
                updatePost(formData);
                setFormData(initialValue);
                navigator('/profile/posts');
        }else{
            setIsSubmit(true);
            alert("Fill the input form data!");
        }
        
    }

    return ( 
        <div className="relative bg-gray-800 p-5 my-auto outline-none rounded-2xl shadow-inner shadow-gray-900 w-[50%] mx-auto overflow-y-scroll no-scrollbar">
            <h1 className="text-center text-xl text-gray-400 bg-clip-text my-4">Let's create new post!</h1>
            <form className="w-[80%] mx-auto flex flex-col mt-8" onSubmit={(e)=>handleSubmit(e)}>
                <div className="flex flex-row justify-center align-middle">
                    <label className="basis-1/3 block text-center my-2 text-gray-400" htmlFor="title">Title :</label>
                    <input type="text" name="title" id="title" className="basis-2/3 w-[60%] bg-gray-700 text-gray-300 p-2 mb-8 outline-none rounded-2xl shadow-sm shadow-gray-900" placeholder="Enter your title" value={formData.title} onChange={handleChange}/>
                    {
                        isSubmit ?
                            formData.title === '' ? <small id="input-error" className="text-red-600 text-bold ml-2">*empty*</small> : ''
                        :''
                    }
                </div>

                <div className="flex flex-row justify-center align-middle">
                    <label className="basis-1/3 block text-center my-2 text-gray-400" htmlFor="profile_url">Profile :</label>
                    <input type="text" name="profile_url" id="profile_url" className="basis-2/3 w-[60%] bg-gray-700 text-gray-300 p-2 mb-8 outline-none rounded-2xl shadow-sm shadow-gray-900" placeholder="Enter your profile url" value={formData.profile_url} onChange={handleChange}/>
                    {
                        isSubmit ?
                            formData.profile_url === '' ? <small id="input-error" className="text-red-600 text-bold ml-2">*empty*</small> : ''
                        :''
                    }
                </div>

                <div className="flex flex-row justify-center align-middle">
                    <label className="basis-1/3 block text-center my-2 text-gray-400" htmlFor="body">Body :</label>
                    <textarea rows={5} name="body" id="body" className="basis-2/3 w-[60%] bg-gray-700 text-gray-300 p-2 mb-8 outline-none rounded-2xl shadow-sm shadow-gray-900" placeholder="Enter your post description" value={formData.body} onChange={handleChange}/>
                    {
                        isSubmit ?
                            formData.body === '' ? <small id="input-error" className="text-red-600 text-bold ml-2">*empty*</small> : ''
                        :''
                    }
                </div>

                <div className="w-full text-center">
                    <input type="submit" name="submit" id="submit" className="w-24 ml-8 inline-block rounded-full p-1 font-bold font-serif bg-gray-700 text-blue-500 cursor-pointer hover:shadow-inner hover:shadow-gray-800 active:animate-bounce" value="Update"/>
                    <button type="reset" name="cancel" id="cancel" className="w-24 ml-4 inline-block rounded-full p-1 font-bold font-serif  mb-1 bg-gray-700 text-blue-500 hover:shadow-inner hover:shadow-gray-800 active:animate-bounce" onClick={()=>{
                        setFormData(initialValue);
                        setIsSubmit(false);
                    }}>Cancel</button>
                </div>
            </form>
        </div>
     );
}

export default EditPost;

function updatePost(formData){

    axios.patch(`http://localhost:3030/posts/${formData.id}`,{
            title: formData.title,
            body: formData.body,
            profile_url: formData.profile_url,
        }
    ).then(res => {
        alert(`Edit post - ${res.data.title} successful!`);
    });
}
import { CalendarIcon, EnvelopeIcon, PencilSquareIcon, PhoneIcon } from "@heroicons/react/24/outline";

function UserProfile() {
    return ( 
        <div className="basis-4/5 relative shadow-inner shadow-zinc-950">
            <div className="w-full bg-gray-800 shadow-inner shadow-zinc-950 h-[25%] p-1"></div>
            <div className="absolute left-[42%] top-14 text-center">
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?" className="w-44 h-48 ring-[5px] ring-gray-900 rounded-full "/>
                <h1 className="text-2xl font-bold mt-2 ">Myat Moe Kyaw</h1>
                <p className="text-sm text-gray-400 mt-1">
                    Total Posts - <span className="animate-bounce w-2 h-2 inline-block align-start text-blue-900">10</span>
                </p>
                <span className="flex flex-row justify-center mt-2 text-gray-400 hover:text-white cursor-pointer"><PencilSquareIcon className="w-5 h-5"></PencilSquareIcon> Edit</span>
            </div>
            <div className="w-full bg-gray-800 h-[25vh] mt-14 shadow-inner shadow-gray-900">
            </div>
            <div className="p-4 bg-gray-700">
                <p className="flex flex-row align-middle justify-center text-gray-400"><EnvelopeIcon className="w-6 h-6 text-white"></EnvelopeIcon><span className="ml-2">myatmoekyaw@gmail.com</span></p>
                <p className="flex flex-row align-middle justify-center text-gray-400 mt-2"><PhoneIcon className="w-6 h-6 text-white"></PhoneIcon><span className="ml-2">09-961566887</span></p>
                <p className="flex flex-row align-middle justify-center text-gray-400 mt-2"><CalendarIcon className="w-6 h-6 text-white"></CalendarIcon><span className="ml-2">11/12/2023</span></p>
            </div>
        </div>
     );
}

export default UserProfile;
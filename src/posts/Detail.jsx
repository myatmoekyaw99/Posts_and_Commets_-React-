import Navbar from "../layout/Navbar";

function Detail() {
    return ( 
        <>
        <Navbar/>
        <div className="flex flex-row gap-2 w-full mt-14 h-[90vh] bg-dark-800 text-blue-600 overflow-hidden">
            <div className="basis-1/3">
            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?" className="w-[90%] h-[90%] mx-auto mt-2 rounded-md hover:ring-1 ring-white hover:cursor-pointer shadow-sm shadow-white"/>
            <h1 className="text-white text-center font-bold text-xl mt-2">Title</h1>
            </div>
            <div className="basis-1/3 bg-zinc-800 shadow-sm shadow-black no-scrollbar h-full overflow-y-scroll rounded-lg">
                <div className="flex flex-row content-center align-middle m-2">
                    <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?" className="w-10 h-10 ml-2 rounded-full inline-block hover:ring-1 ring-slate-400 hover:cursor-pointer"/>
                    <span className="text-white text-md font-serif ml-2">author<span className="text-white text-xs font-mono block">date</span></span>
                </div>
                <div className="m-2">
                    <p className="text-white ml-2 mt-2 mb-4 text-clip">
                    Web Developer လုပ်လိုသူများအတွက် အထူး သင့်တော်သော အတန်း ဖြစ်ပါတယ်။ FrontEnd ရော BackEnd ပါ Project ရေးနိုင်သည် အထိ သင်ကြားမည့် အတန်း ဖြစ်ပါတယ်။ ” 
🥇ယခု Diploma in Web Development အတန်းသည် Google Class Room  ဖြင့် Recorded သင်မှာ ဖြစ်ပြီး  ပုံမှန် သင်တန်းကာလ ၆ လ ကြာမြင့် ပါမည်။ လေ့လာ ဖူးသူများ အတွက် ပိုလည်း မြန်နိုင်သလို ယခု မှ စတင် လေ့လာ မည့် Beginner များ အတွက်တော့ အချိန် ပိုလည်း ကြာနိုင်ပါတယ်။ သို့သော် သင်တန်းကိုတော့ မတတ်မချင်း လေ့လာ သူယူ နိုင်ဖို့ Life Time Access ပေးထားပါတယ်ဗျ။ 
🥇 လုံးဝ Beginner များ အဆင်ပြေစေရန် HTML , CSS , JavaScript , React , PHP တို့ကို အခြေခံ မှ စတင်ကာ ကိုယ်ပိုင် projects များ ရေးနိုင် သွားသည် အထိ သင်ကြား ပေးမှာ ဖြစ်ပါတယ်။
🥇ယခု အတန်းသည် Project ရေးတတ်အောင်ထိ သင်မှာမို့ သင်တန်းကာလ ၆ လ ကြာမြင့် သွားခြင်း ဖြစ်ပါတယ်။ 
🥇ပုံမှန်အားဖြင့် သင်တန်းကြေး တစ်လ တစ်သိန်းခွဲ ယူသော်လည်း ယခု အတန်းတွင်တော့ သင်တန်းကြေး အပြီးအစီးကိုမှ ၃ သိန်းသာ ကျသင့်မှာ ဖြစ်ပါတယ်။ သိုသော် ပထမဆုံး အပ်သူ ၁၀ ယောက် အတွက် 50% OFF တာ ဖြစ်သည့် အတွက် သင်တန်းကြေး အပြီးအစီးကိုမှ တစ်သန်းခွဲ( 150000 ) သာ ကျင့်မှာ ဖြစ်ပါတယ်။ 
🥇သင်တန်းမှာ သင်သမျှ အားလုံးသည် recorded  ဖြစ်ပြီး မိမိတို့ နားမလည်တာတွေကိုလည်း အချိန် မရွေး ပြန်ကြည့် နိုင်အောင် Google Class Room မှာ တင်ထား ပေးမှာ ဖြစ်ပါတယ်။ မသိ နားမလည် တာများကို ပြန်လည် ဆွေးနွေး နိုင်ရန်လည်း Discrod Server ကို ကျောင်းသား များအတွက် သီးသန့် ထား ပေးထားမှာ ဖြစ်ပါတယ်။ ကျောင်းသား အချင်းချင်း ဆွေးနွေး မေးမြန်း နိုင်သလို သင်ကြားသူ ဆရာများနှင့်လည်း ဆွေးနွေး မေး မြန်း နိုင်ပါတယ်။ 
🥇သင်တန်းတွင် Assignment Projects များကိုအောင်မြင်စွာ ပြီးဆုံးပါက Diploma in Web Development (DIW) လက်မှတ်ကို International Cyber City Company မှ ထုတ်ပေးသွားမှာ ဖြစ်ပါတယ်။
🥇သင်တန်းကို ထူးချွန်စွာ ပြီးဆုံးပါက National Cyber City Company ( Software Dep ) တွင် Internship ဆင်းခွင့်ကိုလည်း ရရှိမှာ ဖြစ်ပါတယ်။ ထို Internship တွင်လည်း projects များပြီးဆုံးပါက အလုပ်ထောက်ခံချက် ကို ထုတ်ပေးသွား မှာ ဖြစ်ပါတယ်။
                    </p>
                </div>
            </div>
            <div className="basis-1/3 overflow-y-scroll no-scrollbar">
                <h1 className="sticky top-0 z-50 p-2 text-white border-b border-b-white bg-black">Comments</h1>
                <div className="w-full h-full mb-4">
                   <div className="flex flex-row mt-2">
                        <div className="flex flex-row content-center align-middle mt-4">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?" className="w-8 h-8 ml-2 rounded-full inline-block hover:ring-1 ring-slate-400 hover:cursor-pointer"/>
                        </div>
                        <div className="relative z-0 mt-4 ml-3 bg-gray-900 rounded-xl px-4 w-auto h-auto">
                            <span className="text-white text-md font-serif">author</span>
                            <p className="text-slate-400 text-sm font-light mb-1">afag</p>
                            <span className="absolute right-1 text-slate-400 text-[10px] font-mono font-thin">date</span>
                        </div>
                   </div>

                   
                </div>
            </div>
        </div>
        </>
     );
}

export default Detail;
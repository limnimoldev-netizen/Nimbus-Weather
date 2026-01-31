<template>
    <div class="min-h-screen bg-[#31255a] flex items-center justify-center ">

        <div class="w-full max-w-md bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl p-8 text-white">

            <div class="text-center mb-8">

                <h1 class="text-3xl font-bold ">Welcome Back <i class="fas fa-cloud text-[#75b4e3] text-4xl "></i> </h1>
                <p class="text-white">Log in to your account to check the weather</p>
            </div>  


            <form class="space-y-3 pb-4">

                <div class="pb-3">
                    <label class="block text-sm font-medium pb-1 ">Phone Number</label>
                    <input type="tel" placeholder="Enter your phone number" 
                        class="w-full px-4 py-3 bg-white/10 border border-white/20  rounded-xl focus:ring-2 focus:ring-[#75b4e3] outline-none placeholder-white/50 transition-all">
                </div>

                <div class="pb-5">
                    <label class="block text-sm font-medium pb-1">Password</label>
                    <input type="password" placeholder="Enter your password" 
                        class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#75b4e3] outline-none placeholder-white/50 transition-all">
                </div>  

                <button class="w-full py-3 bg-[#31255a] hover:bg-[#75b4e3] hover:text-[#31255a] text-[#fff] font-bold rounded-xl shadow-lg shadow-[ #31255a] transform transition active:scale-95">
                    Log In</button>

            </form> 
            <p class="text-center mt-2   text-sm "> Don't have an account? 
                <a href="/register" class="text-[#75b4e3] font-semibold  ">Sign up</a> </p>
        </div>  
    </div>

</template>
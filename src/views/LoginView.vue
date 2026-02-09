<template>
  
    <div class="min-h-screen bg-gradient-to-b from-indigo-950 via-blue-900 to-slate-950 flex items-center justify-center px-4">

        <div class="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 text-white">

        <div class="text-center mb-8">
            <h1 class="text-3xl font-bold flex items-center justify-center gap-2">
            Welcome Back 
            <i class="fas fa-cloud text-sky-400 text-4xl"></i>
            </h1>
            <p class="text-blue-100 mt-2">Log in to your account to check the weather</p>
        </div>  

        <form class="space-y-5">

            <div>
            <label class="block text-sm font-medium pb-1 text-blue-200">Phone Number</label>
            <input type="tel" placeholder="Enter your phone number"
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-sky-400 outline-none placeholder-white/50 transition-all"/>
            </div>

            <div>

            <label class="block text-sm font-medium pb-1 text-blue-200">Password</label>
           
            <input type="password" placeholder="Enter your password"class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-sky-400 outline-none placeholder-white/50 transition-all"/></div>  

            <a href="/home" class="block w-full py-3 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl shadow-lg shadow-sky-800/50 text-center transition active:scale-95">
          
                Log In  </a>
          

        </form> 

        <p class="text-center mt-4 text-sm text-blue-200">Don't have an account? 
            <a href="/" class="text-sky-400 font-semibold hover:underline">Sign up</a>
        </p>

        </div>  
    
    </div>

</template>

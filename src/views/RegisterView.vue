<template>


    <div class="min-h-screen bg-gradient-to-br from-blue-400 via-light-blue-300 to-indigo-500 flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl p-8 text-white">
            <div class="text-center mb-8">
            <h1 class="text-3xl font-bold mb-2">Join the Sky </h1>
            <p class="text-blue-50/80">Create an account to track your local weather.</p>
            </div>

            <form class="space-y-6">
            <div>
                <label class="block text-sm font-medium mb-2">Full Name</label>
                <input type="text" placeholder="Enter your full name" 
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-300 outline-none placeholder-white/50 transition-all">
            </div>

            <div>
                <label class="block text-sm font-medium mb-2">Email </label>
                <input type="email" placeholder="Enter your email" 
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-300 outline-none placeholder-white/50 transition-all">
            </div>

            <div>
                <label class="block text-sm font-medium mb-2">Password</label>
                <input type="password" placeholder="Enter your password" 
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-300 outline-none placeholder-white/50 transition-all">
            </div>

            <div>
                <label class="block text-sm font-medium mb-2">Confirm Password</label>
                <input type="password" placeholder="Enter your password " 
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-300 outline-none placeholder-white/50 transition-all">
            </div>

            <button class="w-full py-3 bg-[#31255a] hover:bg-[#75b4e3] hover:text-[#31255a] text-[#fff] font-bold rounded-xl shadow-lg shadow-[ #31255a] transform transition active:scale-95">
                Create Account
            </button>
            </form>

            <p class="text-center mt-2   text-sm ">
            Already have an account? <a href="#" class="text-[#31255a] font-semibold  ">Log in</a>
            </p>
        </div>

    </div>


</template>
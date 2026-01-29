<template>
    <div class="bg-white  h-screen flex items-center justify-center">


        <div class="  p-8  p-5 rounded-lg shadow-lg">
            <p class="text-black font-bold font-poppins text-lg   "> <span class="text-blue-900 font-[100]  ">Welcome</span> Numburs Weather</p>
            <h1 class="text-black font-poppins text-4xl font-bold ">Create your account to see <br> weather updates anytime.
            It’s  <br> fast, easy and free!</h1>
        </div>

        <div class="bg-white rounded-lg shadow-lg ml-6 w-110 ">>
            <form class="">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2 font-poppins" for="username">
                        Full Name
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-poppins"
                        id="fullname" type="text" placeholder="Enter your full name">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2 font-poppins" for="email">
                        Email
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-poppins"
                        id="email" type="email" placeholder="Enter your email">
                </div>

                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2 font-poppins" for="password">
                         Password        
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline font-poppins"
                        id="password" type="password" placeholder="Enter your password">
                </div>

                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2 font-poppins" for="password">
                            Confirm Password       
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline font-poppins"
                        id="confirmPassword" type="password" placeholder="Enter your password">
                </div>

                <div class="flex items-center justify-between">

                    <button
                        class="bg-blue-900 hover:bg-blue-400 text-white font-bold py-2 px-9 rounded focus:outline-none focus:shadow-outline font-poppins"
                        type="button">
                        Create Account
                    </button>

                </div>
            </form> 
        </div>
    </div>
</template>
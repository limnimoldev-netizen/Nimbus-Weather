
<template>
    <aside class="w-64 p-6 border-r border-white/10">
        <h1 class="text-xl font-semibold mb-8 flex items-center gap-2">☁ Atmosphere</h1>
        <nav class="space-y-4 text-sm">
            <a class="block opacity-70 hover:opacity-100">Dashboard</a>
            <a class="block opacity-70 hover:opacity-100">Hourly</a>
            <a class="block opacity-70 hover:opacity-100">Daily</a>
            <a class="block opacity-70 hover:opacity-100">Maps</a>
            <a class="block font-semibold">Settings</a>
        </nav>
    </aside>
    <main class="flex-1 p-10 grid grid-cols-2 gap-6">
        <h2 class="col-span-2 text-2xl font-semibold">Settings</h2>
        <section class="bg-white/10 rounded-xl p-6 space-y-4">
            <h3 class="font-medium">Measurement Units</h3>
            <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                    <span>Temperature</span>
                    <span class="opacity-70">°C / °F</span>
                </div>      
                <div class="flex justify-between">
                    <span>Wind Speed</span>
                    <span class="opacity-70">km/h / mph</span>
                </div>
                <div class="flex justify-between">
                    <span>Pressure</span>
                    <span class="opacity-70">hPa / inHg</span>
                </div>
            </div>
        </section>

        <section class="bg-white/10 rounded-xl p-6 space-y-4">
            <h3 class="font-medium">Notification Settings</h3>
            <div class="flex justify-between text-sm">
                <span>Rain Alerts</span>
                <input type="checkbox" checked class="accent-indigo-400" />
            </div>
            <div class="flex justify-between text-sm">
                <span>UV Warnings</span>
                <input type="checkbox" checked class="accent-indigo-400" />
            </div>
            <div class="flex justify-between text-sm">
                <span>Morning Summary</span>
                <input type="checkbox" class="accent-indigo-400" />
            </div>
        </section>
        
    </main>
</template>
 main

<template>
    <div class="fixed inset-0 bg-slate-200/75 z-10">
        <div class="grid place-items-center h-full" @click.self="closeNav">
            <div class="bg-white rounded-2xl w-3/5">
                <ul class="space-y-5 p-10">
                    <li v-if="!user" class="">
                        <NuxtLink to="/site/faq"
                            class="text-sm inline-block rounded-lg cursor-pointer py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                            @click="closeNav">FAQ</NuxtLink>
                    </li>
                    <li v-if="!user" class="">
                        <NuxtLink to="/blog"
                            class="text-sm inline-block rounded-lg cursor-pointer py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                            @click="closeNav">Blog</NuxtLink>
                    </li>
                    <li v-if="!user" class="border-t border-slate-300 pt-6">
                        <NuxtLink to="/auth/login"
                            class="text-sm inline-block rounded-lg cursor-pointer py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                            @click="closeNav">
                            Sign in</NuxtLink>
                    </li>
                    <li v-if="user" class="">
                        <NuxtLink to="/dashboard"
                            class="text-sm inline-block rounded-lg cursor-pointer py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                            @click="closeNav">Dashboard</NuxtLink>
                    </li>
                    <li v-if="user" class="border-t border-slate-300 pt-6">
                        <NuxtLink to=""
                            class="text-sm inline-block rounded-lg cursor-pointer py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                            @click.prevent="logout">
                            Logout</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
const user = useSupabaseUser();
const showMobileNavbar = useShowMobileNavbar();
function closeNav() {
    showMobileNavbar.value = false;
}
function logout() {
    useLogout();
    showMobileNavbar.value = false;
}
</script>
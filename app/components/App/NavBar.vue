<template>
    <header class="py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav class="relative z-50 flex justify-between">
                <div class="flex flex-row justify-center items-center md:gap-x-12">
                    <NuxtLink to="/" class="flex items-center">
                        <img class="h-8 w-auto sm:h-10" src="@/assets/images/favicon.ico" alt="Sampyl" />
                        <p class="text-lg font-bold">
                            <span class="ml-2 text-slate-900">Sam</span>
                            <span class="text-sky-500">pyl</span>
                        </p>
                    </NuxtLink>
                    <ul class="flex flex-row">
                        <li v-if="user">
                            <NuxtLink to="/dashboard"
                                class="text-sm hidden md:inline-block rounded-lg py-1 px-2 text-slate-700 cursor-pointer hover:bg-slate-100 hover:text-slate-900">
                                Dashboard</NuxtLink>
                        </li>
                    </ul>
                </div>
                <ul class="flex items-center gap-x-5 md:gap-x-8">
                    <li v-if="!user">
                        <NuxtLink to="/auth/login"
                            class="text-sm hidden md:inline-block rounded-lg py-1 px-2 text-slate-700 cursor-pointer hover:bg-slate-100 hover:text-slate-900">
                            Sign in</NuxtLink>
                    </li>
                    <li v-if="user">
                        <NuxtLink to=""
                            class="text-sm hidden md:inline-block rounded-lg py-1 px-2 text-slate-700 cursor-pointer hover:bg-slate-100 hover:text-slate-900"
                            @click.prevent="logout">
                            Logout</NuxtLink>
                    </li>
                    <li v-if="!user">
                        <UIButtonPrimary @click="navigateTo('/auth/register')">
                            Get started today</UIButtonPrimary>
                    </li>
                    <li>
                        <div class="relative flex items-center cursor-pointer md:hidden">
                            <div v-if="!showMobileNavbar">
                                <span class="material-icons-round text-slate-700 text-3xl md:hidden"
                                    @click="toggleMobileNavbar">
                                    menu
                                </span>
                            </div>
                            <div v-else>
                                <span class="material-icons-round text-slate-700 text-3xl md:hidden z-10"
                                    @click="toggleMobileNavbar">
                                    close
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
const user = useSupabaseUser();
const showMobileNavbar = useShowMobileNavbar();

const toggleMobileNavbar = () => {
    showMobileNavbar.value = !showMobileNavbar.value;
};

function logout() {
    useLogout();
};
</script>
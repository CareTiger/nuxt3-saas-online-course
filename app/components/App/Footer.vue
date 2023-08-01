<template>
    <footer class="bg-slate-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="py-16">
            <NuxtLink to="/" class="flex items-center justify-center">
                <img class="h-8 w-auto sm:h-10" src="@/assets/images/favicon.ico" alt="Sampyl" />
                <p class="text-4xl font-bold">
                    <span class="ml-2 text-slate-900">Sam</span>
                    <span class="text-sky-500">pyl</span>
                </p>
            </NuxtLink>
            <nav class="mt-16 grid grid-cols-2 gap-8">
                <div class="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <h3 class="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
                        <ul role="list" class="mt-6 space-y-4">
                            <li>
                                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Courses</a>
                            </li>

                        </ul>
                    </div>
                    <div class="mt-10 md:mt-0">
                        <h3 class="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                        <ul role="list" class="mt-6 space-y-4">

                            <li>
                                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Guides</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                        <ul role="list" class="mt-6 space-y-4">
                            <li>
                                <a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
                            </li>

                            <li>
                                <NuxtLink to="/blog" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog
                                </NuxtLink>
                            </li>

                            <li>
                                <NuxtLink href="/site/faq" class="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                    FAQ</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-10 md:mt-0">
                        <h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                        <ul role="list" class="mt-6 space-y-4">
                            <li>
                                <NuxtLink to="/site/policy/cookie"
                                    class="text-sm leading-6 text-gray-600 hover:text-gray-900">Cookie
                                    policy</NuxtLink>
                            </li>

                            <li>
                                <NuxtLink to="/site/policy/privacy"
                                    class="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</NuxtLink>
                            </li>

                            <li>
                                <NuxtLink to="/site/policy/terms"
                                    class="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div
            class="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
            <div class="flex gap-x-6">
                <SVGTwitter />
                <SVGGithub />
                <SVGDiscord />
            </div>
            <p class="mt-6 text-sm text-slate-500 sm:mt-0">Copyright © 2023 Sampyl. All rights reserved.</p>
        </div>
    </footer>
</template>
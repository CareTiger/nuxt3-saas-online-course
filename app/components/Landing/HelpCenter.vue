<template>
    <section id="help-center">
        <!-- Hero card -->
        <div class="flex flex-col md:grid md:grid-cols-2">
            <div class="md:col-span-1">
                <img class="h-96 md:h-[36rem] w-full object-cover"
                    src="https://images.unsplash.com/photo-1581091870598-36ce9bad5c77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="" />
            </div>
            <div class="mt-4 px-4 sm:px-6 lg:px-8 md:px-10 md:m-0 md:col-span-1 md:grid md:place-content-center">
                <div class="h-full">
                    <h2 class="text-base font-semibold text-slate-600">
                        Support when you need it
                    </h2>
                    <p class="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                        We’re here to help
                    </p>
                    <p class="mt-3 text-lg text-slate-600">
                        Our help center is here to answer your questions and
                        provide you with the information you need to get the
                        most out of our platform.
                    </p>
                    <div class="mt-8">
                        <div class="inline-flex rounded-md">
                            <UIButtonSecondary @click="navigateTo('/site/faq')">
                                <span>Visit the help center</span>
                                <span class="ml-2 material-icons-round">
                                    exit_to_app
                                </span>
                            </UIButtonSecondary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
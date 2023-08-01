<template>
    <section class="w-full py-4 px-4 sm:px-6 lg:px-8 sm:max-w-xs">
        <p class="text-center text-xs lg:text-base text-red-500 mb-10" v-if="isError">
            {{ errorMessage }}
        </p>
        <div class="flex flex-col gap-5">
            <h2 class="text-slate-900 text-4xl mb-6 text-center">
                Login
            </h2>
            <FormKit ref="myForm" type="form" id="login" :actions="false" :value="{ password: '', email: '' }"
                @submit="login" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                message-class="text-xs ml-4 text-red-500">
                <div class="col-span-2">
                    <FormKit type="email" name="email" label="Email" validation="required|email" />
                </div>
                <div class="col-span-2 mt-4">
                    <FormKit type="password" name="password" label="Password" validation="required" />
                </div>
                <div class="col-span-2 mt-8">
                    <FormKit type="submit" label="Log in" />
                </div>
            </FormKit>
            <!--Email/pwd-->

            <!--provide auth-->
            <div
                class="w-full flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 items-center justify-center my-3 pt-8 pb-1 border-t border-slate-300">
                <UIButtonWhite class="w-full" @click="provider('facebook')">
                    <span>
                        <SVGFacebook />
                    </span>
                    <span class="ml-2 text-sm">Facebook</span>
                </UIButtonWhite>
                <UIButtonWhite class="w-full" @click="provider('google')">
                    <span>
                        <SVGGoogle />
                    </span>
                    <span class="ml-2 text-sm">Google</span>
                </UIButtonWhite>
            </div>

            <!--Forgot-->
            <nuxt-link to="/auth/forgot"
                class="text-sm pt-5 text-center text-slate-500 border-t border-slate-300 hover:text-sky-500">
                <span>Forgot your password?</span>
            </nuxt-link>

            <!--navigate to signup -->
            <div class="pt-5 border-t border-slate-300 text-sm text-center">
                <nuxt-link to="/auth/register" class="text-slate-500 hover:text-sky-500">
                    <span>Not on our platform? Sign up</span>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>
<script setup>
const myForm = ref(null);
const isError = ref(false);
const errorMessage = ref('');
const isLoading = useShowSpinner();

//login using provider
const provider = async (providerName) => {
    isLoading.value = true;
    const credentials = await useProviderLogin(providerName);
    console.log('login provider ->', credentials.data?.user);
    if (credentials.error) {
        isError.value = true;
        errorMessage.value = credentials.error.message;
        isLoading.value = false;
    } else {
        setTimeout(() => {
            isLoading.value = false;
            navigateTo('/dashboard');
        }, "2000")
        // isLoading.value = false;
        // navigateTo('/dashboard');
    }    
};

//login using email and password
const login = async (formData) => {
    isLoading.value = true;
    const credentials = await useLogin(formData);
    console.log('login ->', credentials);

    if (credentials.error) {
        isError.value = true;
        errorMessage.value = credentials.error.message;
        isLoading.value = false;
    } else {
        setTimeout(() => {
            isLoading.value = false;
            navigateTo('/dashboard');
        }, "2000")     
        // isLoading.value = false;
        // navigateTo('/dashboard');
    }
};
</script>
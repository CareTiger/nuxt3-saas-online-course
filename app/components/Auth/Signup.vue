<template>
    <section class="w-full py-4 px-4 sm:px-6 lg:px-8 sm:max-w-xs">
        <p class="text-center text-red-500 mb-10" v-if="isError">
            {{ errorMessage }}
        </p>
        <div class="text-slate-600 p-10 mx-auto w-full" v-if="isSuccess">
            <p class="text-2xl text-start mb-10">Thanks for signing up.</p>
            <p>
                Your confirmation email is on its way. In case you don't find it in
                your Inbox please check your
                <b>Promotions or Spam</b> folders.
            </p>
            <p class="mt-4">
                Open the email and click on the
                <b>"Confirm sign up"</b> button to get started on sampyl.com.
            </p>
        </div>
        <div class="flex flex-col gap-5" v-else>
            <h2 class="text-slate-900 text-4xl mb-6 text-center">
                Sign up
            </h2>

            <!-- Email signup -->
            <FormKit ref="myForm" type="form" id="login" :actions="false" @submit="signUp"
                class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                message-class="text-xs ml-4 text-red-500">
                <div class="col-span-2">
                    <FormKit type="email" name="email" label="Email" validation="required|email" />
                </div>
                <div class="col-span-2 mt-4">
                    <FormKit type="password" name="password" label="Password" validation="required" />
                </div>
                <div class="col-span-2 mt-8">
                    <FormKit type="submit" label="Continue" />
                </div>
            </FormKit>

            <!-- provider auth -->
            <p class="text-xs text-center text-slate-500">
                By continuing you agree to our
                <nuxt-link class="text-sky-500" to="/site/policy/terms">Terms of Service</nuxt-link>
                &
                <nuxt-link class="text-sky-500" to="/site/policy/privacy">Privacy Policy</nuxt-link>
                &
                <nuxt-link class="text-sky-500" to="/site/policy/community">Community Guidelines</nuxt-link>
            </p>
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

            <!-- goto login -->
            <div class="w-full pt-5 border-t border-slate-300 text-sm text-center">
                <nuxt-link to="/auth/login" class="text-slate-500">
                    <span> Have an account? Log in instead </span>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>
<script setup>
const myForm = ref(null);
const isError = ref(false);
const errorMessage = ref('');
const isSuccess = ref(false);
const client = useSupabaseClient();
const isLoading = useShowSpinner();

//signup using provider
const provider = async (providerName) => {
    isLoading.value = true;
    const credentials = await useProviderLogin(providerName);
    if (credentials.error) {
        isError.value = true;
        errorMessage.value = credentials.error.message;
        isLoading.value = false;
    } else {
        setTimeout(() => {
            isLoading.value = false;
            router.push('/dashboard');
        }, "3000")
    }    
};

const signUp = async (formData) => {
    isLoading.value = true;
    const credentials = await useRegister(formData);
    if (credentials.error) {
        isError.value = true;
        errorMessage.value = credentials.error.message;
        isLoading.value = false;
    } else {
        isSuccess.value = true;
        isLoading.value = false;
    }
};
</script>
<template>
    <div>
        <p class="text-center text-red-500 mb-10" v-if="isError">
            {{ errorMessage }}
        </p>
        <div v-if="isSuccess">
            {{ successMessage }}
        </div>
        <div class="flex flex-col space-y-5" v-else>
            <h2 class="text-slate-900 text-4xl mb-6 text-center">
                Forgot Password
            </h2>

            <FormKit ref="myForm" type="form" id="forgot" :actions="false" :value="{ email: '' }" @submit="forgot"
                class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                message-class="text-xs ml-4 text-red-500">
                <div class="col-span-2">
                    <FormKit type="email" name="email" label="Email" placeholder="Please enter your email address"
                        validation="required|email" />
                </div>
                <div class="col-span-2 mt-8">
                    <FormKit type="submit" label="Send Reset Link" />
                </div>
            </FormKit>
            <!-- goto login -->
            <div class="w-full pt-5 border-t border-slate-400 text-sm text-center">
                <nuxt-link to="/auth/login" class="text-slate-400">
                    <span> Go back to Log in</span>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const myForm = ref(null);
const isError = ref(false);
const errorMessage = ref('');
const isLoading = ref(false);
const isSuccess = ref(false);
const successMessage = ref('');

const forgot = async (formData) => {
    //reset the error status
    isError.value = false;
    isLoading.value = true;
    const credentials = await useForgotPassword(formData);
    
    if (credentials.error) {
        isLoading.value = false;
        isError.value = true;
        errorMessage.value = data.error.message;
    } else {
        isLoading.value = false;
        isSuccess.value = true;
        successMessage.value = 'Your password reset link has been sent!';
    }
};
</script>
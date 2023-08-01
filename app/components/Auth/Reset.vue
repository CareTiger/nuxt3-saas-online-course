<template>
    <div>
        <p class="text-center text-red-500 mb-10" v-if="isError">
            {{ errorMessage }}
        </p>
        <p class="text-center text-sky-500 mb-10" v-if="isSuccess">
            {{ successMessage }}
        </p>
        <div class="flex flex-col gap-5">
            <h2 class="text-slate-900 text-4xl mb-6 text-center">
                Reset Password
            </h2>
            <FormKit type="form" id="reset" :actions="false" :value="{ password: '', password_confirm: '' }"
                @submit="reset" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                message-class="text-xs ml-4 text-red-500">
                <div class="col-span-2">
                    <FormKit type="group">
                        <FormKit type="password" name="password" label="Password" help="Enter a new password"
                            validation="required" />
                        <FormKit type="password" name="password_confirm" label="Confirm password"
                            help="Confirm your new password" validation="required|confirm"
                            validation-label="Password confirmation" />
                    </FormKit>
                </div>
                <div class="col-span-2 mt-8">
                    <FormKit type="submit" label="Reset Password" />
                </div>
            </FormKit>
        </div>
    </div>
</template>
<script setup>
const isError = ref(false);
const errorMessage = ref('');
const isSuccess = ref(false);
const successMessage = ref('');
const isLoading = ref(false);

const reset = async (formData) => {
    isLoading.value = true;

    const credentials = await useResetPassword(formData);
    console.log(credentials)

    if (credentials.error) {
        isError.value = true;
        errorMessage.value = credentials.error.message;
    } else {
        isSuccess.value = true;
        successMessage.value = 'Your password has been reset!';
    }
    isLoading.value = false;
};
</script>
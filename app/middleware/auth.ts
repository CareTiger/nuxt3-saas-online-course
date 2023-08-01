export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser();
    // console.log("middleware auth user", user.value);

    if (!user.value) {
        return navigateTo("/auth/login");
    }
});

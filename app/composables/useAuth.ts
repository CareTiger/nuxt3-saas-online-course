export const useLogin = async (formData) => {
    const client = useSupabaseAuthClient();
    const { data, error } = await client.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
    });
    return { data, error };
};

export const useLogout = async () => {
    const client = useSupabaseAuthClient();
    const { error } = await client.auth.signOut();
    if (error) {
        console.error(error);
        return;
    } else {
        return navigateTo("/auth/login");
    }
};

export const useProviderLogin = async (provider) => {
    const client = useSupabaseAuthClient();
    const { data, error } = await client.auth.signInWithOAuth({
        provider,
    });
    return { data, error };
};

export const useRegister = async (formData) => {
    const client = useSupabaseAuthClient();
    const { data, error } = await client.auth.signUp({
        email: formData.email,
        password: formData.password,
    });
    return { data, error };
};

export const useForgotPassword = async (formData) => {
    const client = useSupabaseAuthClient();
    const { data, error } = await client.auth.resetPasswordForEmail(
        formData.email,
        {
            redirectTo: "https://www.sampyl.com/auth/reset",
            // redirectTo: "http://localhost:3000/auth/reset",
        }
    );
    return { data, error };
};

export const useResetPassword = async (formData) => {
    const client = useSupabaseAuthClient();
    const { data, error } = await client.auth.updateUser({
        password: formData.password,
    });
    return { data, error };
};

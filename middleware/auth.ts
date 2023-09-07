import {defineNuxtRouteMiddleware, navigateTo, useDirectusAuth, useDirectusUser} from "#imports";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const { fetchUser, setUser } = useDirectusAuth();
    const user = useDirectusUser();

    if (!user.value) {
        const user = await fetchUser();
        setUser(user.value);
    }
    if (!user.value) {
        return navigateTo("/sign_in");
    }
})
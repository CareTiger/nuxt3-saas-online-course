export const useShowMobileNavbar = () =>
    useState("showMobileNavbar", () => false);
export const useShowSpinner = () => useState("showAppSinner", () => false);
export const useProgress = () =>
    useLocalStorage("progress", () => {
        return [];
    });

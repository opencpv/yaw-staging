export const useHashChangeScroll = () => {
    window.addEventListener("hashchange", () => {
        window.scrollTo(window.scrollX, window.scrollY - 200);
    });
}
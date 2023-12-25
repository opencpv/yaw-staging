const hashChangeScroll = () => {
    window.addEventListener("hashchange", () => {
        window.scrollTo(window.scrollX, window.scrollY - 200);
    });
}

export default hashChangeScroll
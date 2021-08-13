function openMenu(elemId) {
    var e = document.getElementById(elemId);

    document.querySelectorAll(".context-menu").forEach(cm => {
        if (cm.id !== e.id)
            cm.classList.remove("show")
    });

    if (e.className.search("show") >= 0) {
        e.classList.remove("show");
    } else {
        e.classList.add("show");
    }
}

document.addEventListener("mousedown", (ev) => {
    document.querySelectorAll(".context-menu").forEach(cm => {
        if (!ev.path.find((elem) => elem.id === cm.id)) cm.classList.remove("show");
    });
});
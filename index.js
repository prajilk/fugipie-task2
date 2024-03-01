document.getElementById("open-menu").addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("sidebar");
    sidebar.classList.add("sidebar__open");
})

document.getElementById("close-menu").addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.add("sidebar");
    sidebar.classList.remove("sidebar__open");
})
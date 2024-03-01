const TESTIMONIALS = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor architecto dolores fugiat, deleniti debitis, nisi consequatur impedit cum inventore optio commodi esse consequuntur corrupti, ab asperiores natus. Aperiam, incidunt!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam commodi est tempora harum nulla, rem quasi! Delectus nisi doloremque tempora et! Nostrum rerum beatae error illo suscipit veritatis tempora?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus, aut quaerat deleniti veniam atque. Vel, a molestias? Provident nesciunt placeat dicta culpa ex esse, fugit praesentium quis inventore facilis?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquam amet dignissimos debitis illo laborum, cumque pariatur suscipit voluptas sint incidunt eum, accusantium corrupti omnis nobis neque placeat eius vero.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quae placeat autem atque fuga accusantium dolorem repudiandae expedita laborum molestiae, repellendus obcaecati sit sapiente adipisci cupiditate eius iste. Libero, adipisci?"
]

const NAMES = [
    "Bruce Truong",
    "Milani Schultz",
    "Alex Mathew",
    "Louie Quintero",
    "Marco Wyatt"
]

// Slider Function
function slide(id) {
    let slide_size;
    if (window.innerWidth < 450) {
        slide_size = 7.5;
    } else if (window.innerWidth > 450 && window.innerWidth < 800) {
        slide_size = 10;
    } else {
        slide_size = 15.5;
    }
    const defaultId = 3;

    const slider = document.getElementById("slider");
    if (id > 3) {
        slider.style = `transform: translateX(-${slide_size * (id - defaultId)}rem)`;
    } else {
        slider.style = `transform: translateX(${slide_size * (-1 * (id - defaultId))}rem)`;
    }

    document.querySelectorAll(".slide").forEach((item) => item.classList.remove("active"))
    document.getElementById(`slide${id}`).classList.add("active");
    document.getElementById("testimonial").innerHTML = TESTIMONIALS[id - 1];
    document.getElementsByClassName("active")[0].setAttribute('data-content', NAMES[id - 1]);
}
document.getElementsByClassName("active")[0].setAttribute('data-content', NAMES[2]);


// Open Side Navbar
document.getElementById("open-menu").addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("sidebar");
    sidebar.classList.add("sidebar__open");
})

// Close Side Navbar
document.getElementById("close-menu").addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.add("sidebar");
    sidebar.classList.remove("sidebar__open");
})
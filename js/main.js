const openMenu = () => {
    if (document.getElementById('header_search').classList.contains('showBlock')) {
        document.getElementById('header_search').classList.remove('showBlock');
        const btnSearch = document.getElementById('search-btn');
        btnSearch.querySelector('.fa-search').classList.remove('hidden');
        btnSearch.querySelector('.fa-xmark').classList.remove('show');
    }
    const subMenuBtn = document.getElementById("submenu-btn");
    subMenuBtn.querySelector('.fa-angle-down').classList.toggle("hidden");
    subMenuBtn.querySelector('.fa-angle-up').classList.toggle("show");
    document.getElementById("header-menu").classList.toggle("header_sub-menu");
    document.getElementById("body_contain").classList.toggle("hidden");
    document.getElementById("logo").classList.toggle("hidden");
    document.getElementById("logo-white").classList.toggle("show");
    console.log(123)
}

const openSearch = () => {
    if ( document.getElementById("header-menu").classList.contains('header_sub-menu')){
        document.getElementById("header-menu").classList.remove('header_sub-menu');
        const subMenuBtn = document.getElementById("submenu-btn");
        subMenuBtn.querySelector('.fa-angle-down').classList.remove("hidden");
        subMenuBtn.querySelector('.fa-angle-up').classList.remove("show");
        document.getElementById("body_contain").classList.remove("hidden");
        document.getElementById("logo").classList.remove("hidden");
    document.getElementById("logo-white").classList.remove("show");
    }
    document.getElementById('header_search').classList.toggle('showBlock');
    const btnSearch = document.getElementById('search-btn');
    btnSearch.querySelector('.fa-search').classList.toggle('hidden');
    btnSearch.querySelector('.fa-xmark').classList.toggle('show');
}


let prevButton = '';
const menu = document.getElementById("sub-menu-parent");
menu.addEventListener('click', (e) => {
    document.getElementById(e.target.id).classList.add("active");
    document.getElementById(e.target.id.slice(0, e.target.id.length - 1)).classList.add("show");
    if (prevButton !== '' && prevButton !== e.target.id) {
        document.getElementById(prevButton).classList.remove("active");
        document.getElementById(prevButton.slice(0, prevButton.length - 1)).classList.remove("show");
    }
    prevButton = e.target.id
})

let prevButtonMobile = '';
const menuMobile = document.getElementById("sub-menu-parent-mobile");
menuMobile.addEventListener('click', (e) => {
console.log(123)
    document.getElementById(e.target.id).classList.add("active");
    document.getElementById(e.target.id.slice(0, e.target.id.length - 1) + "M").classList.add("show");
    
    if (prevButton !== '' && prevButton !== e.target.id) {
        document.getElementById(prevButton).classList.remove("active");
        document.getElementById(prevButton.slice(0, prevButton.length - 1)+ "M").classList.remove("show");
    }
    prevButton = e.target.id
})
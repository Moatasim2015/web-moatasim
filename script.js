let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


$('.gallery .btn').click(function(){

    let filter = $(this).attr('data-filter');
    if(filter == 'all'){
        $('.gallery .box').show(400);
    }else{
        $('.gallery .box').not('.'+filter).hide(200);
        $('.gallery .box').filter('.'+filter).show(400);
    }

});


// ------------------------- up ------------------------

let span = document.querySelector(".up");

window.onscroll = function () {
this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};
span.onclick = function () {
    window.scrollTo({
        top: 0 ,
        behavior: "smooth",
    });
};

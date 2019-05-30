window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    var me = this;
    var navImage=document.getElementById("nav-image");

    if ($("#header").length) {
        var headerH = $("#header").height();

        if (document.body.scrollTop > headerH || document.documentElement.scrollTop > headerH) {
            if(!navImage.classList.contains("anim-big")){
                navImage.classList.add("anim-big")
            }
            navImage.classList.replace("anim-big","anim-small");
            document.getElementById("text-header").style.position = "static";
        } else {
            navImage.classList.replace("anim-small","anim-big");
            document.getElementById("text-header").style.position = "fixed";
        }
    } else {
        navImage.classList.add("anim-small");
    }
}

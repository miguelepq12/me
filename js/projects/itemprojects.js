


function openCloseGallery($id) {
    var btn=document.getElementById("btn-gallery-"+$id);

    if (!btn.classList.contains("select")) {
        btn.innerHTML="Cerrar Galería";
        btn.classList.add("select");

        document.getElementById("p-gallery-" + $id).classList.remove("hide");
        $("#p-gallery-" + $id).find("img").animate({
            height: "100vh"
        }, 1000);
        $('html, body').animate({
            scrollTop: $("#p-gallery-" + $id).offset().top - $("#navbar").height()
        }, 1000);
    } else {
        btn.innerHTML="Galería";
        btn.classList.remove("select");

        $("#p-gallery-" + $id).find("img").animate({
            height: "0vh"
        }, 1000, function(){
            document.getElementById("p-gallery-" + $id).classList.add("hide");
        });
    }
}
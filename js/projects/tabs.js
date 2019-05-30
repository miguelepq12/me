
function changeTab($position){
    var movement=$position*-100;

    $(".list").animate({
        left: movement + "%",
    }, 1000);

    var countTab=document.getElementsByClassName("tab").length;
    for (let i = 0; i < countTab; i++) {
        document.getElementById("tab-"+i).classList.remove("active")
    }

    document.getElementById("tab-"+$position).classList.add("active");

}
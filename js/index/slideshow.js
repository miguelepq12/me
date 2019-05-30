
  var projectItems=[
    {img:"img/projects-logo/germany-logo.png",
    name:"Reportes Germany",
    resume:"Aplicación Android para asistir a los visitadores medicos de la empresa." 
    +" En la misma se puede guardar los datos de los medicos y las instituciones. Aparte de permitir hacer un seguimiento a los presupuestos. Esta aplicación hace uso de Gmail para comunicarse con la oficina.",
    data:"Germany Medical, 2016",
    color:"#00567e"},
    {img:"img/projects-logo/myt-cover.png",
    name:"MYT Construcciones",
    resume:"Pagina web informativa para visualizar los servicios que ofrece esta empresa de construcción. Se llevó a cabo con un diseño \"one page\", lo cuál le proporciona sencillez y elegancia.",
    data:"MYT Construcciones, 2018",
    color:"#009625"}
];

function changeItem($id){

    var box=document.getElementById("box");

    $( ".content" ).animate({
        top: "-100%"
      }, 500,function(){
          fillData($id);
          $( ".content" ).animate({
            top: "0%"
          }, 500);
      });

    for (let i = 0; i < projectItems.length; i++) {
        document.getElementById("p-item-"+i).className="project-item";
        document.getElementById("p-item-"+i).style="";
    }

    document.getElementById("p-item-"+$id).className="project-item-selected";
    document.getElementById("p-item-"+$id).style.color=projectItems[$id]["color"];
    document.getElementById("p-item-"+$id).style.borderRight="4px solid "+projectItems[$id]["color"];
}

function fillData($id){
    var urlString = 'url(' + projectItems[$id]["img"] + ')';
    document.getElementById("project-content-img").style.background=urlString;
    document.getElementById("project-content-img").style.backgroundSize="cover";
    document.getElementById("project-content-img").style.backgroundPosition="center";

    document.getElementById("project-content-title").textContent=projectItems[$id]["name"];
    document.getElementById("project-content-text").textContent=projectItems[$id]["resume"];
    document.getElementById("project-content-data").textContent=projectItems[$id]["data"];
}
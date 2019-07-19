var aboutmeItems = [
    [{
        img: "img/cover_aboutme.jpg",
        name: "Sobre mi",
        description: "Estudiante de ingeniería en informática. Apasionado desarrollador desde joven. Experiencia principalmente en Java y Android nativo. Conocedor practico de lenguajes como C#, PHP y JS. Actualmente desarrollador web con el framework Spring. Conocimientos sólidos en diseño y creación de base de datos, metodologías de desarrollo ágil, patrones de diseño y diseño de algoritmos."
    },
    {
        img: "img/cover_coffee.jpg",
        name: "Intereses y Actitudes",
        description: "Lector asiduo de diferentes tipos de literatura desde divulgación cientifica e informatica hasta novelas. La inteligencia artificial y la realidad virtual son los campos que más me interesan en la informatica, en los cuales desearía desenvolverme en un futuro. <br/> Me considero una persona responsable, comprometida, quien busca siempre crecer como profesional y persona."
    }],
    [{
        img: "img/cover_urbe.jpg",
        name: "Ingeniería informatica, Universidad Rafael Belloso Chacín (URBE) Venezuela",
        description: "Ingeniero en Informatica a la espera de titulo. Carrera en la cual obtuve diferentes conocimientos como matematicas, logica, programación, sistemas operativos, compiladores, inteligencia artificial, ingeniería del software y seguridad."
    },
    {
        img: "img/cover_cedic.jpg",
        name: "Curso de ingles, CEDIC",
        description: "Curso de un año y medio de duración en el 2016."
    },
    {
        img: "img/logo_activate.jpg",
        name: "Curso onlines sobre desarrollo movil, Activate",
        description: "Curso online promocionado por Google y la Universidad Complutense de Madrid. El cuál instruye sobre el desarrollo movil y todo lo relacionado con este campo como la publicación, monetización y mejoramiento de una app."
    }],
    [{
        img: "img/projects-logo/germany-logo.png",
        name: "Germany Medical",
        description: "Como primera experiencia laboral en el campo de la informática (desde el año 2015 al 2016) participé en una empresa de venta de aparatos médicos creando un sistema de inventario en Java, usando MySQL como base de datos. Luego para la misma empresa desarrollé una aplicación Android de Reportes para visitadores médicos la cuál guarda los reportes y los envía por correo a la oficina."
    },
    {
        img: "img/bg_header.jpg",
        name: "Freelancer",
        description: "Como desarrollador de software autónomo (desde el año 2016 a la actualidad) he participado en proyectos freelance como el inicio de la creación de una red social para Android, aplicaciones como sistemas de expedientes, sistema de reservas y programas de gestión de clientes, mayormente hechos en Java con bases de datos SQL. Actualmente trabajo con Android, Java EE y lenguajes web usando como framework Spring. En proyectos personales he trabajado con C#, Php, Html, Css y JavaScript."
    }]
];

var countMov = 0;
var wrapped = false;

function fillData(row) {
    var boxContent = document.getElementById("box-content");
    boxContent.innerHTML = "";

    for (let i = 0; i < aboutmeItems[row].length; i++) {
        var boxContentItem = document.createElement("div");
        boxContentItem.classList.add("box-content-item");
        var boxContentItemImg = document.createElement("div");
        boxContentItemImg.classList.add("img");
        var boxContentItemText = document.createElement("div");
        boxContentItemText.classList.add("text");
        var boxContentItemTextH4 = document.createElement("h4");
        var boxContentItemTextP = document.createElement("p");

        boxContentItemTextH4.innerText = aboutmeItems[row][i]["name"];
        boxContentItemTextP.innerHTML = aboutmeItems[row][i]["description"];
        boxContentItemText.appendChild(boxContentItemTextH4);
        boxContentItemText.appendChild(boxContentItemTextP);

        var urlString = 'url(' + aboutmeItems[row][i]["img"] + ')';
        boxContentItemImg.style.background = urlString;
        boxContentItemImg.style.backgroundSize = "cover";
        boxContentItemImg.style.backgroundRepeat="not-repeat";
        boxContentItemImg.style.backgroundPosition="center";

        boxContentItem.appendChild(boxContentItemImg);
        boxContentItem.appendChild(boxContentItemText);

        boxContent.appendChild(boxContentItem)
    }
}
function clickRight() {
    var countElement = document.getElementsByClassName("box-content-item").length;
    var limitMov = (countElement - 1) * 100;

    if (countMov < limitMov) {
        countMov = countMov + 100;

        $(".box-content-item").animate({
            left: -countMov + "%",
        }, 1000);
    }
}

function clickLeft() {

    if (countMov > 0) {
        countMov = countMov - 100;

        $(".box-content-item").animate({
            left: -countMov + "%",
        }, 1000);
    }

}

function clickItem($row) {

    if (isScreenMd()) {
        if (wrapped) {
            unwrapButtons($row);
        } else {
            selectItem($row);
            wrapButtons($row);
        }
    } else {
        selectItem($row);
    }
}

function selectItem($row) {
    countMov=0;
    animateBox();
    fillData($row);

    var items = document.getElementsByClassName("sidenav-item");

    for (let i = 0; i < items.length; i++) {
        items[i].className = "sidenav-item";
    }

    document.getElementById("sidenav-item-" + $row).className = "sidenav-item select";
}
function animateBox() {
    var boxContent = document.getElementById("box-content");

    boxContent.classList.remove("move-box");
    void boxContent.offsetWidth;
    boxContent.classList.add("move-box");

}

function wrapButtons($row) {
    var items = document.getElementsByClassName("sidenav-item");

    for (let i = 0; i < items.length; i++) {
        if (i != $row) {
            $("#sidenav-item-" + i).animate({
                padding: "0px",
                maxHeight: "0px"
            }, 500, function () {
                document.getElementById("sidenav-item-" + $row).style = "background:none";
            });
        }
    }



    wrapped = true;
}

function wrapButtonsInitial() {
    if (isScreenMd()) {
        var items = document.getElementsByClassName("sidenav-item");

        for (let i = 0; i < items.length; i++) {
            if (i != 0) {
                var item = document.getElementById("sidenav-item-" + i);
                item.style.padding = "0px";
                item.style.maxHeight = "0px";
            }
        }

        document.getElementById("sidenav-item-0").style = "background:none"
        wrapped = true;
    }
}

function unwrapButtons($row) {
    var items = document.getElementsByClassName("sidenav-item");

    for (let i = 0; i < items.length; i++) {
        if (i != $row) {
            $("#sidenav-item-" + i).animate({
                padding: "10px 0px",
                maxHeight: $("#sidenav-item-" + $row).get(0).scrollHeight
            }, 500);
        }
    }

    document.getElementById("sidenav-item-" + $row).style.removeProperty("background");
    wrapped = false;
}

function isScreenMd() {
    console.log($(window).width());
    return $(window).width() < 767.98;
}

function adjustSideNav() {
    document.getElementById("sidenav").classList.add("adjust-sidenav");
}

function adjustSideNav() {
    document.getElementById("content").classList.add("adjust-content");
}
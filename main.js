function main() {
    alert("Хочу попасть к вам в команду, с уважением Никита");
    function spranimate() {  
    document.querySelector(".sopernik_1").style.marginLeft = "0px";
    document.querySelector(".sopernik_2").style.marginRight = "0px";
    }
    spranimate()
    var mass = ["<div class='location'>Стадион</div><div class='date'>30 мая</div><div class='time'>17:00</div><button class='buy'>Купить билет</button><div class='sopernik-1'>Соперник 5</div><div class='sopernik-2'>Соперник 6</div>", 
                "<div class='location'>Стадион</div><div class='date'>17 июня</div><div class='time'>18:00</div><button class='buy'>Купить билет</button><div class='sopernik-1'>Соперник 3</div><div class='sopernik-2'>Соперник 4</div>", 
                "<div class='location'>Стадион</div><div class='date'>26 июня</div><div class='time'>19:00</div><button class='buy'>Купить билет</button><div class='sopernik-1'>Соперник 1</div><div class='sopernik-2'>Соперник 2</div>", 
                "<div class='location'>Стадион</div><div class='date'>16 июля</div><div class='time'>15:00</div><button class='buy'>Купить билет</button><div class='sopernik-1'>Соперник 7</div><div class='sopernik-2'>Соперник 8</div>",
                "<div class='location'>Стадион</div><div class='date'>30 сентября</div><div class='time'>16:00</div><button class='buy'>Купить билет</button><div class='sopernik-1'>Соперник 9</div><div class='sopernik-2'>Соперник 10</div>"];
    var el = document.querySelectorAll(".hexagon");
    var z = 0;
    for (i of el) {
        i.innerHTML += mass[z];
        z++; 
        i.addEventListener('click', e => {
            document.querySelector(".sopernik_1").style.marginLeft = "-100vw"; 
            document.querySelector(".sopernik_2").style.marginRight = "-100vw";    
                document.querySelector(".sopernik_1 text").innerHTML = e.currentTarget.querySelector(".sopernik-1").innerHTML;
                document.querySelector(".sopernik_2 text").innerHTML = e.currentTarget.querySelector(".sopernik-2").innerHTML;
                setTimeout(function(){
                    spranimate();
                },650);
            var clicked = e.currentTarget.getAttribute("data-order");
            document.querySelector(".hexagon[data-order='2']").setAttribute("data-order", clicked);
                e.currentTarget.setAttribute("data-order", 2);
        }) 
    }

    window.onwheel = e =>  {
        document.querySelector(".sopernik_1").style.marginLeft = "-100vw"; 
        document.querySelector(".sopernik_2").style.marginRight = "-100vw";    
            document.querySelector(".sopernik_1 text").innerHTML = document.querySelector(".hexagon[data-order='1'] .sopernik-1").innerHTML;
            document.querySelector(".sopernik_2 text").innerHTML = document.querySelector(".hexagon[data-order='1'] .sopernik-2").innerHTML;
            setTimeout(function(){
                spranimate();
            },650);

            for (slide of el) {
            var order = slide.getAttribute("data-order");
    if(e.deltaY >= 0){
        order++;
        
        slide.setAttribute("data-order", order);
                if (order >= 5) {
                order = 0;
                slide.setAttribute("data-order", order);
                }
        }else {
            order--;
            slide.setAttribute("data-order", order);
            if (order < 0) {
                order = 4;
                slide.setAttribute("data-order", order);
            } 
        }    
    };
    }
    }
    document.addEventListener("DOMContentLoaded", main);
const title1= document.querySelector("#title1")
const texto1 = document.querySelector("#text1")
const title2= document.querySelector("#title2")
const texto2 = document.querySelector("#text2")
const area1 = document.querySelector("#medit")
const area2 = document.querySelector("#subsa")

area1.addEventListener("mouseover", function() {
    title1.innerText ="África Mediterrânea";
    texto1.innerText = "Compreende os países localizados no norte do continente africano, próximos ao mar Mediterrâneo";   
})

area1.addEventListener("mouseout", function() {
    title1.innerText ="";
    texto1.innerText = ""; 
})

area2.addEventListener("mouseover", function() {
    title2.innerText ="África Subsaariana";
    texto2.innerText = "Antes chamada África negra, corresponde à parte do continente africano situada ao sul do Deserto do Saara. Chamada de subsaariana por estar ao sul do Saara. É constituída de quarenta e oito Estados, cujas fronteiras resultaram da descolonização";   
})

area2.addEventListener("mouseout", function() {
    title2.innerText ="";
    texto2.innerText = "";
})


// first-carousal

var count = 0;
var inc = 0;
var slider = document.getElementsByClassName("carousal")[0];
var mainEle = document.querySelector(".main-wrapper");
var itemDisplay = document.getElementsByClassName("item-carousal-wrapper")[0].getAttribute("item-display-d");

var mainWidth = getComputedStyle(mainEle).getPropertyValue("max-width");

var item = document.getElementsByClassName("card");

var itemLeft = (item.length - 56) % itemDisplay;
var itemSlide = Math.floor((item.length - 56) / itemDisplay) - 1;

// prev-button
function prev(){
    if (inc !== 0){
        if (inc === itemLeft){
            inc = inc - itemLeft;
            count = count + (Number(mainWidth.substring(0, mainWidth.length-2)) / itemDisplay) * itemLeft;
        }
        else{
            inc--;
            count = count + Number(mainWidth.substring(0, mainWidth.length-2));
        }
    }
    if (inc == 0){
        document.getElementById("left").style.visibility = "hidden";
    }
    slider.style.left = count + "px";
}

// next-button
function next(){

    document.getElementById("left").style.visibility = "visible";

    if (inc !== itemSlide + itemLeft){

        if (inc === itemSlide){
            inc = inc + itemLeft;
            count = count - (Number(mainWidth.substring(0, mainWidth.length-2)) / itemDisplay) * itemLeft;
        }
        else{
            inc++;
            count = count - Number(mainWidth.substring(0, mainWidth.length-2));
        }
    }
    slider.style.left = count + "px";
}

function prevVisible(){
        document.getElementById("left").style.visibility = "visible";
}

// ---------------------------------------------------------------------------------------------------------------

// second-carousal

var count1 = 0;
var inc1 = 0;
var slider1 = document.getElementsByClassName("carousal")[1];
var mainEle1 = document.querySelector(".main-wrapper");
var itemDisplay1 = document.getElementsByClassName("item-carousal-wrapper")[1].getAttribute("item-display-d");

var mainWidth1 = getComputedStyle(mainEle1).getPropertyValue("max-width");

var item1 = document.getElementsByClassName("card");

var itemLeft1 = (item1.length - 56) % itemDisplay1;
var itemSlide1 = Math.floor((item1.length - 56) / itemDisplay1) - 1;

// prev-button
function prevOne(){
    if (inc1 !== 0){
        if (inc1 === itemLeft1){
            inc1 = inc1 - itemLeft1;
            count1 = count1 + (Number(mainWidth1.substring(0, mainWidth1.length-2)) / itemDisplay1) * itemLeft1;
        }
        else{
            inc1--;
            count1 = count1 + Number(mainWidth1.substring(0, mainWidth1.length-2));
        }
    }
    if (inc1 == 0){
        document.getElementById("left-1").style.visibility = "hidden";
    }
    slider1.style.left = count1 + "px";
}

// next-button
function nextOne(){

    document.getElementById("left-1").style.visibility = "visible";

    if (inc1 !== itemSlide1 + itemLeft1){

        if (inc1 === itemSlide1){
            inc1 = inc1 + itemLeft1;
            count1 = count1 - (Number(mainWidth1.substring(0, mainWidth1.length-2)) / itemDisplay1) * itemLeft1;
        }
        else{
            inc1++;
            count1 = count1 - Number(mainWidth1.substring(0, mainWidth1.length-2));
        }
    }
    slider1.style.left = count1 + "px";
}

function prevVisibleOne(){
        document.getElementById("left-1").style.visibility = "visible";
}


// ---------------------------------------------------------------------------------------------------------------

// third-carousal

var count2 = 0;
var inc2 = 0;
var slider2 = document.getElementsByClassName("carousal")[2];
var mainEle2 = document.querySelector(".main-wrapper");
var itemDisplay2 = document.getElementsByClassName("item-carousal-wrapper")[2].getAttribute("item-display-d");

var mainWidth2 = getComputedStyle(mainEle2).getPropertyValue("max-width");

var item2 = document.getElementsByClassName("card");

var itemLeft2 = (item2.length - 56) % itemDisplay2;
var itemSlide2 = Math.floor((item2.length - 56) / itemDisplay2) - 1;

// prev-button
function prevTwo(){
    if (inc2 !== 0){
        if (inc2 === itemLeft2){
            inc2 = inc2 - itemLeft2;
            count2 = count2 + (Number(mainWidth2.substring(0, mainWidth2.length-2)) / itemDisplay2) * itemLeft2;
        }
        else{
            inc2--;
            count2 = count2 + Number(mainWidth2.substring(0, mainWidth2.length-2));
        }
    }
    if (inc2 == 0){
        document.getElementById("left-2").style.visibility = "hidden";
    }
    slider2.style.left = count2 + "px";
}

// next-button
function nextTwo(){

    document.getElementById("left-2").style.visibility = "visible";

    if (inc2 !== itemSlide2 + itemLeft2){

        if (inc2 === itemSlide2){
            inc2 = inc2 + itemLeft2;
            count2 = count2 - (Number(mainWidth2.substring(0, mainWidth2.length-2)) / itemDisplay2) * itemLeft2;
        }
        else{
            inc2++;
            count2 = count2 - Number(mainWidth2.substring(0, mainWidth2.length-2));
        }
    }
    slider2.style.left = count2 + "px";
}

function prevVisibleTwo(){
        document.getElementById("left-2").style.visibility = "visible";
}


// ---------------------------------------------------------------------------------------------------------------

// fourth-carousal

var count3 = 0;
var inc3 = 0;
var slider3 = document.getElementsByClassName("carousal")[3];
var mainEle3 = document.querySelector(".main-wrapper");
var itemDisplay3 = document.getElementsByClassName("item-carousal-wrapper")[3].getAttribute("item-display-d");

var mainWidth3 = getComputedStyle(mainEle3).getPropertyValue("max-width");

var item3 = document.getElementsByClassName("card");

var itemLeft3 = (item3.length - 56) % itemDisplay3;
var itemSlide3 = Math.floor((item3.length - 56) / itemDisplay3) - 1;

// prev-button
function prevThree(){
    if (inc3 !== 0){
        if (inc3 === itemLeft3){
            inc3 = inc3 - itemLeft3;
            count3 = count3 + (Number(mainWidth3.substring(0, mainWidth3.length-2)) / itemDisplay3) * itemLeft3;
        }
        else{
            inc3--;
            count3 = count3 + Number(mainWidth3.substring(0, mainWidth3.length-2));
        }
    }
    if (inc3 == 0){
        document.getElementById("left-3").style.visibility = "hidden";
    }
    slider3.style.left = count3 + "px";
}

// next-button
function nextThree(){

    document.getElementById("left-3").style.visibility = "visible";

    if (inc3 !== itemSlide3 + itemLeft3){

        if (inc3 === itemSlide3){
            inc3 = inc3 + itemLeft3;
            count3 = count3 - (Number(mainWidth3.substring(0, mainWidth3.length-2)) / itemDisplay3) * itemLeft3;
        }
        else{
            inc3++;
            count3 = count3 - Number(mainWidth3.substring(0, mainWidth3.length-2));
        }
    }
    slider3.style.left = count3 + "px";
}

function prevVisibleThree(){
        document.getElementById("left-3").style.visibility = "visible";
}


// ---------------------------------------------------------------------------------------------------------------

// fifth-carousal

var count4 = 0;
var inc4 = 0;
var slider4 = document.getElementsByClassName("carousal")[4];
var mainEle4 = document.querySelector(".main-wrapper");
var itemDisplay4 = document.getElementsByClassName("item-carousal-wrapper")[4].getAttribute("item-display-d");

var mainWidth4 = getComputedStyle(mainEle4).getPropertyValue("max-width");

var item4 = document.getElementsByClassName("card");

var itemLeft4 = (item4.length - 60) % itemDisplay4;
var itemSlide4 = Math.floor((item4.length - 60) / itemDisplay4) - 1;

// prev-button
function prevFour(){
    if (inc4 !== 0){
        if (inc4 === itemLeft4){
            inc4 = inc4 - itemLeft4;
            count4 = count4 + (Number(mainWidth4.substring(0, mainWidth4.length-2)) / itemDisplay4) * itemLeft4;
        }
        else{
            inc4--;
            count4 = count4 + Number(mainWidth4.substring(0, mainWidth4.length-2));
        }
    }
    if (inc4 == 0){
        document.getElementById("left-4").style.visibility = "hidden";
    }
    slider4.style.left = count4 + "px";
}

// next-button
function nextFour(){

    document.getElementById("left-4").style.visibility = "visible";

    if (inc4 !== itemSlide4 + itemLeft4){

        if (inc4 === itemSlide4){
            inc4 = inc4 + itemLeft4;
            count4 = count4 - (Number(mainWidth4.substring(0, mainWidth4.length-2)) / itemDisplay4) * itemLeft4;
        }
        else{
            inc4++;
            count4 = count4 - Number(mainWidth4.substring(0, mainWidth4.length-2));
        }
    }
    slider4.style.left = count4 + "px";
}

function prevVisibleFour(){
        document.getElementById("left-4").style.visibility = "visible";
}

// --------------------------------------------------------------------------------------------------------------------

function removeAnimation(){

    if (screen.width >= 1260){
        document.getElementById("loc-info").style.display = "none";
        document.getElementById("login-info").style.display = "none";
        document.getElementById("s-bar").style.width = "73.5%";
    }
    else{        
        document.getElementById("s-bar").style.width = "98%";
    }
    document.getElementById("anime-wrapper").style.display = "none";

    document.getElementById("s-bar").style.backgroundColor = "white";

    document.getElementById("s-bar").style.border = "1px solid rgb(221, 221, 221)";
    
    document.getElementById("s-bar").style.boxShadow = "rgba(0, 0, 0, 0.08) 0px 0px 8px";

    document.getElementById("search-here").focus();

    document.getElementById("search-here").setAttribute("placeholder","Search for atta dal and more");

}

// --------------------------------------------------------------------------------------------------------

var targetWidth = 1260;

if ($(window).width() == targetWidth){
    changeAttr();
}

if ($(window).width() == targetWidth+1){
    revertAttr();
}

function changeAttr(){
    
    // first-carousal
    document.getElementById("left").style.display = "none";
    document.getElementById("right").style.display = "none";

    // second-carousal
    document.getElementById("left-1").style.display = "none";
    document.getElementById("right-1").style.display = "none";

    // third-carousal
    document.getElementById("left-2").style.display = "none";
    document.getElementById("right-2").style.display = "none";

    // fourth-carousal
    document.getElementById("left-3").style.display = "none";
    document.getElementById("right-3").style.display = "none";

    // fifth-carousal
    document.getElementById("left-4").style.display = "none";
    document.getElementById("right-4").style.display = "none";

    // change-banner-2
    document.getElementById("image-2").style.display = "none";
    document.getElementById("image-3").style.display = "none";
    document.getElementById("image-4").style.display = "none";
    document.getElementById("image-5").style.display = "none";
    document.getElementById("image-6").style.display = "none";
    document.getElementById("image-7").style.display = "none";
    document.getElementById("image-8").style.display = "none";

    document.getElementsByClassName("banner-image")[0].style.width = "1220" + "px";
    document.getElementsByClassName("banner-image")[0].style.opacity = "1";

}

function revertAttr(){
    // first-carousal
    document.getElementById("left").style.display = "visible";
    document.getElementById("right").style.display = "visible";

    // second-carousal
    document.getElementById("left-1").style.display = "visible";
    document.getElementById("right-1").style.display = "visible";

    // third-carousal
    document.getElementById("left-2").style.display = "visible";
    document.getElementById("right-2").style.display = "visible";
    
    // fourth-carousal
    document.getElementById("left-3").style.display = "visible";
    document.getElementById("right-3").style.display = "visible";

    // fifth-carousal
    document.getElementById("left-4").style.display = "visible";
    document.getElementById("right-4").style.display = "visible";

    // change-banner-2
    document.getElementById("image-2").style.display = "visible";
    document.getElementById("image-3").style.display = "visible";
    document.getElementById("image-4").style.display = "visible";
    document.getElementById("image-5").style.display = "visible";
    document.getElementById("image-6").style.display = "visible";
    document.getElementById("image-7").style.display = "visible";
    document.getElementById("image-8").style.display = "visible";

    document.getElementsByClassName("banner-image")[0].style.width = "1220" + "px";
    document.getElementsByClassName("banner-image")[0].style.opacity = "1";
}


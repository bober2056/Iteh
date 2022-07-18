const repository = [
    "https://sever-press.ru/wp-content/uploads/2020/04/07042020_%D0%BA%D0%BE%D1%82%D1%8B6.jpg",
    "https://cdnn21.img.ria.ru/images/153009/29/1530092975_0:0:1920:1440_1920x0_80_0_0_065af98c5321c16365c7812bfac40b46.jpg",
    "https://img.kanal-o.ru/img/2019-11-11/fmt_81_24_shutterstock_270202490.jpg"
];
function load(){
    let textBox = document.getElementById("text-box");
    let picBox = document.getElementById("picture-box");
    textBox.value = picBox.alt;
}

function select(){
let number = document.getElementById("mySelect").value;
let picBox = document.getElementById("picture-box");
picBox.src = repository[number];
}

function altTextChange(){
    let picBox = document.getElementById("picture-box");
    let textBox = document.getElementById("text-box");
picBox.alt = textBox.value;
}

function heightChange(){
    let height = document.getElementById("height-ctrl").value * 10;
    let picBox = document.getElementById("picture-box");
    picBox.height = height;

}

function widthChange(){
    let width = document.getElementById("width-ctrl").value * 10;
    let picBox = document.getElementById("picture-box");
    picBox.width = width;
}
function borderChange(){
    let borderWidth = document.getElementById("border-ctrl").value;
    let picBox = document.getElementById("picture-box");
    picBox.style.border = `${borderWidth}px solid red`;
}
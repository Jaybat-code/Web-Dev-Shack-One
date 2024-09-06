//save id's in easy variables
const man = document.getElementById("manipulator");
const nut = document.getElementById("nutrition");
const servAmnt = document.getElementById("serving-amount");
const servSize = document.getElementById("serving-size");
const measurement = document.getElementById("measurement");
const calnum = document.getElementById("calorie-number");
const cal = document.getElementById("calories");
const daily = document.getElementById("daily-value")
const fat = document.getElementById("fat-info");
const chol = document.getElementById("cholesteral-info");
const sod = document.getElementById("sodium-info");
const carb = document.getElementById("carb-info");
const pro = document.getElementById("protien-info");
const vit = document.getElementById("vitamin-info");
const yap = document.getElementById("yap-speech");
//usefull arrays for looping
const items = [nut,servAmnt,servSize,measurement,calnum,cal,daily,fat,chol,sod,carb,pro,vit,yap];
const names= ["Nutrition","Serving Amount","Serving Size","Measurement",
            "Calorie Number","Calories","Daily Value","Fat Information",
            "Cholesterol Information","Sodium Information","Carb Information",
            "Protien Information","Vitamin Information","Nutrition Advice"];
//message needs to stay current
const message = man.innerText;
//loops through both arrays and passes my function
for(var i = 0;i<items.length;i++){
    getItemInfo(items[i],names[i])
}
//adds and removes styling and text via the hover action.
function getItemInfo(item, name){
    item.addEventListener("mouseover",function(){
    man.innerText=man.innerText+" "+name;
    item.style.color="brown";
    });
    item.addEventListener("mouseout",function(){
    man.innerText = message;
    item.style.color="black";
    });
}
// let obj = {
//     key1:"Value1",
//     key2:"Value2",
// };
// let person = {
//     name:"Parizoda",
//     surname:"Hametova",
//     aga:23,
//     location: {
//         city:"Tashkent",
//         country:"Uzbekistan",
//     },
//     phone_number:"999234889347",

// };
// console.log(obj.key1);
// console.log(obj("key2"));

// console.log(person.location.city);
// console.log(person["location"]["country"]);

// let Car = {
//     name:"Gentra",
//     motor:1.5,
//     color:"black",
//     speed:220,
//     number:"10 0 777 00",
//     price: {
//         discount:"9000 $",
//         month:{
//             primaryPayment:1000,
//             month_second:{
//                 months:36,
//                 price:800,
//                 percent:"30%",
//             },
//         },
//     },
//     year:2024,
// };

// let car2 = Object.create(car);
// car2.name = "Nexia 3";
// let name = "Umar";
// let name2 = name;
// name2="Fotima";

// Object.seal(car);
// car.color="White";
// delete car.name;
// car.isAirbag = true;
// console.log(car);

let bino = {
    height:50,
    width:20,
    count:12,
};
for(let key in car) {
    console.log(car[key]);
}
let arr2 =[1,2,3,4,5];
for(let key of arr2){
    console.log(key);
}
const obj2 ={};

Object.prototype.log=function() {
    console.log(this);
};
car.log();
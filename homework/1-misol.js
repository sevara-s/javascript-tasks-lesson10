let arr1 = [1,2,2,3];
let arr2 = [3,2,1,3];

arr1.sort();
arr2.sort();
if (arr1.length != arr2.length){
    console.log(false);
}else{
   let new1 = arr1.join("");
   let new2 = arr2.join("");
   if (new1 === new2){
    console.log(true);
   }else{
   console.log(false);
   }
}

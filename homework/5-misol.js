let arr = [3,3,1,3,1];
let keep =[];
for (let i =0; i<arr.length;i++){
    if (!keep.includes(arr[i])){
        keep.push(arr[i]);
    }
}
if (keep.length==2){
    console.log(true);
}else{
    console.log(false);
}
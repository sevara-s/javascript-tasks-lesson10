let arr = ["flowers","flight","flow"];
let res ="";

for(let i =0; i<arr[0].length;i++){
    for(let j = 0; j<arr.length;j++){
        if (arr[j][i]!==arr[0][i]){
            console.log(res);
            return;
        }
    }
    res +=arr[0][i];
}
console.log(res);

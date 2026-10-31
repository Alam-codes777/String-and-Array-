function reverse(str){
    let res = "";
    for(let x = str.length-1; x>=0;  x--){
        res += str[x];
    }
    return res
    
}
console.log(reverse("hello"))

function paldindrome(str){
    let reverse = "";
    for(let x = str.length-1; x>=0; x--){
        reverse += str[x];
    }
    if (str === reverse){
        return true;
    } else {
        return false;
    }
}
    console.log(paldindrome("madam"))

function count(alphabet){
    let str = "school"
    let vowel = ['a','e','i','o','u'];   
    let vowelcount =0;
    let consonentcount=0;
    for(let i =0 ; i<str.length; i++){
    if(vowel.includes(str[i])){ 
        vowelcount++
    } else {
        consonentcount++
    }
    } 
    return [vowelcount , consonentcount]
}
console.log(count("alphabet"))

function secondlargest(){
    let arr = [10,5,20,8,20];
    let newarr = []
    for(let x = 0; x<arr.length; x++){
        if(!newarr.includes(arr[x])){
            newarr.push(arr[x])
        }
    }
    newarr.sort((a,b) => b-a );
    return newarr[1];
}
console.log(secondlargest())
                                
function removedublicate(){
    let arr1 = [1,2,2,3,1];
    let new_arr = [];
    for(let x = 0; x<arr1.length; x++){
        if(!new_arr.includes(arr1[x])){
            new_arr.push(arr1[x])
        }
    }
    return new_arr;
}
console.log(removedublicate())

function sumevennumber(){
    let arr2 = [10,20,30,9,8,7,6,5];
    let sum = 0;
    for(let x = 0; x<arr2.length; x++){
        if(arr2[x] % 2 == 0){
            sum += arr2[x]
        }
    }
    return sum;
}
console.log(sumevennumber())

function frequrencyof(){
    let arr = [1,2,3,3,2,4,5,4,3,6,5,4,3,7,8,9,8,7,6];
    let find = 3;
    let count = 0;
    for(let x = 0; x<arr.length; x++){
        if(arr[x] === find ){
            count++
        }
    }
    return count
}
    console.log("frequrency of 3 = ",frequrencyof());

function anagramornot(){
    let str1 = "stop"
    let str2 = "pots"
    if(str1.length === str2.length && str1.split('').sort().join('') === str2.split('').sort().join('')){
        return "yes"
    } else {
        return "No"
    }
}
console.log(anagramornot())

function movezero(){
    let arr0 = [12,0,3,0,5,0,6,0,55,0,6]
    let new_arr=[];
    for(let x = 0; x<arr0.length; x++){
        if(arr0[x] !== 0){
            new_arr.push(arr0[x])
        }
    }
        for(let x = 0; x<arr0.length; x++){
        if (arr0[x] == 0){
            new_arr.push(arr0[x]);
        }
    }
        return new_arr
}
console.log( movezero())







function getAnagrams(string, prefix, arr){
 var strlen = string.length;
 if(prefix === undefined){
   var prefix = "";
 }
 if(arr === undefined){
   var arr = [];
 }
 if(strlen == 0){
   arr.push(prefix);
 }
 for(var i=0; i<strlen; i++){
   getAnagrams(string.substring(0, i) + string.substring(i+1, strlen), prefix + string[i], arr);
 }
 return arr;
}

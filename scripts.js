function TriangleTracker() {  
var side_a = parseInt(document.getElementById("side_a").value);
var side_b = parseInt(document.getElementById("side_b").value);
var side_c = parseInt(document.getElementById("side_c").value);

if(a === b && b === c && a === c) {
    alert("It's equilateral");
}else if(b === a || c === b || c === a){
    alert("It's isosceles");
}else if(b == a && a == b && c == a){
if(a + b > c || b + c > a || a + c > b){
    if(a + b <=c || c + b <= a || c + a <= b){
        alert("cannot form a triangle");
    }else{
        alert("It's scalene");
    }
}
}
}

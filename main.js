let result = document.querySelector(".result-value");

let res = document.querySelector(".egale-value");

let one = document.querySelectorAll(".one");

let egale = document.querySelector(".egale");

let del = document.querySelector(".delete");

let comeBack = document.querySelector(".comeback");

let sp = document.querySelectorAll("span");



if(window.localStorage.getItem("calcul")){
result.innerHTML = window.localStorage.getItem("calcul");
}

if(window.localStorage.getItem("result")){
    res.innerHTML = window.localStorage.getItem("result");
}



one.forEach((or)=>{

    or.onclick = function(){
        r = result.innerHTML;
        result.innerHTML=r+or.innerHTML;
    }
});


del.onclick = function(){
result.innerHTML = "";
res.innerHTML = "";
};

comeBack.onclick = function(){

let newRes = result.innerHTML.split("");
newRes.pop();
result.innerHTML = newRes.join("");
    
};


let kf = false;
egale.onclick = function(){
 
if(result.innerHTML !== ""){

let arr = [];
for(let i = 0 ; i < result.innerHTML.split("").length ; i++){
    if(result.innerHTML.split("")[i] === "+" | result.innerHTML.split("")[i] ==="-"|result.innerHTML.split("")[i]==="/"|result.innerHTML.split("")[i]==="x"){
       
        arr.push(" ");   
    }
    else{
        arr.push(result.innerHTML.split("")[i]);
    }
}

for(let i = 0 ; i< arr.length ; i++){
    if(arr[i] === " "){
        if(arr[i+1]===" "){
            res.innerHTML = "ERROR";
            res.style.color = "red";
            kf = true;
        }
    }
    if(arr[arr.length-1] === " "){
        res.innerHTML = "ERROR";
        res.style.color = "red";
        kf = true;
    }
}




arr = arr.join("").split(" ").map((n)=>+n);


let k =  result.innerHTML.match(/(\+|\-|\/|x)/g);
let co = 1;

if(k !== null){

for(let i = 0 ; i< k.length;i++){
arr.splice(co,0,k[i]);
co+=2;
}

}






for(let i = 0 ; i < arr.length;i++){
    if(arr[i]==="/" | arr[i]==="x"){

        if(arr[i]==="/"){
            arr[i+1] = arr[i-1] / arr[i+1];
            arr[i-1] = "";
            arr[i]="";
        }

        if(arr[i]==="x"){
           arr[i+1] = arr[i-1] * arr[i+1];
           arr[i-1] = "";
           arr[i]="";
        }
    }

}
arr = arr.filter((el)=> el !== "");

let s = arr[0];

for(let i = 0 ; i < arr.length;i++){
    if(arr[i]==="+" | arr[i]==="-"){
        if(arr[i]==="+"){
            s = s + arr[i+1];
        }

        if(arr[i]==="-"){
            s = s - arr[i+1];
        }

    }

   
}



if(kf === false) {
res.innerHTML=s;

}


}



};


sp.forEach((el)=>{
    el.addEventListener("click",function(){
        
        window.localStorage.setItem("calcul",result.innerHTML);
        window.localStorage.setItem("result",res.innerHTML);
        if(res.innerHTML === "ERROR"){
            window.localStorage.setItem("result","");
            window.localStorage.setItem("calcul","");
        }

    

    });

    



});


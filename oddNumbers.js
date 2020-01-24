let randNums=[];

document.getElementById("showing5ran").addEventListener("click",show5ranNums);
document.getElementById("showing3largest").addEventListener("click", show3largNums);

function show5ranNums(){
    for(let i=0; i<10;i++){
        let temp=Math.floor(Math.random() * 10+1);
    if(randNums.includes(temp)==false){
        randNums.push(temp);
    }else{
        i--;
    }
    }
    let temp2="";
    for(let j=0; j<10;j++){
temp2+=randNums[j]+", ";
    }
    let newStr = temp2.slice(0, -2);
    document.getElementById("5ranNums").innerHTML=newStr;
}

function show3largNums(){
    let temp3=[];
    for(let i=0;i<3;i++){
        let largestNum=Math.max(...randNums);
        temp3.push(largestNum);
        for( let j = 0; j < randNums.length; j++){ 
            if ( randNums[j] === largestNum) {
                randNums.splice(j, 1); 
            }
         }
    }
   
    let temp4="";
    for(let x=0; x<3;x++){
temp4+=temp3[x]+", ";
    }
    let newStr2 = temp4.slice(0, -2);
    document.getElementById("largest3nums").innerHTML=newStr2;
}

$(document).ready(function(){

//Variables
var num1 = 0,
num2 = 0,
operator = "",
divNumbers = $(".container .box-num"),
divOperators = $(".container .box-opr"),
getNum = $("#sc"),
resetBox = $("#reset"),
clearBox = $("#clear"),
isOprClick = false, 
isEqClick = false, 
fco = 0;

//Clear Button
$("#clear").click(function(){
    $("#sc").html("0");
})

//Reset Button
$("#reset").click(function(){
    isOprClick = false;
    isEqClick = false;
    fco = 0;
    num1 = 0;
    num2 = 0;
    operator = "";
    
    $("#sc").html("0");
})

//Logic for the numbers entered
 for(var i = 0; i < divNumbers.length; i++)
{
    divNumbers[i].onclick = function(){

      if(isOprClick)
      {
          num1 = parseFloat(sc.innerHTML);
          sc.innerHTML = "";
      }

      // check if the text dont contain '.'
      if(sc.innerHTML.toString().indexOf(".") === -1)
      {
          // if text is equal to 0 and the div pressed is not a '.'
          if(sc.innerHTML === "0" && this.innerHTML !== "."){
            sc.innerHTML = this.innerHTML;    
            isOprClick = false;
          }else{
              sc.innerHTML = sc.innerHTML + this.innerHTML;
              isOprClick = false;
          }
          
      }else if(this.innerHTML !== ".")
        {
          sc.innerHTML = sc.innerHTML + this.innerHTML;
          isOprClick = false;
        }
      
    };
}

//Logic for the operators clicked
 for(var i = 0; i < divOperators.length; i++)
{
    divOperators[i].onclick = function(){
      
        if(fco === 0)
        {
            fco++;
            num1 = parseFloat(sc.innerHTML);
            // get the operator
            opr = this.innerHTML;
            isOprClick = true;
        }
        else{
            if(this.innerHTML !== "="){// if the clicked div is not '='
                if(!isEqClick){// if '=' is not already clicked
                    
                    num2 = parseFloat(sc.innerHTML);
                    sc.innerHTML = calc(opr, num1, num2);
                    operator  = this.innerHTML;
                    num2 = parseFloat(sc.innerHTML);
                    isOprClick = true;
                    isEqClick = false;
                }else{
                    isEqClick = false;
                    operator = this.innerHTML;
                }
            }else{
                    num2 = parseFloat(sc.innerHTML);
                    sc.innerHTML = calc(opr, num1, num2);
                    operator  = this.innerHTML;
                    num1 = parseFloat(sc.innerHTML);
                    isOprClick = true;
                    isEqClick = true;
            }
        }

    };
}

//Computation
 function calc(op,n1,n2)
{
    var result = 0;
    
    switch(op){
        case"+":
            result = n1 + n2;
            break;
       case"-":
            result = n1 - n2;
            break;  
        case"X":
            result = n1 * n2;
            break;
        case"/":
            if(n2 > 0)
            result = n1 / n2;
        
            break;
    }
    return result;
}



//Document End  
});
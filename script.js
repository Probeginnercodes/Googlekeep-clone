const calculateTemp = () => { 
 const numbertemp = document.getElementById('temp').value; 
//  console.log(numbertemp); 


 const tempselected  = document.getElementById('temp_diff'); 
 const valueTemp = temp_diff.options[tempselected.selectedIndex].value; 

 let result; 
 const celtofah = (cel) => { 
    let fahrenheit = Math.round((cel*9/5) + 32); 
    return fahrenheit;  
 }

 const fahtocel = (fah) => { 
    let cel = Math.round((fah-32)*5/9); 
    return cel; 
 }
 
 if(valueTemp== 'cel'){ 
    result = celtofah(numbertemp); 
    document.getElementById('resultcontainer').innerHTML = `${result} Fahrenheit`
 }else{ 
    result = fahtocel(numbertemp); 
    document.getElementById('resultcontainer').innerHTML=`${result}Celsius`; 
 }
 

}  
// 1.
//  var color = "blue";
//  if (color == "red") {
//      color = "yellow";
//  } else {
//      color = "green";
//  }
//  document.getElementById("colorOutput").innerText=color;

// 2.
// greeting = " \"Hello\" this is a javascript!"
// warning = '\'Be careful\' is a warning'
// document.write(greeting)
// window.alert(warning)

// var greet = "\"Hello\" Shubham!"
// console.log(greet)
// document.write(greet)

// var color=123;
// if (color=="blue"){color="green";} else{color="red";} document.write(color)

//3.
// for (var count=1; count<=10; count++)
// {document.write("Iteration Number&nbsp;&nbsp;&nbsp;&nbsp;"+count+"<br>")}
// document.write("\u0026<random_word>nbsp : means non breaking space")


//4.
// Table
// var product;
// var n=prompt("Enter the value of n : ");
// document.write("table of "+n+":"+"<br>");
// for(var i=1 ; i<11; i++)
// {product=n*i 
// document.write(product+"<br>");}


// 5.
// Factorial
// var fact=1
// var n=parseInt(prompt("Enter the value of n : "));
// for(var i=n; i>=1; i--)
// {fact*=i;}
// document.write("The Factorial of "+n+" is "+fact+"\u002e")

//6.
// for-in loop; //for obj and arrays
// var obj={shubh:100,adi:50,ram:79,shyam:89};
// for (var a in obj)
// {document.write("Marks of "+a+" is "+obj[a]+"\u002e"+"<br>")}

//7.
//for-of loop;  //for strings and arrays
// for(var b of "Harry")
// {document.write(b+"<br>")}


//8.
//while
// let i=1;
// while(i<=10){
//     document.write("hello"+i+"<br>");
//     i++;}

//9.
//do-while
// let i=1;
// do{
//     document.write("It gurantees that loop will run atleast once"+i+"<br>");
//     i++;
// }while(i>=10);  //stopping condition in end;


//10.
//even number
// let n=parseInt(prompt("Enter the value of n : "));
// for(let i=0;i<=n;i++){
//     if(i%2==0){
//         document.write(i+" is an even number"+"<br>")
//     }
// }

//using while loop
// let i=0;
// while(i<=50){
//     if(i%2==0){
//         document.write(i+" is an even number"+"<br>")}
//     i++
// }


//11.
//Template literal; new way to print output
// let obj={
//     item:"pen",
//     price:10,
// };

// let output=`The cost of ${obj.item} is \u20B9${obj.price} <br> `
// document.write(output);
// document.write(obj.item.length) //string.length
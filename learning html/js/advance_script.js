// 1.
// function addNum(num1,num2)
// {return num1*num2}

// num1=parseInt(prompt("Enter num 1 : "))
// num2=parseInt(prompt("Enter num 2 : "))
// document.write(`The product of ${num1} and ${num2} is `+addNum(num1,num2)+`\u002e`)


// 2.
// function table(num)
// {var tablecontent="";
// for(let i=1;i<11;i++)
// {tablecontent+=`${num} \u00D7 ${i} = ${num*i}<br>`;}
// return tablecontent;}

// var num=parseInt(prompt("Enter number : "))
// document.write(`Table of ${num} : <br><br>`);
// document.write(table(num));

// 3.
// var phrase = "Hello,How are you."
// with (phrase) {
//     document.write("The string is " + length + " characters<br>")
//     document.write("In upper case it's: " + toUpperCase() + "<br>")
//     document.write("In Lower case it's: " + toLowerCase())}


//4.
// var a=parseInt(prompt("Enter number : "))
// if (a>100)document.write("a is greater than 100")   //single line if else statement
// else if(a<100)document.write("a is less than 100")
// else document.write("a is equal to 100")

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//5.  using if....elifif..... and else.....                 vs                                 Switch
// var heroName = "Spiderman"
// switch (heroName) {
//     case "Superman":
//     case "Batman":
//     case "Wonder Woman":
//         document.write("Justice League")
//         break
//     case "Iron Man":
//     case "Captain America":
//     case "Spiderman":
//         document.write("The Avengers")
//         break
// }


// Two options feel free to use anyone.

//  if (heroName == "Iron Man" || heroName == "Captain America" || heroName == "Spiderman" ) document.write("The Avengers")
//  else if (heroName == "Superman" || heroName == "Batman" || heroName == "Wonder Woman") document.write("Justice League")
//  else document.write("Kuch nahi")
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


//6.  ? Operator
// var a=1;
// document.write(
//      a <= 5 ?
//     "a is less than or equal to 5" :
//     "a is greater than 5")


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//7.  {Ternary operator and special question of that+ difference in pre and postfix}

// var a,b=3;       //since here postfix operator is used that's why a is assigned value first , then value of b is incremented if ++b is used then b get incremented then assigned to a, then a=4
// a=(15%3? b+5 : b++);
// document.write(`a=${a} b=${b}`)

// var a, b = 3;

// if (15 % 3) {
//     a = b + 5;
// } else {                   // ternary to if else..........
//     a = b;
//     b++;
// }

// document.write(`a=${a}\nb=${b}`);

// let x = 5;

// // Prefix increment: Increment x first, then use the updated value
// let y = ++x; // y is assigned 6, x becomes 6

// // Postfix increment: Use the current value of x, then increment x
// let z = x++; // z is assigned 6 (previous value of x), x becomes 7

// console.log(y); // Output: 6
// console.log(z); // Output: 6
// console.log(x); // Output: 7

// Prefix operators have right-to-left associativity.
// Postfix operators have left-to-right associativity.
// For example, if you have an expression like ++a * b, the prefix increment ++a will be applied to a first, and then the multiplication will take place.
//  Similarly, if you have an expression like a * b++, the multiplication will take place first, and then the postfix increment b++ will be applied to b.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// counter = 0
// while (++counter < 5) {
//     document.write("Counter: " + counter + "<br>")
// }

// count = 1
// do
// {
// document.write(count + " times 7 is " + count * 7 + "<br>")
// } while (++count <= 7)



// let str = "Hello, World!";
// let substrings = str.split("");
// console.log(substrings); // Output: ["Hello", "World!"]
// let length = substrings.length;
// console.log(length)

// document.write(fixNames("the", "DALLAS", "CowBoys"))
// function fixNames()
// {
// var s = ""
// for (j = 0 ; j < fixNames.arguments.length ; ++j)
// s += fixNames.arguments[j].charAt(0).toUpperCase() +
// fixNames.arguments[j].substr(1).toLowerCase() + " "
// return s.substr(0, s.length-1)
// }


function greeting() {
    // Get the current date and time
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
  
    // Define greetings based on the time of the day
    var greetingMessage;
    if (currentHour < 12) {
      greetingMessage = "Good morning!";
    } else if (currentHour < 18) {
      greetingMessage = "Good afternoon!";
    } else {
      greetingMessage = "Good evening!";
    }
  
    // Return the greeting message
    return greetingMessage;
    
  }
  
  // Example usage:
  var greetingMessage = greeting();
  document.write(greetingMessage+"<br>"); // Output the greeting message to the console
  
  var currentTime = new Date();
    var currentHour = currentTime.getHours()
    document.write(currentHour)
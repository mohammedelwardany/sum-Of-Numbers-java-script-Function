//-----------------------------------------------------------task1---------------------------------------------------------------//
// size = 5;
// let arr = new Array(size);
// for (var i = 0; i < arr.length; i++) {
//     var getter = prompt("give element have same type of array!");

//     arr[i] = getter;
// }
// document.write("you added elements:")
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i], ",");
// }
// arr.sort(function(a, b) {
//     return a - b;
// });
// document.write("<br> you sorted element assending:")
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i], ",");
// }
// document.write("<br> you sorted element desending:")
// for (var i = arr.length - 1; i >= 0; i--) {
//     document.write(arr[i], ",");
// }


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//                                                         functions

//-----------------------------------------------------------task1---------------------------------------------------------------//



// function getRectArea(width, height) {
//     if (arguments.length !== 2) {
//         throw ("Enter only 2 parameters");
//     }
// }

// getRectArea(3);
// getRectArea(3, 4, 5);
// getRectArea(3, 4);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//-----------------------------------------------------------task2---------------------------------------------------------------//

// function summ() {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         if (!isFinite(arguments[i])) {
//             throw ("numerical values only");
//         }
//         sum = sum + arguments[i];
//     }
//     return alert(sum);
// }
// summ(1, 2, 5, 6, 3, 7, 9);
// summ(2, 'g', 7, 3, 34);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//-----------------------------------------------------------task3---------------------------------------------------------------//

// function reverse() {
//     var arr = [];
//     for (i = 0; i < arguments.length; i++) {
//         arr[i] = arguments[i];
//     }
//     var reversed = arr.reverse();
//     return reversed;
// }

// //test
// var test = reverse(1, 2, 4, 9, 1, 5, 42, 3, 2);
// document.write("reversed values", test);
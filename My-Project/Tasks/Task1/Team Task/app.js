// let arr = [1, 45, 67, 23, 78, 34, 45, 67, 67, 12, 457];
// let zero = 0;






// // massivdəki tək ədəd sayını tapın
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }

// //hell edildi

// //massivdəki cüt ədəd sayını tapın

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 ===0 ) {
//         console.log(arr[i]);
//     }
// }

// //hell edildi

// //massivdəki ədədlərin cəmini tapın


// for (i = 0; i < arr.length; i++) {
//    console.log(arr[i] +=arr[i]);

// }

// //hell edildi

// //massivdəki ən böyük ədədi tapın

// for (i = 0; i < arr.length; i++) {
//     console.log(Math.max(arr[i]));

//  }

//  //hell edildi

// massivdeki tekrerlanan edeler

let a = [1, 45, 67, 23, 78, 34, 45, 67, 67, 12, 457];

function count_duplicate(a){
 let counts = {}

 for(let i =0; i < a.length; i++){ 
     if (counts[a[i]]){
     counts[a[i]] += 1
     } else {
     counts[a[i]] = 1
     }
    }  
    for (let prop in counts){
        if (counts[prop] >= 2){
            console.log(prop + " counted: " + counts[prop] + " times.")
        }
    }
  console.log(counts)
}

count_duplicate(a)
/*  3 counted: 3 times.
    4 counted: 2 times.
    { '3': 3, '4': 2, '6': 1 }
*/

//end
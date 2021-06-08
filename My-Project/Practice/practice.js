// telebeler=[
//     {
//         ad:'Nurlan',
//         soyad:'Heseneliyev',
//         yas:45
//     },
//     {
//         ad:'Elekber',
//         soyad:'Tagiyev',
//         yas:23,
//     },
//     {
//         ad:'Seda',
//         soyad:'Babayeva',
//         yas:29
//     }

// ]


// function yasaGoreTap(yas){
//     for(i=0;i<telebeler.length;i++){
//        if( telebeler[i].yas>yas) {
//         console.log(telebeler[i].ad)
//        }
//     }



// }

// yasaGoreTap(25);

let ededler = [1, 34, 23, 4, 67, 12, 11];

let cem  = 0;




for (i = 0; i < ededler.length; i++) {
    let cem  = 0;
    if (ededler[i] < 10) {
       
        cem = cem + ededler[i]
    }

}

console.log(cem);




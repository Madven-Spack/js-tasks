//1
// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль. 

      //   let num = -9;

      //   console.log(num < 0 ? 'число отрицательное' : 'число положительное' );


 //2
//   Дана строка. Выведите в консоль длину этой строки.

      //    let str = 'Привет';


      //    console.log(str.length);

   
//3
//   Дана строка. Выведите в консоль последний символ строки. 

      //    console.log(str.length);

   
//4
//   Дано число. Проверьте, четное оно или нет.

      //    let num1 = 5;

      //    console.log(num1 % 2 == 0 ? 'число четное' : 'число не четное');

   
//5
//   Даны два слова. Проверьте, что первые буквы этих слов совпадают.


      //    let str1 = 'hello';
      //    let str2 = 'hello';

      //    console.log( str1[0] === str2[0] ? 'первые буквы совподают' : 'Первые букввы не совподают' );

   
//6
//   Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву. -->

      // let str3 = 'сани';

      // let elem = str3[str3.length - 1];

      // console.log(elem == 'ь' ? str3[str3.length - 2] : str3[str3.length - 1]);


//7
// Дано число. Выведите в консоль первую цифру этого числа.


      // let num2 = 23;

      // console.log(num2.toString()[0]);


//8
// Дано число. Выведите в консоль последнюю цифру этого числа.

      // let num3 = 235;

      // console.log(num3.toString()[num3.toString().length - 1]);


//9
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

      // let num4 = 2325467;

      // console.log(+num4.toString()[0] + +num4.toString()[num4.toString().length - 1]);


//10
// Дано число. Выведите количество цифр в этом числе.


      // let num5 = 6645645;

      // console.log(num5.toString().length);


//11
// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

      // let num6 = 45654;

      // let num7 = 55454;

      // console.log(num6.toString()[0] === num7.toString()[0] ? 'первые цифры совпадают' : 'первые цифры не совпадают');



//12
// Найдите сумму всех целых чисел от 1 до 100.
   // let i = 1
   // let o = 0;
   // while(i <= 100){

   //    o += i;


   //    i++

   // }

   // console.log(o);


//13
// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

      // let i = 1
      // let o = 0;
      // while(i <= 100){


      //    if(i % 2 == 0){

      //       o += i;

      //    }

            


      //       i++

      //    }

      // console.log(o);

//14
// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

//      let i = 1
//       let o = 0;
//       while(i <= 100){


//          if(i % 2 != 0){

//             o += i;

//          }

            


//             i++

//          }

//       console.log(o);


//15
// Даны два целых числа. Найдите остаток от деления первого числа на второе.

      //    let one = 7; 
      //    let two = 4;

      //    console.log(one%two);


//16
// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.


// let st = 'Привет';

// let d = st.split('');

// console.log(st.split(''));

// for(let i = 0; i < st.split('').length; i++){
//    console.log(st.split('')[i]);
   
// }





//17
// Дан массив с числами. Найдите сумму квадратов элементов этого массива.


// let arra = [1, 3];

// let ip = 0;

// for(ar of arra){
//    console.log(ar);

//    ip += Math.pow(ar, 2);
// }

// console.log(ip);


//18
// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

// let arra = [4, 4];

// let ip = 0;

// for(ar of arra){
//    console.log(ar);

//    ip += Math.sqrt(ar, 2);
// }

// console.log(ip);


//19
//  Дано некоторое число:
// 12345

// Переверните его:
// 54321


// let n = 12345;


// n.toString.reverse();

// console.log(n.toString().split('').reverse().join(''));

//  Дано некоторое число:
// 12345

// Найдите сумму цифр этого числа. 

// let n = 12345;

// let el = n.toString().split('').reduce(( g, a )=>{
//    return g += +a;
// }, 100);


// console.log(el);


//20
// Заполните массив целыми числами от 1 до 10.

// let arr = [];
// let i = 1

// while(i <= 10){

//       arr.push(i);
//       i++;
// }

// console.log(arr);


//21
// Заполните массив четными числами из промежутка от 1 до 100.

// let arr = [];
// let i = 1

// while(i <= 10){

//       if(i%2 == 0){

//             arr.push(i);

//       }

     
//       i++;
// }

// console.log(arr);


//22
// Дан массив с дробями:
// [1.456, 2.125, 3.32, 4.1, 5.34]

// Округлите эти дроби до одного знака в дробной части. 

// let num = [1.456, 2.125, 3.32, 4.1, 5.34];



// num.forEach((num)=>{

//       // return Math.round(num, 1);

//       console.log(num.toFixed(1));


// });

// console.log(result);

//23
//  Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

// let arr = [
//             'http://saca',
//             'http://hgf',
//             'sdvbsdfb'
//           ];

// let reg = /http:\/\//;

// for(let i = 0; i < arr.length; i++){

//       if(!reg.test(arr[i])){

//             arr.splice(i, 1);
//       }
// }
// console.log(arr);

//24
// Дан массив со строками. Оставьте в этом массиве только те строки, 
// которые заканчиваются на .html.

let arr = [
            'hdjs.html',
            'vadvasv.html',
            'svbsdbv0'
          ];

let regul = /.html$/;


for(let i = 0; i < arr.length; i++){

      if(!regul.test(arr[i])){

            arr.splice(i);



      }

}

console.log(arr);




//25
// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов

let arrNum = [
      1,
      2,
      5,
      6
];

let result = arrNum.map((num)=>{

      return num + num/100*10;



})

console.log(result);








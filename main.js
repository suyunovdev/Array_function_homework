// 1. Faqat raqamlardan iborat array'ni oladigan funksiya yarating va birinchi elementni qaytaring:

//   getFirstValue([1, 2, 3]) ➞ 1

//   getFirstValue([80, 5, 100]) ➞ 80

//   getFirstValue([-500, 0, 50]) ➞ -500



                        // function value (arr){
                        //     return arr[0]
                        // }
                        // console.log(value([1,2,3]));
                        // console.log(value([80,5,100]));
                        // console.log(value([-500,0,50]));


// 2. Ikki argumentni qabul qiladigan, va ushbu ikkita argumentni o'z ichiga olgan arrayni qaytaradigan funksiya yarating:

//   makePair(1, 2) ➞ [1, 2]

//   makePair(51, 21) ➞ [51, 21]

//   makePair(512124, 215) ➞ [512124, 215]


                        // function value (arr1,arr2){
                        //     return [arr1,arr2];
                        // }
                        // console.log(value(1,2));
                        // console.log(value(51,21));
                        // console.log(value(512124,215));


// 3. Quyidagi funksiyani 2 ta argument qabul qiladi, array va son. 2-argument, son, 1-argument, arraydan nechta elementni ochirib tashlashni bergilaydi: Misol uchun:

//   drop([1, 2, 3], 1) ➞ [2, 3]

//   drop([1, 2, 3], 2) ➞ [3]

//   drop([1, 2, 3], 5) ➞ []

//   drop([1, 2, 3], 0) ➞ [1, 2, 3]


                        // function drop(arr, num) {
                        //     return arr.slice(num);
                        // }
                        
                        // console.log(drop([1, 2, 3], 1)); 
                        // console.log(drop([1, 2, 3], 2)); 
                        // console.log(drop([1, 2, 3], 5)); 
                        // console.log(drop([1, 2, 3], 0)); 
  


// 4. Array'ni teskari aylantirish funksiyasini yozing:
//   reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

//   reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

//   reverse([]) ➞ []

                        // function reverse(arr) {
                        //     return arr.reverse();
                        // }
                        
                        // console.log(reverse([1, 2, 3, 4]));       
                        // console.log(reverse([9, 9, 2, 3, 4]));    
                        // console.log(reverse([]));                 
                        


// 5. Quyidagi funksiya array qabul qiladi va uni elementlarini qiymatini 1ta oshiradi:
//   incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

//   incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

//   incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]

//   Lekin funksiyada xatolik bor. Xatolikni toping:

//   function incrementItems(arr) {
//     for (let i = 0; i < array.length; i++)
//       arr[i] === arr[i] + 1
//     return array
//   }
                        // function incrementItems(arr) {
                        //     for (let i = 0; i < arr.length; i++)
                        //     arr[i] = arr[i] + 1; 
                        //     return arr;
                        // }
  


// 6. Arrayni qabul qiladigan va arraydagi oxirgi elementni qaytaradigan funksiya yarating:

//   getLastItem([1, 2, 3]) ➞ 3

//   getLastItem(["cat", "dog", "duck"]) ➞ "duck"

//   getLastItem([true, false, true]) ➞ true



                    // function getLastItem(arr) {
                    //     return arr[arr.length - 1];
                    // }
                    
                    // console.log(getLastItem([1, 2, 3]));          
                    // console.log(getLastItem(["cat", "dog", "duck"])); 
                    // console.log(getLastItem([true, false, true])); 
                    


// 7. Arrayi oladigan va uni stringa aylantirib qaytaradigan funksiya yarating:

//   arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

//   arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

//   arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"


// 8. 2 ta arrayni boglaydigan (concat) funksiya yarating:
//   concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

//   concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

//   concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]


                        // function arrayToString(arr) {
                        //     return arr.join("");
                        // }
                        
                        // console.log(arrayToString([1, 2, 3, 4, 5, 6]));  
                        // console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); 
                        // console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));
  

// 9. Argument sifatida array va stringni oladigan va stringni arrayni ichidagi joylashgan indeksini qaytaruvchi funksiya yarating:
//   findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

//   findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

//   findIndex(["a", "g", "y", "d"], "d") ➞ 3

//   findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0



                    // function findIndex(arr, str) {
                    //     return arr.indexOf(str);
                    // }
                    

                    // console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));            
                    // console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));         
                    // console.log(findIndex(["a", "g", "y", "d"], "d"));                        
                    // console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); 
  


// 10. Sonlardan iborat array qabul qiladigan va uni ichidagi qiymatlarni(sonlarni) bir-biriga qoshadigan va natijani qaytaradigan funksiya yarating:
//   sumArray([1, 2, 3, 4, 5]) ➞ 15

//   sumArray([-1, 0, 1]) ➞ 0

//   sumArray([0, 4, 8, 12]) ➞ 24



                        // function sumArray(arr) {
                        //     let sum = 0;
                        //     for (let i = 0; i < arr.length; i++) {
                        //     sum += arr[i];
                        //     }
                        //     return sum;
                        // }
                        
                        // console.log(sumArray([1, 2, 3, 4, 5]));   
                        // console.log(sumArray([-1, 0, 1]));        
                        // console.log(sumArray([0, 4, 8, 12]));     
  



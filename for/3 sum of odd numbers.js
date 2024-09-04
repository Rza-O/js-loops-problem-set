

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
let j = 0;
for(let i = 91; i <= 129; i++){
    if (i % 2 !== 0){
    console.log('All the odd numbers are', i);
    j = j + i;
    }
}
console.log('And the Sum of all these odd numbers are:', j);









/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

let sum = 0;
for(let k = 51; k <= 85; k++){
    if(k % 2 === 0){
        console.log('All the EVEN numbers are:', k);
        sum = sum + k;
    }
}
console.log('And The sum of all these even numbers are:', sum);
/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

// Task-1
let num = 61;
while(num <= 100){
    console.log('Odd number is', num);
    num += 2;
}

// Task-2
let num = 78;
while(num <= 98){
    if(num % 2 === 0){
        console.log('Even number is:', num);
    }
    num++;
}
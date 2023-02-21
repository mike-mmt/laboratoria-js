'use strict';

const arr = [7,4,9]

if (arr[0] < arr[1]+arr[2] || arr[1] < arr[0]+arr[2] || arr[2] < arr[1]+arr[0]) {
    console.log("Można zbudować trójkąt");    
} else {
    console.log("Nie można zbudować trójkąta");
}
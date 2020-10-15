/*
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]

*/

// export const arr = (n: number): number[] => [ ];

export const arr = (n: number = 0 ): number[] => {
    
    let array: number[] = [];
    for (let index: number = 0; index < n; index++) {
        array.push(index);
    }
    return array;
}

/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items.

For example:

two_oldest_ages( 4, {1, 2, 10, 8} ) // should return {8, 10}

*/

// return the two oldest/oldest ages within the array of ages passed in.
// it should return the two ages as a sorted array, youngest age first
export function twoOldestAges(ages: number[]): number[] {

    //Esta función devuelve un número positivo si elem1 es mayor que elem2, con lo cual elem1 se colocará detrás. Si escribimos return elem2 – elem1 se ordenará de mayor a menor.

    return ages.sort( (a, b) => {
        return a - b
    }).slice(-2);
}
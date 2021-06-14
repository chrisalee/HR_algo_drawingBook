/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

const pageCount = (n, p) => {
    // Write your code here
    const isFromLastPage = (n - p) <= (p - 1);
    if(isFromLastPage) {
        if(n % 2 === 0) {
            return Math.ceil((n - p) / 2);
        }
        return Math.floor((n - p) / 2);
    } else {
        return Math.floor(p / 2);
    }
}

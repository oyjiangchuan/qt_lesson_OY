// n个台阶, 每次你可以跨一个台阶或两个台阶, 请问你有多少种走法？ n = 7, 值为多少(经典递归算法)
function manyMethos(n) {
    let num;
    if (n == 1) {
       num = 1; 
    } else if (n == 2) {
        num = 2;
    } else if (n > 2) {
        num = manyMethos(n - 1) + manyMethos(n - 2);
    } return num;
}
console.log(manyMethos(7))
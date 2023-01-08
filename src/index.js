module.exports = function reverse (n) {
    let i = 0;
    let result = '';
    if (n<0) {
        n=n*(-1);
    }
    str = n.toString();
 
    while (i < str.length) {
      result = `${str[i]}${result}`;
      i = i + 1;
    }
    return result;
}

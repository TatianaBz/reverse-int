module.exports = function reverse(n) {
    let str = String(n);
    if (n < 0) {
        let stt = str.substr(1);
        return Number(stt.split("").reverse().join(""));
    } else
        return Number(str.split("").reverse().join(""));
};

const getLarge = (a, b, c) => {
    if (a && b && c) {
        return Math.max(a, b, c);
    } else {
        throw 'Error; no input'
    }
}

const getSmall = (a, b, c) => {
    if (a && b && c) {
        return Math.min(a, b, c);
    } else {
        throw 'Error; no input'
    }}


module.exports = {
    getLarge: getLarge,
    getSmall: getSmall
}


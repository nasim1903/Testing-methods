const getLarge = (a, b, c) => {
    return Math.max(a, b, c);
}

const getSmall = (a, b, c) => {
    return Math.min(a, b, c);
}


module.exports = {
    getLarge: getLarge,
    getSmall: getSmall
}


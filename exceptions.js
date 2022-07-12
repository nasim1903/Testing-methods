const panic = (text) => {
    if (text == 'lizard'){
        return true
    } else {
        throw "WOAH!"
    }
}

panic("lizard")
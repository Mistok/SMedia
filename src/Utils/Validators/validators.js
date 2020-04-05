export const requiredField = value => {
    if (value ) {
        return undefined
    } else {
        return 'field is required'
    }

};

export const maxLengthCreator = (maxLength = 30) => value => {
    if (value && value.length < maxLength) {
        return undefined
    } else {
        return `post length must be more than ${maxLength} symbols`
    }

};


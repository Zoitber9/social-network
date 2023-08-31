
export const required = (value: string) => {
    if (value) return undefined
    return 'Field is required'
}


export const maxLengthCreator = (maxlength: number)=>(value: string) => {
    if (value && value.length > maxlength) return 'Max length is 30 symbols'
    return undefined
}
export const maxLength30 = (value: string) => {
    if (value && value.length > 30) return 'Max length is 30 symbols'
    return undefined
}
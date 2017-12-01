import validator from 'validator';

const maxLength = max => value =>
    value && validator.isLength(value, {min:undefined, max: max}) ? undefined : `Must be ${max} characters or less`
const minLength = min => value =>
    value && validator.isLength(value, {min:min, max: undefined}) ? undefined :`Must be ${min} characters or more`

export const required = value => (value && !validator.isEmpty(value) ? undefined : 'Required')
export const maxLength20 = maxLength(20)
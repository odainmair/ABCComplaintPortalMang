import { parseOnlyLetterAndSpace, parseLength } from '../util/inputParser';
import { checkAtLeastLength, checkEmailPattern, checkIsfilled, checkIsTrue } from '../util/inputValidator';

const registrationModel = [{
    name: 'name',
    label: 'Full Name',
    type: 'text',
    parseFun: parseOnlyLetterAndSpace,
    validators: [{
        id: 'name-length',
        isValidFun: expression => checkAtLeastLength(expression, 3),
        alert: 'Name is too short'
    }]
}, {
    name: 'email',
    label: 'Email',
    type: 'text',
    validators: [{
        id: 'mail-pattern',
        isValidFun: checkEmailPattern,
        alert: 'Email is not valid'
    }, {
        id: 'email-required',
        isValidFun: checkIsfilled,
        alert: 'Email is empty'
    }]
},{
    name: 'password',
    label: 'Password',
    type: 'password',
    validators: [ {
        id: 'password-required',
        isValidFun: checkIsfilled,
        alert: 'password is empty'
    }]
},

{
    name: 'phoneNumber',
    label: 'Phone Number',
    type: 'text',
    validators: [ {
        id: 'phoneNumber-required',
        isValidFun: checkIsfilled,
        alert: 'Phone Number is empty'
    }]
},
 {
    name: 'education',
    label: 'Education',
    type: 'select',
    options: [
        { value: '', name: 'None' },
        { value: 'primary', name: 'Primary School' },
        { value: 'secondary', name: 'Secondary School' },
        { value: 'university', name: 'University' }
    ],
    validators: [{
        id: 'education-required',
        isValidFun: checkIsfilled,
        alert: 'Education is not selected'
    }]
}, {
    name: 'gender',
    label: 'Gender',
    type: 'radio',
    options: [
        { value: 'male', name: 'Male' },
        { value: 'female', name: 'Female' }
    ],
    validators: [{
        id: 'sex-required',
        isValidFun: checkIsfilled,
        alert: 'Sex is not selected'
    }]
}, {
    name: 'address',
    label: 'Address',
    type: 'textarea',
    parseFun: expression => parseLength(expression, 2000),
    validators: [{
        id: 'address-required',
        isValidFun: checkIsfilled,
        alert: 'Address is empty'
    }]
}, {
    name: 'terms',
    label: 'Agree to terms and conditions',
    type: 'checkbox',
    validators: [{
        id: 'terms-required',
        isValidFun: checkIsTrue,
        alert: 'You must agree before submitting'
    }]
}];

export default registrationModel;
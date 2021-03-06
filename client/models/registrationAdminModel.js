import { parseOnlyLetterAndSpace, parseLength } from '../util/inputParser';
import { checkAtLeastLength, checkEmailPattern, checkIsfilled, checkIsTrue } from '../util/inputValidator';

const registrationAdminModel = [{
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
    name: 'terms',
    label: 'Agree to terms and conditions',
    type: 'checkbox',
    validators: [{
        id: 'terms-required',
        isValidFun: checkIsTrue,
        alert: 'You must agree before submitting'
    }]
}];

export default registrationAdminModel;
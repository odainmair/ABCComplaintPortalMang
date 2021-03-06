import { parseOnlyLetterAndSpace, parseLength } from '../util/inputParser';
import { checkAtLeastLength, checkEmailPattern, checkIsfilled, checkIsTrue } from '../util/inputValidator';

const newComplaintModel = [{
    name: 'complainType',
    label: 'Complain Type',
    type: 'select',
    options: [
        { value: '', name: 'Please select' },
        { value: 'Account', name: 'Account' },
        { value: 'Account Management', name: 'Account Management' },
        { value: 'Billing', name: 'Billing' },
        { value: 'DataExchange', name: 'DataExchange' },
    ],
    validators: [{
        id: 'complainType-required',
        isValidFun: checkIsfilled,
        alert: 'Complain Type is not selected'
    }]
},{
    name: 'subject',
    label: 'Subject',
    type: 'text',
    parseFun: parseOnlyLetterAndSpace,
    validators: [{
        id: 'subject-length',
        isValidFun: expression => checkAtLeastLength(expression, 3),
        alert: 'Subject is too short'
    }]
},
{
    name: 'severity',
    label: 'Severity',
    type: 'select',
    options: [
        { value: '', name: 'Please select' },
        { value: 'Low', name: 'Low' },
        { value: 'Medium', name: 'Medium ' },
        { value: 'High', name: 'High' }
    ],
    validators: [{
        id: 'Severity-required',
        isValidFun: checkIsfilled,
        alert: 'Severity is not selected'
    }]
}, 
   {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    parseFun: expression => parseLength(expression, 2000),
    validators: [{
        id: 'description-required',
        isValidFun: checkIsfilled,
        alert: 'Description is empty'
    }]
},{
    name: 'preferedLanguage',
    label: 'Preferred contact language',
    type: 'radio',
    options: [
        { value: 'English', name: 'English' },
        { value: 'Arabic', name: 'Arabic' }
    ],
    validators: [{
        id: 'preferedLanguage-required',
        isValidFun: checkIsfilled,
        alert: 'Prefered Language is not selected'
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

export default newComplaintModel;
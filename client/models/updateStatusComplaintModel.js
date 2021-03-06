import { parseOnlyLetterAndSpace, parseLength } from '../util/inputParser';
import { checkAtLeastLength, checkEmailPattern, checkIsfilled, checkIsTrue } from '../util/inputValidator';

const updateStatusComplaintModel = [{
    name: 'status',
    label: 'Status',
    type: 'select',
    options: [
        { value: '', name: 'Please select' },
        { value: 'Resolved', name: 'Resolved' },
        { value: 'Dismissed', name: 'Dismissed' },
    ],
    validators: [{
        id: 'status-required',
        isValidFun: checkIsfilled,
        alert: 'Status is not selected'
    }]
}];

export default updateStatusComplaintModel;
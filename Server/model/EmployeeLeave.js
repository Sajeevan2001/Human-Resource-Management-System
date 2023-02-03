const mongoose = require('mongoose');
const { Schema } = mongoose;

const LeaveRequestSchema = new Schema({
    empID: {
        type: String, 
        //required: true
    },
    fName: {
        type: String, 
        required: true
    },
    sDate: {
        type: String, 
        required: true
    },
    eDate: {
        type: String, 
        required: true
    },
    reason: {
        type: String, 
        required: true
    },
    status: {
        type: String, 
        required: true
    },
}, {
    collection: 'employeeLeaveRequest'
})

module.exports = mongoose.model('employeeLeaveRequest', LeaveRequestSchema);
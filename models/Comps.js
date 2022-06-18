//models/Records.js

const mongoose = require('mongoose');

const CompsSchema = new mongoose.Schema({
    comp_id: {
        type: String,
        required: true
    },
    db_entry_date: {
        type: Date
    },
    report_history: {
        type: Array,
        required: true
    },
    location: {
        type: Object
    }
});

module.exports = Comps = mongoose.model('comps', CompsSchema);

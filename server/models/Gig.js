const mongoose = require('mongoose');

const gigSchema = new mongoose.Schema({
    title: { type: String, },
    technologies: { type: String, },
    description: { type: String, },
    budget: { type: String, },
    contact_email: { type: String, },
});

const Gig = mongoose.model('Gig', gigSchema);

module.exports = Gig;

const express = require('express');
const mongoose = require('mongoose');

const Gig = mongoose.model('Gig')

module.exports = app => {
    app.get('/', (req, res) => {
        Gig.find({})
            .then(gigs => {
                res.json({
                    gigs: gigs
                });
            })
            .catch(err => console.log(err))
    })

    app.post('/add', (req, res) => {
        let {
            title,
            technologies,
            budget,
            description,
            contact_email
        } = req.body;
        let errors = [];

        // Validate Fields
        if(!title){
            errors.push({ text: 'Please add a title'});
        }
        if(!technologies){
            errors.push({ text: 'Please add some technologies'});
        }
        if(!description){
            errors.push({ text: 'Please add a description'});
        }
        if(!contact_email){
            errors.push({ text: 'Please add a contact_email'});
        }
        
        // Check for erros
        if(errors.length > 0){
            res.json({
                errors: errors,
                title : title,
                technologies: technologies,
                budget: budget,
                description: description,
                contact_email: contact_email
            });
        }else{
            !budget ? budget = 'Unknown': budget =`$${budget}`;
            technologies = technologies.toLowerCase().replace(/, /g, ',');

            Gig.create({
                title,
                technologies,
                budget,
                description,
                contact_email
            })
            .then(gig => {
                res.json({
                    succsses: true
                });
            })
            .catch(err => console.log(err))
        }
    });

    app.get('/search', (req,res) => {
        let search = req.query.search;
        Gig.find({}).where('technologies').regex(new RegExp(search, 'i'))
            .then((gig) => {
                console.log(gig);
                res.json({
                    gig: gig
                });
            })
            .catch(err => console.log(err))
    });
}
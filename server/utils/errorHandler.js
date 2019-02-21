module.exports = (errors,formHandler) => {
        let {
            title,
            technologies,
            budget,
            description,
            contact_email
        } = formHandler;
        
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
        return errors;
}
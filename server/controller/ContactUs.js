const ContactUsModel = require('../model/ContactUs');

module.exports.createContactUs = async (req, res) => {
    try {
        // Validate the request body
        const ContactUsData = ContactUsModel.create(req.body);
        console.log(req.body);
        res.status(200).json({ message: 'Contact Us data received successfully' },{ContactUsData});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
        
    }
}
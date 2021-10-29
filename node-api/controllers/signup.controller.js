// const { default: axios } = require('axios');
// const Joi = require('joi')
// const { PASS_REGEX } = require('../lib/global')
// const bcrypt = require('bcrypt');
// const { signupService, userService } = require('../services/index');
// const sendMail = require('../lib/sendgrid');

// const signup = async (req, res) => {
//     const schema = Joi.object({
//         email: Joi.string().email().required(),
//         password: Joi.string().min(4).required(),
//         firstName: Joi.string().alphanum().min(3).max(30),
//         lastName: Joi.string().alphanum().optional().allow("", null),
//         profilePic: Joi.string().optional(),
//         bannerImage: Joi.string().optional(),
//         dateOfBirth: Joi.string().optional(),
//         language: Joi.string().default('en'),
//         gender: Joi.string().optional(),
//         phone: Joi.string().optional(),
//         dialCode: Joi.string().optional(),
//         currency: Joi.object({
//             code: Joi.string(),
//             symbol: Joi.string()
//         }).optional().allow(null, ""),
//         address: Joi.object({
//             address: Joi.string().required(),
//             area: Joi.string().required(),
//             city: Joi.string().required(),
//             state: Joi.string().required(),
//             country: Joi.string().required(),
//             zipCode: Joi.number().required(),
//             ip: Joi.string().optional(),
//             latitude: Joi.string().optional(),
//             longitude: Joi.string().optional(),
//             countryCode: Joi.string().optional(),
//             note: Joi.number().optional(),

//         }).optional(),
//         device: Joi.object({
//             device: Joi.string().optional().allow('', null),
//             deviceId: Joi.string().optional().allow('', null),
//             deviceToken: Joi.string().optional().allow('', null),
//             manufacturer: Joi.string().optional().allow('', null),
//             model: Joi.string().optional().allow('', null),
//             os: Joi.string().optional().allow('', null)
//         }).optional(),
//         role: Joi.string().default('USER').allow(null, '', "USER", "ADMIN").disallow("SUPERADMIN"),
//     });

//     let schemaValidator = schema.validate(req.body);
//     if (schemaValidator.error) {
//         return res.status(400).json({
//             message: schemaValidator.error.message || "Bad Request",
//             code: 400
//         })
//     } else {
//         schemaValidator = schemaValidator.value;
//     }

//     let fullname = schemaValidator.firstName + ' ' + schemaValidator.lastName;
//     if (schemaValidator.firstName) {
//         fullname = schemaValidator.firstName;
//         if (schemaValidator.lastName) {
//             fullname = fullname + ' ' + schemaValidator.lastName
//         }
//     } else {
//         fullname = schemaValidator.email.split('@')[0]
//     }
//     const payload = {
//         ...schemaValidator,
//         status: 1,
//         fullname
//     }

//     try {
//         // validatinng for existing user
//         const conditions = { email: schemaValidator.email };
//         let existingUser = await userService.findOne(conditions);
//         if (existingUser) {
//             return res.status(409).json({
//                 message: "User already exists!",
//                 status: 409
//             })
//         }
//         // return;
//     }
//     catch (error) {
//         console.log('Caught Error', error);
//         return res.status(500).json({
//             message: 'Internal Server Error',
//             status: 500
//         })
//     }

//     const encryptedPass = await bcrypt.hash(schemaValidator.password, 10);
//     payload['password'] = encryptedPass;

//     new Promise((resolve, reject) => {
//         resolve(signupService.post(payload))
//     })
//         .then(data => {
//             return res.status(201).json({
//                 message: 'New user created successfully!',
//                 status: 201,
//                 data: { _id: data._id }
//             })
//         })
//         .catch(err => {
//             console.log(err);
//             return res.status(500).json({
//                 message: 'Internal Server Error',
//                 status: 500
//             })
//         })
// }


// // onboarding api
// const onboarding = async (req, res) => {
//     const schema = Joi.object({
//         email: Joi.string().email().required()
//     })
//     var validSchema = schema.validate(req.body);
//     if (validSchema.error) {
//         return res.status(400).json({
//             message: validSchema.error.message || "Bad Request",
//             code: 400
//         })
//     } else {
//         validSchema = validSchema.value;
//     }
//     try {
//         // validatinng for existing user
//         const conditions = { email: validSchema.email }
//         const existingUser = await userService.findOne(conditions)
//         if (existingUser) {
//             return res.status(409).json({
//                 message: "User already exists!",
//                 status: 409
//             })
//         }
//     }
//     catch (error) {
//         console.log('Caught Error', error);
//         return res.status(500).json({
//             message: 'Internal Server Error',
//             status: 500
//         })
//     }
//     const emailPayload = {
//         to: req.body.email
//     }
//     sendMail(emailPayload)
//         .then((result) => {
//             console.log('email sent', result)
//             res.status(200).send({
//                 message: "Signup email sent successfully!",
//                 status: 200
//             })
//         })
//         .catch(err => {
//             console.log(err)
//         });
// };

// module.exports = {
//     signup,
//     onboarding
// };
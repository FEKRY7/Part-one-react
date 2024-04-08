const { body , check} = require('express-validator')

const nameValidator = value => {
    const regex = /^[A-Z][a-z]{3,4}[0-9]{0,4}$/;
    return regex.test(value);
};
const emailValidator = value => {
    const regex = /^[a-zA-Z]{3,9}[0-9]{0,4}@(hotmail|gmail).com$/;
    return regex.test(value);
};

const UserMaddlwares = ()=>{
return[
    check('username').notEmpty().withMessage('Cant be Empty in UserName')
    .custom(nameValidator).withMessage('Invalid UserName domain'),
    check('email').isEmail().withMessage('The Email is Written Incorrectly')
    .custom(emailValidator).withMessage('Invalid email domain'),
    body('password').notEmpty().withMessage('Cant be Empty in Password'),
]
}

module.exports={
    UserMaddlwares
}

export const validateUserLoginForm = values => {
    const errors = {};

    if (!values.username) {
        errors.username = 'This is required';
    }
    else if (values.username.length < 6) {
        errors.username = 'Username must be greater than 6 characters';
    }
    else if (values.username.length > 15) {
        errors.username = 'Username must be less than 15 characters';
    }
    
    if (!values.password) {
        errors.password = 'This is required';
    }
    else if (values.password.length < 8) {
        errors.password = 'Password must be 8 or more characters';
    }

    return errors;
}
import validator from "validator";
export const isValidateEmail = (email: string):boolean => { 
        return validator.isEmail(email);
}
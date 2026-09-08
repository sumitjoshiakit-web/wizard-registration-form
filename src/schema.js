import {z} from "zod";
export const registrationSchema=z.object({
 firstName:z.string().trim().min(2,"First name must be at least 2 characters.").regex(/^[A-Za-z][A-Za-z '-]*$/,"Use letters, spaces, apostrophes, or hyphens only."),
 lastName:z.string().trim().min(2,"Last name must be at least 2 characters.").regex(/^[A-Za-z][A-Za-z '-]*$/,"Use letters, spaces, apostrophes, or hyphens only."),
 email:z.string().trim().email("Enter a valid email address."),
 phone:z.string().trim().regex(/^\+?[0-9 ()-]{10,18}$/,"Enter a valid phone number."),
 username:z.string().trim().min(4,"Username must be at least 4 characters.").regex(/^[A-Za-z0-9_]+$/,"Use letters, numbers, and underscores only."),
 password:z.string().min(8,"Password must be at least 8 characters.").regex(/[A-Z]/,"Include at least one uppercase letter.").regex(/[0-9]/,"Include at least one number."),
 confirmPassword:z.string(),
 terms:z.boolean().refine(v=>v===true,"You must accept the terms and conditions.")
}).refine(d=>d.password===d.confirmPassword,{path:["confirmPassword"],message:"Passwords do not match."});
export const stepFields=[
 ["firstName","lastName","email","phone"],
 ["username","password","confirmPassword","terms"]
];
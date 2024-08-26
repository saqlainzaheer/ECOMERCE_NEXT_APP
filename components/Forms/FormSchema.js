import { z } from "zod"

export const FormFieldType = {
  INPUT : "input",
  //TEXTAREA : "textarea",
 // PHONE : "phone",
  // CHECKBOX : "checkbox",
  // DATE_PICKER : "datePicker",
  // SELECT : "select",
  // SKELETON : "skeleton"
}

//sign in form schema 
export const signInFormValidation = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
    
   

})
export const signInFormDefaultValues = {
  name:"",
  email: "",
};





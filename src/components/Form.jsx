import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, ref } from 'yup';

const RegistrationSchema = object().shape({
  name: string()
    .min(3, "Too short name")
    .max(15, "Too long name")
    .required("Please enter your name"),
  
  email: string()
    .email('Please enter valid email')
    .required("Please enter your email"),
    
  password: string()
    .min(8, 'Password should contain minimum 8 symbols')
    .required("Please enter your password"),

  cpassword: string()
    .oneOf([ref('password')], "Password do NOT match!")
    .required("Please enter confirm password."),

});

const RegistrationForm = () => (
  <Formik
    initialValues={{ name: '', email: '', password: '', cpassword: '', }}
    validationSchema={RegistrationSchema}
    onSubmit={(values, { setSubmitting, resetForm }) => {
     setTimeout(() => {
      console.log('Form data:', values);
      resetForm();
      setSubmitting(false);
      alert("Registration Success");
    }, 500);
    }}
  >
    {({ isSubmitting }) => (
      <Form className='form-container'>
        <label className='header-label'>Registration Form</label>
        <Field 
            className='input-field'
            type="text" 
            name="name" 
            placeholder="Name" />
        <ErrorMessage 
            className='error-message'
            name="name" 
            component="div" />
        <Field 
            className='input-field'
            type="email" 
            name="email" 
            placeholder="Email" />
        <ErrorMessage
            className='error-message'
            name="email" 
            component="div" />
        <Field 
            className='input-field'
            type="password" 
            name="password" 
            placeholder="Password" />
        <ErrorMessage 
            className='error-message'
            name="password" 
            component="div" />
        <Field 
            className='input-field'
            type="password" 
            name="cpassword" 
            placeholder="Confirm Password" />
        <ErrorMessage
            className='error-message' 
            name="cpassword" 
            component="div" />
        <button 
            className='button' 
            type="submit" 
            disabled={isSubmitting}
        >
        {isSubmitting ? "Sending..." : "Registration"}
        </button>
      </Form>
    )}
  </Formik>
);

export default RegistrationForm;
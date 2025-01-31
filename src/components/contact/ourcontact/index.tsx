import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function ContactForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 5 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format try again")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Only numbers are allowed")
      .min(10, "Phone number must be at least 10 digits")
      .required("Phone number is required"),
    message: Yup.string()
      .min(10, "Message must be at least 20 characters")
      .required("Message is required"),
  });

  const initialFormValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-6 mt-[6rem]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-sm sm:text-base md:text-lg font-light w-full md:w-1/2 lg:w-1/3 mx-auto">
          At Adaim, we are eager to hear from you and explore the endless
          possibilities for your digital success.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <Formik
          initialValues={initialFormValues}
          validationSchema={validationSchema}
          onSubmit={(Values, { resetForm }) => {
            console.log(" Form Submitted!");
            resetForm();
            alert("Form Submitted Successfully!");
          }}
        >
          {({ values, isSubmitting }) => {
            console.log("Check the value", values);

            return (
              <Form className="space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-lg font-medium">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-lg font-medium">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-lg font-medium">
                    Phone Number
                  </label>
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-lg font-medium">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Enter your message"
                    rows={5}
                    className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-[#F35542] focus:outline-none focus:ring-2 focus:ring-red-500"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Send"}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default ContactForm;

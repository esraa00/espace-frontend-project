import { ErrorMessage, Field, Form, Formik } from "formik";
import Label from "../Label/Label";
import { graphql } from "relay-runtime";
import { useMutation } from "react-relay";

type FormErrors = {
  displayName?: string;
  username?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
};

const SignUpFormMutation = graphql`
  mutation SignUpFormMutation(
    $displayName: String!
    $username: String!
    $email: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    signup(
      input: {
        displayName: $displayName
        username: $username
        email: $email
        password: $password
        passwordConfirmation: $passwordConfirmation
      }
    ) {
      errors
    }
  }
`;

export default function SignUpForm() {
  const initialValues = {
    displayName: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  const [commitMutation, isMutationInFlight] = useMutation(SignUpFormMutation);
  return (
    <div className="page-wrapper">
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: FormErrors = {};

          if (!values.displayName) {
            errors.displayName = "Required";
          }

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.username) {
            errors.username = "Required";
          }

          if (!values.password) {
            errors.password = "Required";
          }

          if (
            values.password != values.password_confirmation ||
            !values.password
          ) {
            errors.password_confirmation = "Doesn't match Password";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          commitMutation({
            variables: {
              displayName: values.displayName,
              username: values.username,
              email: values.email,
              password: values.password,
              passwordConfirmation: values.password_confirmation,
            },
          });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <Label label="displayName" />
            <Field type="text" name="displayName" className="field" />
            <ErrorMessage
              name="displayName"
              component="div"
              className="error-message"
            />

            <Label label="username" />
            <Field type="text" name="username" className="field" />
            <ErrorMessage
              name="username"
              component="div"
              className="error-message"
            />

            <Label label="email" />
            <Field type="email" name="email" className="field" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />

            <Label label="password" />
            <Field type="password" name="password" className="field" />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />

            <Label label="confirm password" />
            <Field
              type="password"
              name="password_confirmation"
              className="field"
            />
            <ErrorMessage
              name="password_confirmation"
              component="div"
              className="error-message"
            />

            <button type="submit" disabled={isSubmitting} className="mt-5">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

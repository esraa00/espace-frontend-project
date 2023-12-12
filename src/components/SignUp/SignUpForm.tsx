import { ErrorMessage, Field, Form, Formik } from "formik";
import Label from "../Label/Label";
import { graphql } from "relay-runtime";
import { useMutation } from "react-relay";

type FormErrors = {
  username?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
};

const SignUpFormMutation = graphql`
  mutation SignUpFormMutation(
    $username: String!
    $email: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    signup(
      input: {
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
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  const [commitMutation, isMutationInFlight] = useMutation(SignUpFormMutation);
  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors: FormErrors = {};

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
        <Form>
          <Label label="username" />
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" />

          <Label label="email" />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />

          <Label label="password" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />

          <Label label="confirm password" />
          <Field type="password" name="password_confirmation" />
          <ErrorMessage name="password_confirmation" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

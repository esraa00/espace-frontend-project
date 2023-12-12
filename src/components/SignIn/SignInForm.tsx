import { ErrorMessage, Field, Form, Formik } from "formik";
import Label from "../Label/Label";
import { graphql } from "relay-runtime";
import { useMutation } from "react-relay";

type FormErrors = {
  usernameOrEmail?: string;
  password?: string;
};

const SignInFormMutation = graphql`
  mutation SignInFormMutation($usernameOrEmail: String!, $password: String!) {
    signin(input: { usernameOrEmail: $usernameOrEmail, password: $password }) {
      errors
      bearerToken
    }
  }
`;

export default function SignInForm() {
  const initialValues = {
    usernameOrEmail: "",
    password: "",
  };
  const [commitMutation, isMutationInFlight] = useMutation(SignInFormMutation);
  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors: FormErrors = {};

        if (!values.usernameOrEmail) {
          errors.usernameOrEmail = "Required";
        }

        if (!values.password) {
          errors.password = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        commitMutation({
          variables: {
            usernameOrEmail: values.usernameOrEmail,
            password: values.password,
          },
          onCompleted(response, errors) {
            if (response.signin.errors.length == 0) {
              localStorage.setItem(
                "Authorization",
                response.signin.bearerToken
              );
            }
          },
        }),
          setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Label label="Username Or Email" />
          <Field type="text" name="usernameOrEmail" />
          <ErrorMessage name="usernameOrEmail" component="div" />

          <Label label="password" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

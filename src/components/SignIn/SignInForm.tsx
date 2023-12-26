import { ErrorMessage, Field, Form, Formik } from "formik";
import Label from "../Label/Label";
import { graphql } from "relay-runtime";
import { useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Error from "../Error/Error";

type FormErrors = {
  usernameOrEmail?: string;
  password?: string;
};

const SignInFormMutation = graphql`
  mutation SignInFormMutation($usernameOrEmail: String!, $password: String!) {
    signin(
      input: {
        user: { usernameOrEmail: $usernameOrEmail, password: $password }
      }
    ) {
      errors
      bearerToken
    }
  }
`;

export default function SignInForm() {
  let navigate = useNavigate();

  const initialValues = {
    usernameOrEmail: "",
    password: "",
  };

  const [errors, setErrors] = useState([]);
  const [commitMutation, isMutationInFlight] = useMutation(SignInFormMutation);
  return (
    <div className="page-wrapper">
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
          setErrors([]);
          commitMutation({
            variables: {
              usernameOrEmail: values.usernameOrEmail,
              password: values.password,
            },
            onCompleted(response) {
              if (response.signin.errors.length != 0) {
                setErrors(response.signin.errors);
              } else {
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
          <Form className="form">
            <Label label="Username Or Email" />
            <Field type="text" name="usernameOrEmail" className="field" />
            <ErrorMessage
              name="usernameOrEmail"
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-5 mb-5 px-3 py-1.5 bg-green-400 z-40"
            >
              Submit
            </button>
            {errors.length != 0 &&
              errors.map((error) => {
                return <Error errorMessage={error} key={error} />;
              })}
          </Form>
        )}
      </Formik>
    </div>
  );
}

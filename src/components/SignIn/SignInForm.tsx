import { ErrorMessage, Field, Form, Formik } from "formik";
import Label from "../Label/Label";
import { graphql } from "relay-runtime";
import { useMutation } from "react-relay";
import { Navigate, useNavigate } from "react-router-dom";

type FormErrors = {
  usernameOrEmail?: string;
  password?: string;
};

const SignInFormMutation = graphql`
  mutation SignInFormMutation($usernameOrEmail: String!, $password: String!) {
    signin(input: { usernameOrEmail: $usernameOrEmail, password: $password }) {
      errors
    }
  }
`;

export default function SignInForm() {
  let navigate = useNavigate();

  const initialValues = {
    usernameOrEmail: "",
    password: "",
  };
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
          commitMutation({
            variables: {
              usernameOrEmail: values.usernameOrEmail,
              password: values.password,
            },
            onCompleted(response, errors) {
              console.log("response ", response);
              console.log("response.headers ", response.headers);
              if (response.signin.errors.length == 0) {
                console.log("errors", errors);
                // localStorage.setItem(
                //   "Authorization",
                //   response.headers["Authorization"]
                // );
                // <Navigate to="/dashboard" replace={true} />;
                return navigate("http://localhost:5173/");
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
              className="mt-5 px-3 py-1.5 bg-green-400 z-40"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

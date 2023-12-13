import { ErrorMessage, Field, Form, Formik } from "formik";
import { graphql, useMutation } from "react-relay";
import Label from "../components/Label/Label";

type FormErrors = {
  displayName?: string;
  username?: string;
  email?: string;
  currentPassword?: string;
  newPassword?: string;
  newPasswordConfirmation?: string;
};

const EditUserMutation = graphql`
  mutation EditUserMutation(
    $displayName: String!
    $username: String!
    $email: String!
    $currentPassword: String
    $newPassword: String
    $newPasswordConfirmation: String
  ) {
    editUser(
      input: {
        displayName: $displayName
        username: $username
        email: $email
        currentPassword: $currentPassword
        newPassword: $newPassword
        newPasswordConfirmation: $newPasswordConfirmation
      }
    ) {
      errors
    }
  }
`;

export default function EditUser() {
  const initialValues = {
    displayName: "",
    username: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    newPasswordConfirmation: "",
  };

  const [commitMutation, isMutationInFlight] = useMutation(EditUserMutation);

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

          if (values.currentPassword && !values.newPassword) {
            errors.newPassword = "Required if current password exists";
          }

          if (
            (values.newPassword && !values.newPasswordConfirmation) ||
            values.newPassword != values.newPasswordConfirmation
          ) {
            errors.newPasswordConfirmation = "doesn't match new password!";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          commitMutation({
            variables: {
              displayName: values.displayName,
              username: values.username,
              email: values.email,
              currentPassword: values.currentPassword,
              newPassword: values.newPassword,
              newPasswordConfirmation: values.newPasswordConfirmation,
            },
          });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <Label label="display name" />
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

            <Label label="current password" />
            <Field type="password" name="currentPassword" className="field" />
            <ErrorMessage
              name="currentPassword"
              component="div"
              className="error-message"
            />

            <Label label="new password" />
            <Field type="password" name="newPassword" className="field" />
            <ErrorMessage
              name="newPassword"
              component="div"
              className="error-message"
            />

            <Label label="confirm new password" />
            <Field
              type="password"
              name="newPasswordConfirmation"
              className="field"
            />
            <ErrorMessage
              name="newPasswordConfirmation"
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

import Formik, { ErrorMessage, Field, Form } from "formik";
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
    $display_name: String!
    $username: String!
    $email: String!
    $current_password: String
    $new_password: String
    $new_password_confirmation: String
  ) {
    edit_user(
      input: {
        display_name: $display_name
        username: $username
        email: $email
        current_password: $current_password
        new_password: $new_password
        new_password_confirmation: $new_password_confirmation
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

  // const [commitMutation, isMutationInFlight] = useMutation(EditUserMutation);

  return (
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
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // commitMutation({
        //   variables: {
        //     username: values.username,
        //     email: values.email,
        //     password: values.password,
        //     passwordConfirmation: values.password_confirmation,
        //   },
        // });
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Label label="display name" />
          <Field type="text" name="displayName" />
          <ErrorMessage name="displayName" component="div" />

          <Label label="username" />
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" />

          <Label label="email" />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />

          <Label label="current password" />
          <Field type="password" name="currentPassword" />
          <ErrorMessage name="currentPassword" component="div" />

          <Label label="new password" />
          <Field type="password" name="newPassword" />
          <ErrorMessage name="newPassword" component="div" />

          <Label label="confirm new password" />
          <Field type="password" name="newPasswordConfirmation" />
          <ErrorMessage name="newPasswordConfirmation" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

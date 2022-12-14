import Text from "./Text";
import { View, Pressable } from "react-native";
import { Formik } from "formik";
import { StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";
import * as yup from "yup";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0366d6",
    height: 40,
    margin: 5,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },

  text: {
    color: "white",
  },
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput name="username" placeholder="username" />
          <FormikTextInput name="password" placeholder="password" />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.text}>Sign In</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;

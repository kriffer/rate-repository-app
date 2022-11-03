import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  errorInput: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: "#d73a4a",
    borderRadius: 5,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return (
    <NativeTextInput
      style={error ? styles.errorInput : textInputStyle}
      {...props}
    />
  );
};

export default TextInput;

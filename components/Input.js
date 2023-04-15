import { StyleSheet, TextInput, Text, View, Image } from "react-native";

export const Input = ({
  style,
  placeholder,
  form,
  field,
  keyboardType,
  secureTextEntry,
  autoCapitalize,
  multiline,
  numberOfLines,
  textAlignVertical,
  editable,
  maxLength,
  onBlur,
  inputStyle,
  assistiveText,
  image,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        ...style,
      }}
    >
      <View style={styles.sectionStyle}>
        {image ? <Image source={image} style={styles.imageStyle} /> : ''}

        <TextInput
          style={{ ...styles.input, ...inputStyle }}
          placeholder={placeholder}
          value={form.values[field]}
          onChangeText={form.handleChange(field)}
          onBlur={onBlur || form.handleBlur(field)}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          numberOfLines={numberOfLines}
          textAlignVertical={textAlignVertical}
          editable={editable}
          maxLength={maxLength}
        />
      </View>
      {form.errors[field] && form.touched[field] && (
        <Text style={{ ...styles.text, ...assistiveText }}>
          {form.errors[field]}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },
  text: {
    color: "B8B5C3",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 18,
  },
  imageStyle: {
    resizeMode: "stretch",
    alignItems: "center",
  },
});

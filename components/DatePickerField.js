import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import DatePicker from "react-native-datepicker";

const DatePickerField = ({ label, name, form, image }) => {
  const date = form.values[name];

  return (
    <View style={styles.container}>
      {image ? <Image source={image} style={styles.imageStyle} /> : ''}

      <DatePicker
        date={date}
        mode="date"
        placeholder="Data de nascimento"
        format="DD/MM/YYYY"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        useNativeDriver={false}
        customStyles={{
          dateInput: styles.dateInput,
          dateText: styles.dateText,
          placeholderText: styles.placeholderText,
        }}
        onDateChange={(selectedDate) => form.setFieldValue(name, selectedDate)}
        showIcon={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    display: "flex",
    alignItems: "flex-start",
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 18,
  },
  dateInput: {
    borderWidth: 0,
    borderBottomWidth: 0,
    paddingLeft: 0,
    display: "flex",
    alignItems: "flex-start",
    backgroundColor: 'white',
    alignSelf: 'flex-start',
  },
  dateText: {
    color: "black",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
    display: "flex",
    alignItems: "flex-start",
  },
  placeholderText: {
    color: "#B8B5C3",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
    display: "flex",
    alignItems: "center",
  },
  imageStyle: {
    resizeMode: "stretch",
    alignItems: "center",
    marginRight: 12
  },
});

export default DatePickerField;

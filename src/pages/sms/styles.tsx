import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff'
  },
  otpInput: {
    height: 74,
    width: 63,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 42,
    fontFamily: 'InterBold',
    borderColor: 'black',
    backgroundColor: '#F2F3F5',
    borderRadius: 13
  },
  selectedContainer: {
    borderColor: '#0075CA'
  },
  label: {
    fontFamily: 'InterRegular',
    fontSize: 14,
    color: '#818C99',
    textAlign: 'center'
  },
  phoneLabel: {
    fontFamily: 'InterMedium',
    fontSize: 14,
    color: '#000000',
    textAlign: 'center'
  }
})
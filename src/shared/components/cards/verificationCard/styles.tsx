import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#001C3D0D',
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 16
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  iconContainer: {
    backgroundColor: '#0075CA1A',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 10
  },
  header: {
    fontFamily: 'InterMedium',
    color: '#000000',
    fontSize: 14
  },
  label: {
    fontFamily: 'InterRegular',
    fontSize: 12,
    color: '#818C99'
  },
  inputContainer: {
    backgroundColor: '#f2f3f5',
    borderColor: '#818C99',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 8
  }
})
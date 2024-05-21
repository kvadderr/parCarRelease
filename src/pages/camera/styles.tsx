import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#0000007D',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  mask: {
    width: 250,
    height: 350,
    borderRadius: 10,
    backgroundColor: '#ffffff00',
    borderWidth: 1,
    borderColor: '#fff',
    zIndex: 2
  },
  headerText: {
    fontFamily: 'InterSemiBold',
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center'
  },
  labelText: {
    fontFamily: 'InterRegular',
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'center'
  },
})
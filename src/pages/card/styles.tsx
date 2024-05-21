import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    gap: 32,
    flex: 1
  },
  header: {
    fontFamily: 'InterBold',
    fontSize: 24,
    color: '#000000',
    textAlign: 'center',
    alignSelf: 'center',
    maxWidth: 300
  },
  headerModalText: {
    fontFamily: 'InterSemiBold',
    fontSize: 20,
    maxWidth: 270,
    textAlign: 'center',
    color: '#000000'
  },
  labelModalText: {
    fontFamily: 'InterRegular',
    fontSize: 14,
    color: '#818C99'
  },
  indicatorContainer: {
    backgroundColor: '#E6F2FA', 
    width: 72, height: 73, 
    alignSelf: 'center', 
    borderRadius: 24, 
    justifyContent: 'center'
  }
})
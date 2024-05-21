import BouncyCheckbox from "react-native-bouncy-checkbox";

type Props = {
  children: React.ReactNode
  setIsChecked: (value: boolean) => void;
}

const Checkbox = ({ children, setIsChecked }: Props) => {
  return (
    <BouncyCheckbox
      size={20}
      fillColor="#0075CA"
      unFillColor="#f2f3f5"
      textComponent={children}
      innerIconStyle={{  borderRadius: 12 }}
      onPress={(isChecked: boolean) => { setIsChecked(isChecked) }}
    />
  )
}

export default Checkbox
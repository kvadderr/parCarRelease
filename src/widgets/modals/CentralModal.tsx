import { View, TouchableOpacity, Modal } from "react-native"

type Props = {
  isVisible: boolean,
  onClose: () => void,
  children: React.ReactNode
}

const CentralModal = (props: Props) => {

  const { isVisible, onClose, children } = props


  return (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          justifyContent: 'center'
        }}
        activeOpacity={1}
      >
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 24,
            padding: 16,
            width: 96,
            height: 96,
            justifyContent: 'center',
            alignSelf: 'center'
          }}
        >
          <TouchableOpacity activeOpacity={1} onPress={(e) => e.stopPropagation}>
            {children}
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

export default CentralModal
import { View } from 'react-native'
import Logo from '../assets/logo.svg'

export const Header = () => {
  return (
    <View className="flex-1 items-center bg-gray-700 p-12">
      <Logo />
    </View>
  )
}

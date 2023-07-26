import { StatusBar } from 'expo-status-bar'

import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { Home } from './src/pages/Home'
import { View } from 'react-native'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <View className="flex-1 bg-gray-600">
      <Home />
      <StatusBar style="light" translucent />
    </View>
  )
}

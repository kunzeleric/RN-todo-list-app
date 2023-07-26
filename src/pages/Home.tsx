import { View } from 'react-native'
import { Header } from '../components/Header'
import { Taskboard } from '../components/Taskboard'

export const Home = () => {
  return (
    <View>
      <Header />
      <Taskboard />
    </View>
  )
}

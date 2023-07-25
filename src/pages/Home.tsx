import { ScrollView, View } from 'react-native'
import { Header } from '../components/Header'
import { TaskInput } from '../components/TaskInput'

export const Home = () => {
  return (
    <ScrollView>
      <Header />
      <TaskInput />
    </ScrollView>
  )
}

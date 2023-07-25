import { View, TextInput, TouchableOpacity } from 'react-native'
import AddIcon from '../assets/add-icon.svg'

export const TaskInput = () => {
  return (
    <View className="relative w-screen -translate-y-8 flex-row items-center gap-2 px-4">
      <TextInput
        placeholder="Adicione uma nova tarefa"
        className="flex-1 rounded-lg border-2 border-gray-700 bg-gray-500 px-6 py-4 font-body text-lg text-gray-50"
        placeholderTextColor={'#808080'}
      />
      <TouchableOpacity className="rounded-lg bg-blue-100 p-5">
        <AddIcon />
      </TouchableOpacity>
    </View>
  )
}

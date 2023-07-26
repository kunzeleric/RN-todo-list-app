import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { TaskType } from './Taskboard'
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'

export interface TaskProps {
  item: TaskType
  onCheck: (item: TaskType) => void
  onRemove: (item: TaskType) => void
}

export const Task = ({ item, onCheck, onRemove }: TaskProps) => {
  return (
    <View className="mb-2 flex-row items-center justify-between rounded-lg bg-gray-500 px-4 py-4">
      <TouchableWithoutFeedback onPress={() => onCheck(item)}>
        {item.isCheck ? (
          <AntDesign name="checkcircle" size={24} color="#5E60CE" />
        ) : (
          <Entypo name="circle" size={24} color="#4EA8DE" />
        )}
      </TouchableWithoutFeedback>
      <Text
        className="flex-1 pl-2 text-lg text-gray-100"
        style={
          item.isCheck
            ? { textDecorationLine: 'line-through', color: '#808080' }
            : { textDecorationLine: 'none' }
        }
      >
        {item.nameTask}
      </Text>
      <TouchableWithoutFeedback onPress={() => onRemove(item)}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={24}
          color="#808080"
        />
      </TouchableWithoutFeedback>
    </View>
  )
}

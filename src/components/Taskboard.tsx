import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { EmptyBoard } from './EmptyBoard'
import { Task } from './Task'
import AddIcon from '../assets/add-icon.svg'

export interface TaskType {
  id: string
  nameTask: string
  isCheck: boolean
}

export const Taskboard = () => {
  const [taskName, setTaskName] = useState('')
  const [tasks, setTasks] = useState<TaskType[]>([])

  const totalTasksDone = tasks.reduce((acc, task) => {
    if (task.isCheck) {
      acc++
    }
    return acc
  }, 0)

  const handleAddTask = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now().toString(), nameTask: taskName, isCheck: false },
    ])
    setTaskName('')
  }

  const handleCheckTask = (taskToBeChecked: TaskType) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskToBeChecked.id
          ? { ...task, isCheck: !task.isCheck }
          : task,
      ),
    )
  }

  const handleRemoveTask = (taskToBeRemoved: TaskType) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => taskToBeRemoved.id !== task.id),
    )
  }

  const renderItem = ({ item }: { item: TaskType }) => {
    return (
      <Task item={item} onCheck={handleCheckTask} onRemove={handleRemoveTask} />
    )
  }

  return (
    <>
      {/* Input Area */}
      <View className="-translate-y-8 flex-row items-center gap-2 px-4">
        <TextInput
          placeholder="Adicione uma nova tarefa"
          className="flex-1 rounded-lg border-[1px] border-gray-700 bg-gray-500 px-6 py-4 font-body text-lg text-gray-50"
          placeholderTextColor={'#808080'}
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity
          onPress={handleAddTask}
          className="rounded-lg bg-blue-100 px-5 py-5"
        >
          <AddIcon />
        </TouchableOpacity>
      </View>

      {/* TaskBoard Header */}
      <View className="px-6">
        <View className="flex-row items-center justify-between pb-6">
          <View className="flex-row items-center gap-2">
            <Text className="font-title text-blue-50">Criadas</Text>
            <Text className="rounded-full bg-gray-400 px-2 py-[1px] font-title text-white">
              {tasks.length}
            </Text>
          </View>
          <View className="flex-row items-center gap-2">
            <Text className="font-title text-purple-50">Concluídas</Text>
            <Text className="rounded-full bg-gray-400 px-2 py-[1px] font-title text-white">
              {totalTasksDone}
            </Text>
          </View>
        </View>

        {/* Taskboard */}
        <FlatList
          renderItem={renderItem}
          data={tasks}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => <EmptyBoard />}
        ></FlatList>
      </View>
    </>
  )
}

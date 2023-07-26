import { View, Text } from 'react-native'
import EmptyBoardImg from '../assets/emptyboard.svg'
import React from 'react'

export const EmptyBoard = () => {
  return (
    <View className="border-t-[1px] border-gray-400">
      <View className="gap- items-center pt-12">
        <EmptyBoardImg />
        <View className="items-center">
          <Text className="font-title text-gray-300">
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text className="leading-6 text-gray-300">
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      </View>
    </View>
  )
}

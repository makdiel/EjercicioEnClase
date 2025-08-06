import { View, Text } from 'react-native'
import React from 'react'
import { contextListaEstudiante } from '../Provider/ListaEstudianteProvider'

export default function ListaEstudiantes() {
    const {listaEstudiantes} = contextListaEstudiante()
  return (
    <View>
      <Text>ListaEstudiantes</Text>
          {
              listaEstudiantes.map((item)=>(
                  <Text key={item.id}> Nombre Tarea: {item.id}  / {item.name}</Text>
              ))
            }
    </View>
  )
}
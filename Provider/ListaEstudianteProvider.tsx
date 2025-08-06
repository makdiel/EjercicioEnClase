import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { Plantilla } from '../Modelos/Plantilla'
import { Estudiante } from '../Modelos/Estudiante'
import {estudiantesContext} from '../Context/ListaEstudiantesContext'

export default function ListaEstudianteProvider({children}:Plantilla) {
    const [listaEstudiantes, SetListaEstudiante] = useState<Estudiante[]>([]);
    function actualizarListaEstudiantes(estudianteOb:Estudiante){
        SetListaEstudiante([...listaEstudiantes,estudianteOb])
    }
  return (
    <estudiantesContext.Provider value={{listaEstudiantes,actualizarListaEstudiantes}}>
        {children}
    </estudiantesContext.Provider>
  )
}

export function contextListaEstudiante(){
    return useContext(estudiantesContext)
}
import { View, Text , TextInput, Button, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Estudiante } from '../Modelos/Estudiante'
import { contextListaEstudiante } from '../Provider/ListaEstudianteProvider'
import { estudiantesContext } from '../Context/ListaEstudiantesContext'

export default function ListaEstudianteComponents() {

    const {actualizarListaEstudiantes,listaEstudiantes} = contextListaEstudiante()
    const [id, SetId] = useState<string>('')
    const [nombre, SetNombre] = useState<string>('')

    function agregarNuevoEstudiante(){
        let estudiante : Estudiante= {
            id: parseInt(id),
            name : nombre

        }
        actualizarListaEstudiantes(estudiante);
        Alert.alert('Agregado')
    }

    useEffect(()=>{
        console.log(listaEstudiantes)
    },[listaEstudiantes]);

  return (
    <View>
       <TextInput 
               placeholder='Agregar id de estudiante'
               value= {id}
               onChangeText={SetId}         
               >
        </TextInput>

        <TextInput 
               placeholder='Agregar nombre de estudiante'
               value= { nombre }
               onChangeText={SetNombre}         
               >
        </TextInput>
             <Button title='Agregar Estudiante' onPress={agregarNuevoEstudiante}></Button>
         
    </View>
  )
}
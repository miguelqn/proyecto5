import './App.css'
import { useState } from 'react'
import data from './components/data.json'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  // De momento usando datos hardcodeados en un JSON
  //const [tareas, setTareas] = useState(data)
  const [tareas, setTareas] = useState([])

  const onTareaCompletada = (id) => {
    //console.log('Tarea marcada: ' + id)
    /* Iteramos las tareas buscando la que coincida con el parametro id,
    se hace una copia modificando el valor de completada*/
    setTareas(tareas.map((tarea) => {
      return tarea.id === Number(id) 
      ? {...tarea, completada: !tarea.completada}
      : {...tarea}
    }))
  }

  const onEliminarTarea = (id) => {
    //console.log('Tarea borrada: ' + id)
    /* Se hace una copia de la lista, filtrando por el id de la tarea eliminada.
    Se mantienen todas aquellas que tengan un id diferente al del parametro */
    setTareas([...tareas].filter(tarea => tarea.id !== id))
  }

  const addTarea = (nuevaTarea) => {
    //console.log('Nueva tarea', nuevaTarea)
    /* Creamos una nueva tarea, con el id en base a la fecha para simplificar, 
    por defecto el completado va en falso */
    let newTarea = {id : +new Date(), nombre: nuevaTarea, completada: false}
    // Seteamos las tareas con la nueva tarea ingresada
    setTareas([...tareas, newTarea])
  }

  return (
    <>
      <h1>ToDo - List</h1>
      <div>
          <TaskForm addTarea={addTarea}/>
          <TaskList 
          tareas={tareas} 
          onTareaCompletada={onTareaCompletada} 
          onEliminarTarea={onEliminarTarea}/>
      </div>
    </>
  )
}

export default App

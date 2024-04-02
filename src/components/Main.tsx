import { MainContainer } from './Main.styles'
import { PlusCircle } from '@phosphor-icons/react'
import { SectionTasks } from './SectionTasks'
import { FormEvent, useState } from 'react'
import { TaskProps } from './Task'

export function Main() {
  const [listTask, setListTask] = useState(Array<TaskProps>)
  const [valueInput, setValueInput] = useState('')

  function handleNewTask(event: FormEvent) {
    event.preventDefault()
    const newTask: TaskProps = {
      commentTask: valueInput,
      statusTask: 'notChecked',
    }

    setListTask([...listTask, newTask])
    setValueInput('')
  }

  function newList(list: Array<TaskProps>) {
    setListTask(list)
  }

  return (
    <MainContainer>
      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput}
          required
        />
        <button type="submit">
          Criar
          <PlusCircle size={16} weight="bold" />
        </button>
      </form>
      <SectionTasks listTask={listTask} newListTask={newList} />
    </MainContainer>
  )
}

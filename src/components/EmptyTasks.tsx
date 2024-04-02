import clipboard from '../assets/clipboard.svg'
import { EmptyTasksContainer } from './EmptyTasks.styles'

export function EmptyTasks() {
  return (
    <EmptyTasksContainer>
      <img src={clipboard} alt="" />
      <strong>
        <p>Você ainda não tem tarefas cadastradas</p>
      </strong>
      <p>Crie uma tarefa e organize seus itens a fazer</p>
    </EmptyTasksContainer>
  )
}

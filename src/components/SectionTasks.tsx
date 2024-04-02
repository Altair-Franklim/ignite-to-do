import { useState } from 'react'
import { EmptyTasks } from './EmptyTasks'
import { SectionTasksContainer } from './SectionTasks.styles'
import { Task, TaskProps } from './Task'

interface SectionTasksProps {
  listTask: TaskProps[]
  newListTask: (list: Array<TaskProps>) => void
}

export function SectionTasks({ listTask, newListTask }: SectionTasksProps) {
  const isEmptyList = listTask.length === 0
  const createdTasks = listTask.length

  const [finesheTask, setFinesheTask] = useState(0)

  function FinesheTask(comment: string) {
    const element = listTask.find((item) => item.commentTask === comment)

    if (element!.statusTask === 'checked') {
      element!.statusTask = 'notChecked'
    } else {
      element!.statusTask = 'checked'
    }
    const fineshed = listTask.filter((task) => task.statusTask === 'checked')

    setFinesheTask(fineshed.length)
  }

  function DeleteTask(task: TaskProps) {
    const listDeletedTask = listTask.filter(
      (itemList) => itemList.commentTask !== task.commentTask,
    )
    newListTask(listDeletedTask)

    const fineshed = listDeletedTask.filter(
      (item) => item.statusTask === 'checked',
    )
    setFinesheTask(fineshed.length)
  }

  return (
    <SectionTasksContainer>
      <div>
        <p>
          Tarefas criadas
          <span>{createdTasks}</span>
        </p>
        <p>
          Concluídas
          <span>
            {finesheTask} de {createdTasks}
          </span>
        </p>
      </div>
      <fieldset>
        {isEmptyList ? (
          <EmptyTasks />
        ) : (
          listTask.map((task) => (
            <Task
              key={task.commentTask}
              task={task}
              onDeleteTask={DeleteTask}
              onFineshedTask={FinesheTask}
            />
          ))
        )}
      </fieldset>
    </SectionTasksContainer>
  )
}

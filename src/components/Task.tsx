import { Trash } from '@phosphor-icons/react'
import { TaskContainer } from './Task.styles'
import { useState } from 'react'

export interface TaskProps {
  commentTask: string
  statusTask: string
}

interface TaskElement {
  task: TaskProps
  onDeleteTask: (task: TaskProps) => void
  onFineshedTask: (comment: string) => void
}

export function Task({ task, onFineshedTask, onDeleteTask }: TaskElement) {
  const [status, setStatus] = useState('notChecked')

  function onCheckTask() {
    setStatus(status === 'notChecked' ? 'checked' : 'notChecked')
    onFineshedTask(task.commentTask)
  }

  function onDelete() {
    onDeleteTask(task)
  }

  return (
    <TaskContainer $status={status}>
      <input type="checkbox" name="taskItem" onChange={onCheckTask} />
      <p>{task.commentTask}</p>
      <button onClick={onDelete}>
        <Trash />
      </button>
    </TaskContainer>
  )
}

import React, { memo, useState } from 'react';

import { useBoard } from '../../../../containers/board';

import { Button } from '../../../Button';
import Input from '../../../Input';

import './styles.scss'

const Bottom: React.FC = () => {
  const [newTask, setNewTask] = useState("");

  const { actions } = useBoard();

  const onSumit = (e: any) => {
    e.preventDefault();

    if (newTask.trim() === '') return;

    actions.addNew(newTask);
    setNewTask('');
  }

  return (
    <form onSubmit={onSumit} className="bottom-form">
      <Input onChange={setNewTask} placeholder="Add Task" value={newTask} />
      <Button variant="blue" type="submit">+</Button>
    </form>
  )
}

export default memo(Bottom)

import React, { useState } from 'react';

import { Button } from '../../../Button';
import Input from '../../../Input';

import './styles.scss'


export const Bottom: React.FC = () => {
  const [newTask, setNewTask] = useState("");

  const onSumit = (e: any) => {
    e.preventDefault();
    alert(`newTask: ${newTask}`);
    setNewTask('');
  }

  return (
    <form onSubmit={onSumit} className="bottom-form">
      <Input onChange={setNewTask} placeholder="Add Task" value={newTask} />
      <Button variant="blue" type="submit">+</Button>
    </form>
  )
}

import React from 'react';

import { Column } from '../../../Column';

import './styles.scss'


export const Board: React.FC = () => {
  return (
    <div className="board-wrapper">
      <Column />
      <Column />
      <Column />
    </div>
  )
}

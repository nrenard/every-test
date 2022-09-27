import React from 'react';

import { StatusEnum } from '../../../../containers/board/dtos';

import { Column } from '../../../Column';

import './styles.scss'


export const Board: React.FC = () => {
  return (
    <div className="board-wrapper">
      <Column status={StatusEnum.TO_DO} />
      <Column status={StatusEnum.IN_PROGRESS} />
      <Column status={StatusEnum.DONE} />
    </div>
  )
}

import React, { memo } from 'react';

import { StatusEnum } from '../../../../containers/board/dtos';

import { Column } from '../../../Column';

import './styles.scss'


const Board: React.FC = () => {
  return (
    <div className="board-wrapper">
      <Column status={StatusEnum.TO_DO} />
      <Column status={StatusEnum.IN_PROGRESS} />
      <Column status={StatusEnum.DONE} />
    </div>
  )
}

export default memo(Board)

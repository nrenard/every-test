import React from 'react'

import { IChangeStatus, StatusEnum } from '../../containers/dashboard/dtos'

import { Button } from '../Button'

import './styles.scss'

interface IProps {
  item: string
  status: StatusEnum
  handleNext: (param: IChangeStatus) => void
  handlePrevius: (param: IChangeStatus) => void
}

export const ColumnItem: React.FC<IProps> = ({ item, status, handleNext, handlePrevius }) => {
  return(
    <div className="item">
      <Button variant="red" disabled={status === StatusEnum.TO_DO} onClick={handlePrevius}>
        {'<'}
      </Button>

        <p className="text" title={item}>{item}</p>

      <Button variant="green" onClick={handleNext} disabled={status === StatusEnum.DONE}>
        {'>'}
      </Button>
    </div>
  )
}


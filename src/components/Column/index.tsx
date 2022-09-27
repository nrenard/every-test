import React from 'react'

import { useBoard } from '../../containers/dashboard'
import { StatusEnum, IChangeStatus } from '../../containers/dashboard/dtos'

import { ColumnItem } from '../ColumnItem'

import './styles.scss'

interface IProps {
  status: StatusEnum
}

const mapColumnName = {
  [StatusEnum.TO_DO]: 'To Do',
  [StatusEnum.IN_PROGRESS]: 'In Progress',
  [StatusEnum.DONE]: 'Done',
}

const mapNextStatus = {
  [StatusEnum.TO_DO]: StatusEnum.IN_PROGRESS,
  [StatusEnum.IN_PROGRESS]: StatusEnum.DONE,
  [StatusEnum.DONE]: StatusEnum.DONE
}

const mapPreviousStatus = {
  [StatusEnum.TO_DO]: StatusEnum.TO_DO,
  [StatusEnum.IN_PROGRESS]: StatusEnum.TO_DO,
  [StatusEnum.DONE]: StatusEnum.IN_PROGRESS
}

export const Column: React.FC<IProps> = ({
  status
}) => {
  const { data, actions } = useBoard()


  const titleColumn = mapColumnName[status]

  const list = data[status];

  const changeStatus = (params: IChangeStatus) => actions.changeStatus(params)

  return (
    <div className="column">
      <strong>{titleColumn} {list.length}</strong>

      <div className="column-content">
        {list.map((item, index) => (
          <ColumnItem
            key={`${status}-${index}`}
            item={item}
            status={status}
            handleNext={changeStatus.bind(null, { newStatus: mapNextStatus[status], status, textIndex: index })}
            handlePrevius={changeStatus.bind(null, { newStatus: mapPreviousStatus[status], status, textIndex: index })}
          />
        ))}
      </div>
    </div>
  )
}

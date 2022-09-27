import React from 'react'
import { ColumnItem } from '../ColumnItem'

import './styles.scss'

export const Column: React.FC = () => {
  return (
    <div className="column">
      <strong>Column name</strong>
      
      <div className="column-content">
        <ColumnItem />
        <ColumnItem />
        <ColumnItem />
        <ColumnItem />
      </div>
    </div>
  )
}

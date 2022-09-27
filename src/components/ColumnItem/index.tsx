import React from 'react'
import { Button } from '../Button'

import './styles.scss'

export const ColumnItem: React.FC = () => {
  return(
    <div className="item">
      <Button variant="red">
        {'<'}
      </Button>

        <p className="text" title="Lorem ipsum doler Lorem ipsum dolerLorem ipsum doler Lorem ipsum doler">Lorem ipsum doler Lorem ipsum dolerLorem ipsum doler Lorem ipsum doler</p>

      <Button variant="green">
        {'>'}
      </Button>
    </div>
  )
}


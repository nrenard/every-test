import React from 'react'

import { Bottom, Board } from './partials'

import './styles.scss'

export const ChallengeComponent: React.FC = () => {
  return (
    <div className="challenge-component">
      <Board />
      <Bottom />
    </div>
  )
}

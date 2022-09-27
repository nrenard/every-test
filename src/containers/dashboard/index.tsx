/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useCallback, useContext, memo } from 'react';

import initialActions from './actions';

import { IActions, IState } from './dtos';

import { initialState } from './constants';

interface IData {
  data: IState;
  actions: IActions;
}

export const BoardContext = React.createContext<IData>({
  data: initialState,
  actions: initialActions({ data: initialState, setData: () => {} }),
});

export const useBoard = (): IData => useContext(BoardContext);

export default function withBoardProvider(
  WrappedComponent: React.FC,
  state: IState = initialState,
  actions = initialActions,
): React.FC {
  const WithBoard = (props: any) => {
    const [data, setData] = useState(state);

    const value = useCallback(
      () => ({
        data,
        actions: actions({ data, setData }),
      }),
      [data],
    );

    const dataValue: IData = value();

    return (
      <BoardContext.Provider value={dataValue}>
        <WrappedComponent {...props} />
      </BoardContext.Provider>
    );
  };

  return memo(WithBoard);
}

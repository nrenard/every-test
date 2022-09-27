import { IState, IChangeStatus } from './dtos';

interface IParams {
  data: IState;
  setData(data: IState): void;
}

const actions = (params: IParams) => {
  const { setData, data: state } = params;


  const addNew = (text: string) => {
    setData({ ...state, toDo: [ ...state.toDo, text] })
  }

  const changeStatus = ({ status, textIndex, newStatus }: IChangeStatus) => {
    const oldStatusList = [...state[status]];
    const newStatusList = state[newStatus];

    const text = oldStatusList[textIndex];


    setData({
      ...state,
      [status]: oldStatusList.filter((item, index) => index !== textIndex),
      [newStatus]: [...newStatusList, text]
    })
  }

  return {
    addNew,
    changeStatus,
  };
};

export default actions;

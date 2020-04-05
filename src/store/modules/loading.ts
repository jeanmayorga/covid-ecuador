import { Loading } from '../../interfaces';
import { typedAction } from '../helpers';

const initialState: Loading = true;

export const setIsLoading = (state: boolean) => {
  return typedAction('setIsLoading', state);
};

type LoadingAction = ReturnType<typeof setIsLoading>;

export function loadingReducer(state: Loading = initialState, action: LoadingAction): Loading {
  switch (action.type) {
    case 'setIsLoading':
      return action.payload;
    default:
      return state;
  }
}

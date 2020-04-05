import { User } from '../../interfaces';
import { typedAction } from '../helpers';

interface UserState {
  user: User | undefined;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: undefined,
  isAuthenticated: false,
};

export const setUser = (user: User) => {
  return typedAction('setUser', user);
};

export const removeUser = () => {
  return typedAction('removeUser', undefined);
};

export const setAuthenticated = (state: boolean) => {
  return typedAction('setAuthenticated', state);
};

type UserAction = ReturnType<typeof setUser | typeof removeUser | typeof setAuthenticated>;

export function userReducer(state: UserState = initialState, action: UserAction): UserState {
  switch (action.type) {
    case 'removeUser':
      return { ...state, user: undefined };
    case 'setUser':
      return { ...state, user: action.payload };
    case 'setAuthenticated':
      return { ...state, isAuthenticated: action.payload };
    default:
      return state;
  }
}

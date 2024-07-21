import React, { createContext, useReducer, Dispatch, ReactNode } from 'react';

interface State {
  fullName: string;
  email: string;
  phoneNumber: string;
  salary: string;
}

const initialState: State = {
  fullName: '',
  email: '',
  phoneNumber: '',
  salary: '',
};

type Action =
  | { type: 'SET_FULL_NAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_PHONE_NUMBER'; payload: string }
  | { type: 'SET_SALARY'; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_FULL_NAME':
      return { ...state, fullName: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PHONE_NUMBER':
      return { ...state, phoneNumber: action.payload };
    case 'SET_SALARY':
      return { ...state, salary: action.payload };
    default:
      return state;
  }
};

interface ContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

export const AppContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => null,
});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

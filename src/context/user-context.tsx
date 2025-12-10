import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

type UserState = {
    desktopIsLocked: boolean;
};

type UserAction = 
    | { type: 'LOCK_DESKTOP' }
    | { type: 'UNLOCK_DESKTOP' };

type UserContextValue = UserState & {
    dispatch: Dispatch<UserAction>;
};

const UserStateContext = createContext<UserContextValue | undefined>(undefined);

const reducerDefaultState: UserState = {
    desktopIsLocked: true,
};

export const UserReducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case 'LOCK_DESKTOP':
            return {
                ...state,
                desktopIsLocked: true,
            };
        case 'UNLOCK_DESKTOP':
            return {
                ...state,
                desktopIsLocked: false,
            };
        default:
            return state;
    }
};

export const useUserState = () => {
    const context = useContext(UserStateContext);

    if (context === undefined) {
        throw new Error('useUserState must be used within a UserProvider');
    }

    return context;
};

type UserProviderProps = {
    children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
    const [userState, dispatch] = useReducer(UserReducer, reducerDefaultState);

    return (
        <UserStateContext.Provider value={{ ...userState, dispatch }}>
            {children}
        </UserStateContext.Provider>
    );
};
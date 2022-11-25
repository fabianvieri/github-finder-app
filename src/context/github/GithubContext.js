import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();
const initialState = { users: [], user: {}, loading: false, repos: [] };

export const GithubProvider = ({ children }) => {
	const [state, dispatch] = useReducer(githubReducer, initialState);

	return (
		<GithubContext.Provider
			value={{
				...state,
				dispatch,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;

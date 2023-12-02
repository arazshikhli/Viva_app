import { useLocation, Navigate } from 'react-router-dom'

export const RequireAuth = ({ children }) => {
    const location = useLocation();
    const auth = localStorage.getItem('userToken');

    if (!auth) {
        return <Navigate to='/login' state={{ from: location }} />
    }
    return children

}
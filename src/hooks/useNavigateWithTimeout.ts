import { useNavigate } from 'react-router-dom';

export const useNavigateWithTimeout = () => {
    const navigate = useNavigate();

    return (route: string, timeout: number) => {
        setTimeout(() => {
            navigate(route);
        }, timeout);
    };
};

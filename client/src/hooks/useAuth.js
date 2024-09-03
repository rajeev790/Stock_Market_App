import { useSelector } from 'react-redux';

const useAuth = () => {
    const user = useSelector((state) => state.user.userInfo);
    return user !== null;
};

export default useAuth;

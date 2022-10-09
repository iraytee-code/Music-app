import { useDispatch } from "react-redux";

const useAuth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = true;
  return {
    dispatch,
    isAuthenticated,
  };
};

export default useAuth;

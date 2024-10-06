import useUser from "../stores/user";

const useAuthenticated = () => {
  const { user } = useUser();
  return user !== null;
};

export default useAuthenticated;

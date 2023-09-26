import { useAuth } from "../customhooks/useAuth";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return (
      <>
        <Navigate to="/" replace={true} />
      </>
    );
  }
  return children;
};

export default PublicRoutes;

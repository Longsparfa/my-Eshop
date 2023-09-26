import { useContext } from "react";
import authSlice from "../redux/slice/authSlice";

export const useAuth = () => {
  return useContext(authSlice);
};

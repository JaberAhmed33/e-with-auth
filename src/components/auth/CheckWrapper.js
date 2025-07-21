import { useEffect } from "react";
import useUserStore from "../../store/userStore";
import { useNavigate } from "react-router";

const CheckWrapper = ({ children, login }) => {
    console.log("login", login);
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  console.log("user", user);
  
  useEffect(() => {

    if (login) {
      if (user) navigate("/products");
      return;
    }else {
      if (!user) navigate("/login");
      return;
    }
  }, [user, navigate, login]);

  return children;
};

export default CheckWrapper;

import { Alert } from "react-native";
import AuthContent from "../components/auth/AuthContent";
import { login } from "../util/auth";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";

const LoginScreen = () => {
  const authCtx = useContext(AuthContext);
  async function loginHandler({ email, password }) {
    console.log("loginHandler email: ", email);

    try {
      const token = await login(email, password);
      console.log("token: ", token);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("api 인증 요청 실패!");
    }
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};

export default LoginScreen;

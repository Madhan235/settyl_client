import { useRecoilValue } from "recoil";
import { LoginCard } from "../components/LoginCard.jsx";
import { SignupCard } from "../components/SignupCard.jsx";

import authScreenAtom from "../atoms/authAtom.js";

export default function AuthPage() {
  const authScreenState = useRecoilValue(authScreenAtom);

  return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
}

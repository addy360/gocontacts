import { useState } from "react";
import { signIn } from "../firebase";

export const useContacts = () => {
  const [signing, setSigning] = useState(false);
  const [auth, setAuth] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [data, setData] = useState(null);
  const signInWithPopup = async () => {
    setSigning(true);
    const { result, info, data } = await signIn();
    setUserInfo(info);
    setAuth(result);
    setData(data);
    setSigning(false);
  };

  return {
    signing,
    data,
    signInWithPopup,
    auth,
    userInfo,
  };
};

import { useUserInfo } from "@/stores/userInfo";
import { Resume } from "../api";
import axios from "axios";

export const resumeListGetApi = async (cPage, itemPerPage) => {
  const userInfo = useUserInfo();

  const param = {
    loginId: userInfo.user.loginId,
    userNm: userInfo.user.userNm,
    userType: userInfo.user.userType,
    currentPage: cPage.value,
    pageSize: itemPerPage.value,
  };

  const result = await axios.post(Resume.GetResumeList, param);
  return result.data;
};

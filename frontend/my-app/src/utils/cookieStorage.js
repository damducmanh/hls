import StorageKeys from '../constants/cookieKeys';
import Cookies from 'js-cookie';

export const getAssessmentInCookie = () => {
  return Cookies.get(StorageKeys.resultAssessment)
    ? JSON.parse(Cookies.get(StorageKeys.resultAssessment))
    : [];
};

export const setAssessmentToCookie = (data) => {
  return data ? Cookies.set(StorageKeys.resultAssessment, data) : data;
};

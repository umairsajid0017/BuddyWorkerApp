export const API_BASE_URL = 'http://54.179.188.209/BuddyAppBackend/api/';
export const IMAGE_BASE_URL = 'https://app.explorerbees.com/media/images/';
export const VIDEO_BASE_URL = 'https://app.explorerbees.com/media/videos/';
export const getApiUrl =  (endpoint : string) => API_BASE_URL + endpoint;

export const LOGIN = 'login';
export const REGISTER = 'register';
export const FORGET_PASSWORD = getApiUrl('forgetPassword');
export const SEND_VERIFICATION_CODE = getApiUrl('sendVerificationCode');
export const MAIL_VERIFY = getApiUrl('mailVerify');
export const SERVICES = 'services';





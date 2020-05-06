import api from "../../../config/apiConfig";

export const signUp = (body) => api.post(`/api/auth/register`, body);
export const login = (body) => api.post(`/api/auth/login`, body);

import api from "../../../config/apiConfig";

export const getUserProfile = () => api.get("/api/user");

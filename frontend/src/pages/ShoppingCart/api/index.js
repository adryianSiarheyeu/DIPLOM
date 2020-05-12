import api from "../../../config/apiConfig";

export const sendOrder = (body) => api.post("/api/order", body);
export const getClientOrders = () => api.get("/api/order");

import { create } from "apisauce";
const apiClient = create({
  baseURL: "https://www.data.gouv.fr/api/1",
});
const endpoint = "/users";
const getUsers = () => {
  return apiClient.get(endpoint);
};

export default {
  getUsers,
};
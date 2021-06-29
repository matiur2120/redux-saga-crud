import axios from "axios";

export const getUsers = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/users`);
};
export const getUser = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API}/users/${id}`);
};

export const removeUser = async (id) => {
  return await axios.delete(`${process.env.REACT_APP_API}/users/${id}`);
};

export const updateUser = async (id, userInfo) => {
  return await axios.put(`${process.env.REACT_APP_API}/users/${id}`, userInfo);
};

export const createUser = async (userInfo) => {
  return await axios.post(`${process.env.REACT_APP_API}/users`, userInfo);
  
};
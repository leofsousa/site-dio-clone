import axios from "axios";

export const api = axios.create({
  baseURL: "https://68bf2c809c70953d96eef410.mockapi.io",
});

export const cadastrarUsuario = async (dados) => {
  try {
    const response = await api.post("/users", dados);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw error;
  }
};

import { api } from "./api";

export async function getBurgers() {
    try {
      const response = await api.get('products');
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  };
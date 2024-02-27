import { api } from "./axiosConfig";

export const PokeApi = {
  getPokemonById: async function (id: any) {
    return api.get(`/pokemon/${id}`);
  },
};

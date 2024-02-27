export interface Pokemon {
  id: number;
  name: string;
  abilities: Ability[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

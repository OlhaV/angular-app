export class Pizza {
  name: string;
  ingredients: string[];
  price: number;
  image?: string;

  constructor(name: string,
              ingredients: string[],
              price: number,
              image?: string) {
    this.name = name;
    this.ingredients = ingredients;
    this.price = price;
    this.image = image;
  }
}

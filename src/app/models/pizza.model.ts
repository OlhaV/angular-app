export class Pizza {
  name: string;
  ingredients: string[];
  price: number;
  image?: string;
  amount?: number;

  constructor(name: string,
              ingredients: string[],
              price: number,
              image?: string,
              amount?: number) {
    this.name = name;
    this.ingredients = ingredients;
    this.price = price;
    this.image = image;
    this.amount = amount;
  }
}

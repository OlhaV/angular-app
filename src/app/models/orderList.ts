export class OrderList {
  date: string;
  items: string[];

  constructor(date: string, items: string[]) {
    this.date = date;
    this.items = items;
  }
}

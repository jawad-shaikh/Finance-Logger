export class Invoice {
  public client: string;
  public details: string;
  public amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} is owed £${this.amount} for ${this.details}`;
  }
}

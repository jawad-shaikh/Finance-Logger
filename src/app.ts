import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.getElementById("type") as HTMLSelectElement;
const tofrom = document.getElementById("tofrom") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;

let values: [string, string, number];

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  values = [tofrom.value, details.value, amount.valueAsNumber];

  if (type.value === "invoice") {
    let doc = new Invoice(...values);
    console.log(doc);
  }

  if (type.value === "payment") {
    let doc = new Payment(...values);
    console.log(doc);
  }
});

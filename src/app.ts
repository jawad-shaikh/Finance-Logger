import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTamplate } from "./classes/ListTamplate.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let values: [string, string, number];

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.getElementById("type") as HTMLSelectElement;
const tofrom = document.getElementById("tofrom") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;

const ul = document.querySelector(".item-list") as HTMLUListElement;
let list = new ListTamplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  values = [tofrom.value, details.value, amount.valueAsNumber];

  if (type.value === "invoice") {
    doc = new Invoice(...values);
    list.render(doc, values[0], "end");
  }

  if (type.value === "payment") {
    doc = new Payment(...values);
  }
});

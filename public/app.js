import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTamplate } from "./classes/ListTamplate.js";
let values;
const form = document.querySelector(".new-item-form");
const type = document.getElementById("type");
const tofrom = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
const ul = document.querySelector(".item-list");
let list = new ListTamplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
        list.render(doc, values[0], "end");
    }
    if (type.value === "payment") {
        doc = new Payment(...values);
    }
});

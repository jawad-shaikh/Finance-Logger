import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
const type = document.getElementById("type");
const tofrom = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
let values;
form.addEventListener("submit", (e) => {
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

import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTamplate {
  public container: HTMLUListElement;

  constructor(a: HTMLUListElement) {
    this.container = a;
  }

  render(doc: HasFormatter, heading: string, pos: "start" | "end") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const h4 = document.createElement("h4");

    h4.innerText = heading;
    p.innerText = doc.format();

    li.append(h4);
    li.append(p);

    if (pos === "start") {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}

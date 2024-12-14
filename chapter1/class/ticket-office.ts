import { Audience } from "./audience";
import { Ticket } from "./ticket";

export class TicketOffice {
  private _amount: number;
  private _tickets: Ticket[];

  constructor(amount: number, tickets: Ticket[]) {
    this._amount = amount;
    this._tickets = tickets;
  }

  get amount() {
    return this._amount;
  }

  get ticket(): Ticket {
    const ticket = this._tickets.shift();
    if (ticket === undefined) {
      throw new Error("Ticket is sold out");
    }
    return ticket;
  }

  sellTicketTo(audience: Audience): void {
    this.plusAmount(audience.buy(this.ticket));
  }

  private plusAmount(amount: number) {
    this._amount += amount;
  }

  minusAmount(amount: number) {
    if (this._amount < amount) {
      throw new Error("Not enough amount");
    }
    this._amount -= amount;
  }
}

import { Invitation } from "./invitation";
import { Ticket } from "./ticket";

export class Wallet {
  private _balance: number;
  private _ticket: Ticket | null;
  private _invitation: Invitation | null;

  constructor(balance: number, invitation: Invitation | null = null) {
    this._balance = balance;
    this._ticket = null;
    this._invitation = invitation;
  }

  get balance() {
    return this._balance;
  }

  set ticket(ticket: Ticket | null) {
    this._ticket = ticket;
  }

  deposit(amount: number) {
    this._balance += amount;
  }

  withdraw(amount: number) {
    if (amount > this._balance) {
      throw new Error("Insufficient funds");
    }
    this._balance -= amount;
  }

  hold(ticket: Ticket) {
    if (this._invitation) {
      return 0;
    }

    const fee = ticket.fee;
    this._ticket = ticket;
    this.withdraw(fee);
    return fee;
  }
}

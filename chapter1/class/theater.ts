import { Audience } from "./audience";
import { TickerSeller } from "./ticket-seller";

export class Theater {
  private _ticketSeller: TickerSeller;
  private _audiences: Audience[] = [];

  constructor(ticketSeller: TickerSeller) {
    this._ticketSeller = ticketSeller;
  }

  enter(audience: Audience): void {
    this._ticketSeller.sellTicketsTo(audience);
    this._audiences.push(audience);
  }
}

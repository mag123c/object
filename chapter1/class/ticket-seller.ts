import { Audience } from "./audience";
import { TicketOffice } from "./ticket-office";

export class TickerSeller {
  private _ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this._ticketOffice = ticketOffice;
  }

  sellTicketsTo(audience: Audience): void {
    this._ticketOffice.sellTicketTo(audience);
  }
}

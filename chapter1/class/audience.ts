import { Ticket } from "./ticket";
import { Wallet } from "./wallet";

export class Audience {
  private _wallet: Wallet;

  constructor(wallet: Wallet) {
    this._wallet = wallet;
  }

  get wallet() {
    return this._wallet;
  }

  /**
   * 초대권이 있으면 그냥 입장, 없다면 구매
   */
  buy(ticket: Ticket): number {
    return this._wallet.hold(ticket);
  }
}

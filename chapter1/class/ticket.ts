export class Ticket {
  private _fee: number;
  constructor(fee: number) {
    this._fee = fee;
  }
  get fee() {
    return this._fee;
  }
}
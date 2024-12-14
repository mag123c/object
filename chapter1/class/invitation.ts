export class Invitation {
  private _when: Date;
  constructor(when: Date) {
    this._when = when;
  }
  get when() {
    return this._when;
  }
}

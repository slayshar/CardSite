class Popup {
  constructor(block, btn, enter) {
    this.block = block;
    this.closeBtn = this.block.querySelector(`.popup__close`);
    this.openBtn = btn;
    this.enter - enter;
  }
  open = () => {
    this.block.style.display = `flex`;
    greyArea.classList.add(`active`);
    document.body.style.overflow = `hidden`;
    this.closeBtn.addEventListener(`mousedown`, this.close);
  };
  close = () => {
    this.block.style.display = `none`;
    greyArea.classList.remove(`active`);
    document.body.style.overflow = `auto`;
  };
}

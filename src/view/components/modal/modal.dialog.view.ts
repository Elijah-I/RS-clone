import { ModalWindow } from "./modal.view";
import { getExitLang } from "lang/profile/exit.lang";

class ModalDialogWindow extends ModalWindow {
  dialog: HTMLElement;

  text: HTMLElement;

  buttons: HTMLElement;

  noBtn: HTMLButtonElement;

  yesBtn: HTMLButtonElement;

  constructor() {
    super();

    const { noBtn, yesBtn } = getExitLang();

    this.dialog = this.createDomNode("div", "modal__dialog");
    this.text = this.createDomNode("span", "dialog__text");
    this.buttons = this.createDomNode("div", "dialog__buttons");

    this.noBtn = this.createDomNode(
      "button",
      "button",
      "button--rounded",
      "close-modal-dialog-btn"
    );
    this.noBtn.innerText = `${noBtn}`;

    this.yesBtn = this.createDomNode("button", "button", "button--rounded");
    this.yesBtn.innerText = `${yesBtn}`;

    this.buttons.append(this.noBtn, this.yesBtn);

    this.dialog.append(this.text, this.buttons);
  }

  buildModalDialog(text: string, confirmCb: (event: Event) => void) {
    this.text.innerText = text;

    this.buildModal(this.dialog);
    this.bindCloseModalDialogEvents(confirmCb);
  }

  bindCloseModalDialogEvents(confirmCb: (event: Event) => void) {
    this.noBtn.addEventListener("click", () => this.removeModal());
    this.yesBtn.addEventListener("click", (e: Event) => {
      this.removeModal();
      confirmCb(e);
    });
  }
}

export default new ModalDialogWindow();

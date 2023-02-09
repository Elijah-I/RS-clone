import Player from "utils/player.utils";
import { Layout } from "types/layout.types";
import progressController from "controller/progress.controller";
import profileController from "controller/profile.controller";

class CoverView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    this.addHandlers();
  }

  createLayout(root: HTMLElement) {
    this.layout.wrapper = document.createElement("div");
    this.layout.wrapper.className = "wrapper footer__wrapper";

    root.replaceChildren(this.layout.wrapper);
  }

  render() {
    if (profileController.program?.trainings) {
      for (const traning of profileController.program.trainings) {
        if (traning) new Player().create(this.layout.wrapper, traning);
      }
    } else {
      console.log("выберите программу");
    }
  }

  addHandlers() {
    this.watchProgress();
  }

  watchProgress() {
    setTimeout(() => {
      progressController.watchProgress();
      this.watchProgress();
    }, 3000);
  }
}

export default new CoverView();
import { state } from "store/state";
import { getMeditationsLang } from "lang/meditation/meditations.lang";
import meditationController from "controller/meditation.controller";
import navigationModel from "model/navigation.model";
import { Routing } from "types/route.types";
import navigationController from "controller/navigation.controller";
import { Layout } from "types/layout.types";
import meditationCardView from "../../components/meditation.card.view";

class MeditationsListView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    root.innerHTML = "";

    this.renderItems(root);
  }

  renderItems(root: HTMLElement) {
    const { nothing, edit, open } = getMeditationsLang();

    this.layout.empty = document.createElement("p");
    this.layout.empty.textContent = `${nothing}`;

    if (!state.user.meditations.length) {
      root.replaceChildren(this.layout.empty);
      return;
    }

    for (const meditation of state.user.meditations) {
      const route =
        navigationModel.createRoute(Routing.MEDITATIONS) + "/" + meditation.id;

      meditationCardView.render(root, meditation, `${edit}`, [
        {
          text: `${open}`,
          classes: "button--rounded",
          callback: () => {
            navigationController.applyRoute(route);
          }
        },
        {
          text: "",
          classes: "button__icon icon icon--delete",
          callback: async () => {
            await meditationController.delete(meditation);
          }
        }
      ]);
    }
  }
}

export default new MeditationsListView();
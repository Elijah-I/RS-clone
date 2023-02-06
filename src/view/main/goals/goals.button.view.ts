import button from "../../components/button";
import navigationModel from "../../../model/navigation.model";
import { Routing } from "types/route.types";
import navigationController from "../../../controller/navigation.controller";
import { getPromoLang } from "../../../lang/landing/promo.lang";

class GoalsButtonView {
  render(root: HTMLElement) {
    const onSingUp = () => {
      const route = navigationModel.createRoute(Routing.REGISTRATION);
      navigationController.applyRoute(route);
    };

    const { btn } = getPromoLang();

    button.render(root, "button--bordered", `${btn}`, onSingUp);
  }
}

export default new GoalsButtonView();

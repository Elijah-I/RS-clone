import { Layout } from "types/layout.types";
import authFormView from "./auth.form.view";
import redirectRegView from "./redirect.reg.view";
import { HttpLoginRequest } from "types/http.request.types";
import authController from "../../controller/auth.controller";
import { getAuthLang } from "../../lang/auth.lang";
import formDataView from "../components/form.data.view";

class AuthView {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.createLayout(root);
    this.render();
    this.addHandler();
  }

  createLayout(root: HTMLElement) {
    const { greeting, title } = getAuthLang();

    this.layout = formDataView.createLayout(root, `${title}`, `${greeting}`);

    root.replaceChildren(this.layout.form);
  }

  render() {
    authFormView.render(this.layout.formFields);
    redirectRegView.init(this.layout.redirect);
  }

  addHandler() {
    this.layout.formFields.addEventListener("submit", async (e: Event) => {
      e.preventDefault();

      const errors = document.querySelectorAll(".error");
      if (errors.length) return;

      if (e.target instanceof HTMLFormElement) {
        const form = e.target;
        const formData = Object.fromEntries(new FormData(form).entries());

        const request: HttpLoginRequest = {
          email: `${formData.email}`,
          password: `${formData.password}`
        };

        await authController.login(request);
        await authController.redirectToHome();
      }
    });
  }
}

export default new AuthView();

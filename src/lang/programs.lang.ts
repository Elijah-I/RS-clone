import lang from "./lang";
import { Languages } from "types/lang.types";

const programsDictionary: Languages = {
  title: {
    ru: "Программы тренировок",
    en: "Available training sessions"
  },
  subtitle: {
    ru: "Попробуйте наши программы тренировок. Вы можете подобрать программу под вашу цель",
    en: "Try our training programs. You can choose training program for your goal"
  },
  btn: {
    ru: "Попробовать",
    en: "Try it out"
  }
};

export const getProgramsLang = () => lang.getDictionaryLang(programsDictionary);

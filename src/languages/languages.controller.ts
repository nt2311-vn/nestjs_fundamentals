import { Controller, Get, Param } from "@nestjs/common";

@Controller("languages")
export class LanguagesController {
	@Get()
	getLanguages() {
		return ["JavaScript", "TypeScript", "Python", "Golang"];
	}

	@Get(":id")
	getLanguageById(@Param("id") id: string) {
    const languages = this.getLanguages();

    if (+id > languages.length) {
      return "Language not found";
    }

    return languages[+id];
  }
}

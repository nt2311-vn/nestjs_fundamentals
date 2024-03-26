import { Body, Controller, Get, Param, Post } from "@nestjs/common";

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

  @Post()
  addLanguage(@Body("name") name: string) {
    const languages = this.getLanguages()

    if (name === "" || name === undefined) {
      return "Please provide a language name";
    }

    if (languages.indexOf("name") > -1) {
      return "Language already exists";
    }
    languages.push(name);

    return `Added ${name} to the list of lanaguages`
      
  }
}

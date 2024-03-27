import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { LanguagesService } from "./languages.service";

@Controller("languages")
export class LanguagesController {
	constructor(private languagesService: LanguagesService) {}

	@Get()
	getLanguages() {
		return this.languagesService.findAll();
	}

	@Get(":id")
	getLanguageById(@Param("id") id: string) {
		const languages = this.languagesService.findAll();

		if (+id > languages.length) {
			return "Language not found";
		}

		return this.languagesService.findById(+id);
	}

	@Post()
	addLanguage(@Body("name") name: string) {
		const languages = this.languagesService.findAll();

		if (name === "" || name === undefined) {
			return "Please provide a language name";
		}

		if (languages.indexOf("name") > -1) {
			return "Language already exists";
		}
		this.languagesService.create(name);
		return `Added ${name} to the list of lanaguages`;
	}

	@Put(":id")
	updateLanguageByID(@Param("id") id: string, @Body("name") name: string) {
		const languages = this.languagesService.findAll();

		if (name === "" || name === undefined) {
			return "Please provide a language name";
		}

		if (+id > languages.length) {
			return "Cannot find language to update";
		}

		this.languagesService.update(+id, name);
		return `Language ${name} was updated successfully`;
	}

	@Delete(":id")
	deleteLanguageByID(@Param("id") id: string) {
		const languages = this.languagesService.findAll();

		if (+id > languages.length) {
			return "Cannot find language to delete";
		}

		this.languagesService.delete(+id);
		return `Language ${languages.at(+id)} was deleted successfully`;
	}
}

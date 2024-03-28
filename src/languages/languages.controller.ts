import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { LanguagesService } from "./languages.service";
import { CreateLanguageDTO } from "./dto/create-language-dto";

@Controller("languages")
export class LanguagesController {
	constructor(private languagesService: LanguagesService) {}

	@Get()
	getLanguages() {
		try {
			return this.languagesService.findAll();
		} catch (err) {
			throw new HttpException(
				`Error: ${err.message}`,
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
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
	addLanguage(@Body() createLanguageDTO: CreateLanguageDTO) {
		return this.languagesService.create(createLanguageDTO);
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

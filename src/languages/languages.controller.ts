import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	Inject,
	Param,
	ParseIntPipe,
	Post,
	Put,
} from "@nestjs/common";
import { LanguagesService } from "./languages.service";
import { CreateLanguageDTO } from "./dto/create-language-dto";
import { Connection } from "src/common/constants/connection";

@Controller("languages")
export class LanguagesController {
	constructor(
		private languagesService: LanguagesService,
		@Inject("CONNECTION")
		private connection: Connection,
	) {
		console.log(`Connection string: ${this.connection.CONNECTION_STRING}`);
	}

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
	getLanguageById(
		@Param(
			"id",
			new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }),
		)
		id: number,
	) {
		const language = this.languagesService.findById(id);

		if (!language) {
			throw new HttpException("Not found", HttpStatus.NOT_FOUND);
		}

		return language;
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

import { Injectable } from "@nestjs/common";

@Injectable()
export class LanguagesService {
	private readonly languages = [];

	create(language) {
		this.languages.push(language);
	}

	findAll() {
		return this.languages;
	}
}

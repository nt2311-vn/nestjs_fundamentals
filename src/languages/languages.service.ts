import { Injectable } from "@nestjs/common";

@Injectable()
export class LanguagesService {
	private readonly languages = [];

	create(language: any) {
		this.languages.push(language);
	}

	findAll() {
		return this.languages;
	}

	findById(id: number) {
		return this.languages[id];
	}

	update(id: number, language: string) {
		this.languages[id] = language;
	}

	delete(id: number) {
		this.languages.splice(id, 1);
	}
}

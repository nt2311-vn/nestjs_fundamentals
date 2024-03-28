import { Module } from "@nestjs/common";
import { LanguagesController } from "./languages.controller";
import { LanguagesService } from "./languages.service";

const mockLanguagesService = {
	findAll() {
		return ["JavaScript", "TypeScript", "Go", "Python", "Elixir"];
	},
};

@Module({
	controllers: [LanguagesController],
	providers: [
		LanguagesService,
		// {
		// 	provide: LanguagesService,
		// 	useClass: LanguagesService,
		// },
		{
			provide: LanguagesService,
			useValue: mockLanguagesService,
		},
	],
})
export class LanguagesModule {}

import { Module } from "@nestjs/common";
import { LanguagesController } from "./languages.controller";
import { LanguagesService } from "./languages.service";
import { connection } from "src/common/constants/connection";

// const mockLanguagesService = {
// 	findAll() {
// 		return ["JavaScript", "TypeScript", "Go", "Python", "Elixir"];
// 	},
// };

@Module({
	controllers: [LanguagesController],
	providers: [
		LanguagesService,
		// {
		// 	provide: LanguagesService,
		// 	useClass: LanguagesService,
		// },
		{
			provide: "CONNECTION",
			useValue: connection,
		},
	],
})
export class LanguagesModule {}

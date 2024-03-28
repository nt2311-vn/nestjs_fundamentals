import { Module } from "@nestjs/common";
import { LanguagesController } from "./languages.controller";
import { LanguagesService } from "./languages.service";

@Module({
	controllers: [LanguagesController],
	providers: [
		// LanguagesService
		{
			provide: LanguagesService,
			useClass: LanguagesService,
		},
	],
})
export class LanguagesModule {}

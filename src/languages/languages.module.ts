import { Module } from "@nestjs/common";
import { LanguagesController } from "./languages.controller";

@Module({
	controllers: [LanguagesController],
})
export class LanguagesModule {}

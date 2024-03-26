import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LanguagesModule } from "./languages/languages.module";

@Module({
	imports: [LanguagesModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

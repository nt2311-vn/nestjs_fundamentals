import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LanguagesModule } from "./languages/languages.module";
import { LoggerMiddleware } from "./common/middleware/logger.middleware";
import { LanguagesController } from "./languages/languages.controller";
import { DevConfigService } from "./common/providers/DevConfigService";

@Module({
	imports: [LanguagesModule],
	controllers: [AppController],
	providers: [
		AppService,
		{
			provide: DevConfigService,
			useClass: DevConfigService,
		},
	],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		// consumer.apply(LoggerMiddleware).forRoutes("languages");

		// consumer
		// 	.apply(LoggerMiddleware)
		// 	.forRoutes({ path: "languages", method: RequestMethod.GET });

		consumer.apply(LoggerMiddleware).forRoutes(LanguagesController);
	}
}

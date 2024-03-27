import {
	IsArray,
	IsDateString,
	IsEnum,
	IsNotEmpty,
	IsString,
} from "class-validator";

export class CreateLanguageDTO {
	@IsString()
	@IsNotEmpty()
	readonly name: string;

	@IsNotEmpty()
	@IsDateString()
	readonly releaseDate: Date;

	@IsEnum(["static", "dynamic"])
	@IsNotEmpty()
	readonly typingStyles: "static" | "dynamic";

	@IsArray()
	@IsString({ each: true })
	@IsNotEmpty()
	readonly applicationIn: string[];
}

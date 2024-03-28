import { Injectable } from "@nestjs/common";

@Injectable()
export class DevConfigService {
	DBHOST = "localhost";
	getDBHost(): string {
		return this.DBHOST;
	}
}

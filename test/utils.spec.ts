import { NestFactory } from '@nestjs/core';
import { Module, Provider } from '@nestjs/common';
import { NecordModule } from '../src';

export const createApplication = (...providers: Provider[]) => {
	@Module({
		imports: [
			NecordModule.forRoot({
				token: process.env.DISCORD_TOKEN,
				intents: [
					'Guilds',
					'DirectMessages',
					'GuildMembers',
					'GuildMessages',
					'MessageContent'
				],
				prefix: '!'
			})
		],
		providers
	})
	class AppModule {}

	return NestFactory.createApplicationContext(AppModule);
};

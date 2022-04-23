import { ListenerMeta } from '../discovery';
import { SetMetadata } from '@nestjs/common';
import { LISTENERS_METADATA } from '../necord.constants';
import { NecordEvents } from '../interfaces';

export const createNecordListenerDecorator =
	<K extends keyof E, E = NecordEvents>(type: ListenerMeta['type']) =>
	(event: K): MethodDecorator =>
		SetMetadata<string, ListenerMeta>(LISTENERS_METADATA, {
			type,
			event
		});

export const On = createNecordListenerDecorator('on');

export const Once = createNecordListenerDecorator('once');
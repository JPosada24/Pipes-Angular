import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
	selector: 'app-uncommon-page',
	templateUrl: './uncommon-page.component.html',
	styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
	// i18n select
	public name: string = 'julian';
	public gender: 'male' | 'female' = 'male';
	public invitationMap = {
		male: 'invitarlo',
		female: 'invitarla',
	};

	changeClient(): void {
		this.name = 'Melissa';
		this.gender = 'female';
	}

	// i18nPlural

	public clients: string[] = [
		'Maria',
		'Pedro',
		'Fernando',
		'Eduardo',
		'Melisa',
	];
	public clientsMap = {
		'=0': 'no tenemos ningún cliente esperando.',
		'=1': 'tenemos un cliente esperando.',
		'=2': 'tenemos 2 clientes esperando.',
		other: 'tenemos # clientes esperando.',
	};

	deleteClient(): void {
		this.clients.shift();
	}

	// KeyValue Pipe

	public person = {
		name: 'Julian',
		age: 23,
		address: 'Medellin',
	};

	// Async Pipe

	public myObservableTimer = interval(2000);

	public promiseValue: Promise<string> = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Tenemos data en la promesa.');
		}, 3500);
	});
}

import { Injectable } from '@angular/core';
import { Time } from '../models/time.model';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

	constructor() { }

	getTimes(): Array<Time> {
		const times:Array<Time> = []

		const nomes = [
			{nome: 'São Paulo', uf: 'SP'},
			{nome: 'Palmeiras', uf: 'SP'},
			{nome: 'Ituano', uf: 'SP'},
			{nome: 'Goiás', uf: 'GO'},
			{nome: 'Atlético', uf: 'PR'},
			{nome: 'Grêmio', uf: 'RS'}
		]
		nomes.map((item, index) => {
			let t:Time = {
				id: index + 1,
				time: item.nome,
				uf: item.uf
			}
			times.push(t)	
		})
		return times
	}

}

import { Component, OnInit } from '@angular/core';
import { TimeService } from './services/time.service';
import { Time } from './models/time.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	
	times: Array<Time> = []
	categorias = []
	golsCasa = 0
	golsVisitante = 0

	constructor(private timeService: TimeService) { }

	ngOnInit(): void {
		this.times = this.timeService.getTimes()
		this.categorias = [
			{identificador: 1, nome: 'Manutenção'},
			{identificador: 2, nome: 'Lubrificação'},
		]
	}

	marcarGolCasa = () => this.golsCasa++

	marcarGolVisitante = () => this.golsVisitante++

	private reset() {
		this.golsCasa = 0
		this.golsVisitante = 0
	}

	atualizarPlacarTimes(time: string) {
		if (time == 'casa') this.golsCasa++
		if (time == 'visitante') this.golsVisitante++
		if (time == '')	this.reset()	
	}

	itemSelecionado(item) {
		console.log("SELECIONOU ", item)
	}

}
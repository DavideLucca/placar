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
	golsCasa = 0
	golsVisitante = 0
	timeCasa = ''
	timeVisitante = ''
	timesPartida = ''
	start = false
	headersTable = [
		'ID', 'Time Casa', 'Gols', 'Time Visitante', 'Gols', 'Ações'
	]
	acoesTable = [
		'Editar | ', 'Apagar'
	]

	dataTable = []

	constructor(private timeService: TimeService) { }

	ngOnInit(): void {
		this.times = this.timeService.getTimes()
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
		if (item.identificador == 'casa') this.timeCasa = `Time casa: ${item.name}`
		else if (item.identificador == 'visitante') this.timeVisitante = `Time visitante: ${item.name}`
	}

	startPartida() {
		this.start = true
		const timeCasa = this.timeCasa.split(':')[1].split('|')[0].trim()
		const timeVisitante = this.timeVisitante.split(':')[1].split('|')[0].trim()
		this.timesPartida = `${timeCasa} X ${timeVisitante}`
	}

	finalizarPartida() {
		let id = 0

		if (this.dataTable.length > 0) {
			id = this.dataTable.length
		}

		const obj = {
			id: id,
			casa: this.timeCasa.split(':')[1].split('|')[0].trim(),
			casaGols: this.golsCasa,
			visitante: this.timeVisitante.split(':')[1].split('|')[0].trim(),
			visitanteGols: this.golsVisitante
		}
		this.dataTable.push(obj)
	}

	executarFn(partida) {
		this.dataTable = this.dataTable.filter(item => item.id != partida.id)
	}

}
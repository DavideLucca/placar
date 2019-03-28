import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

	@Input() texto = ''
	@Input() time = ''
	@Output() atualizarPlacar = new EventEmitter

  	constructor() { }

	ngOnInit() {
	}

	marcarGol() {
		this.atualizarPlacar.emit(this.time)
	}

}

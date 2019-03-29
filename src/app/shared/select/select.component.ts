import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

	@Input() lista = []
	@Input() propertyValue
	@Input() propertyText
	@Input() nomeMulti = ''
	@Input() identificador
	@Output() itemSelected = new EventEmitter
	listaSelect = []

  	constructor() { }

	ngOnInit() {
		this.listaSelect = []

		this.lista.map(item => {		
			const nomeMulti = this.nomeMulti != '' ? `${item[this.propertyText]} | ${item[this.nomeMulti]}` : item[this.propertyText]
			const itemLista = {
				id: item[this.propertyValue],
				name: nomeMulti
			}
			this.listaSelect.push(itemLista)
		}) 		
	}

	itemSelecionado(id) {
		const item = this.listaSelect.find(item => item.id == id)		
		item.identificador = this.identificador
		this.itemSelected.emit(item)
	}

}

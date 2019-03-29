import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

	@Input() headers = []
	@Input() data = []
	@Input() acoes = []
	@Output() executarAcao = new EventEmitter

  	constructor() { }

	ngOnInit() {
	}

	executarFn(acao, item) {		
		this.executarAcao.emit({
			acao: acao,
			id: item.id
		})
	}

}

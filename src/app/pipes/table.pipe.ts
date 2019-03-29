import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'table'
})
export class TablePipe implements PipeTransform {

  transform(value: any, args?: any): any {
		let keys = []
		Object.keys(value).map(item => keys.push(item))  
    	return keys;
  }

}

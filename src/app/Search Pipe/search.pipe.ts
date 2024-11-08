import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../Task-List/list/list.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Task[], ...args: string[]): Task[] {
    const searchText=args[0];

    return value.filter(a=>a.title.toLowerCase().includes(searchText.toLowerCase())||
    a.description.toLowerCase().includes(searchText.toLowerCase())|| a.assigee?.firstName.toLowerCase().includes(searchText.toLowerCase()));
    
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { user } from '../user-List/list/user-list/user-list.component';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(value: user[], ...args: string[]): user[] {
    const Searchtext=args[0]
    return  value .filter(a=>a.firstName.toLowerCase().includes(Searchtext.toLowerCase())||
    a.lastName.toLowerCase().includes(Searchtext.toLowerCase()))  }

}

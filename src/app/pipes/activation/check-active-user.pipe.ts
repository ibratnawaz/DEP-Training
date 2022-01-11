import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkActiveUser',
})
export class CheckActiveUserPipe implements PipeTransform {
  transform(value: boolean, ...args: unknown[]): unknown {
    return value ? 'Deleted' : 'Active';
  }
}

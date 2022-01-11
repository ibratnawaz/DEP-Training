import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value[0].toUpperCase() + value.slice(1);
  }
}

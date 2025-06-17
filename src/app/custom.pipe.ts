import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string): string {
    return String(value).charAt(0).toUpperCase() + String(value).slice(1);
  }

}

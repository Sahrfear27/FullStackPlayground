import { Pipe, PipeTransform } from '@angular/core';

// A pipe is a function that takes an input value, process them and return a output value
@Pipe({
  name: 'quad',
  standalone: true,
})
export class QuadPipe implements PipeTransform {
  transform(value: number): number {
    return value * value * value;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
  standalone: true
})
export class TimePipe implements PipeTransform {

  transform(value: string|number|Date): string {
    console.log(value);
    // Format Date
    let date = new Date(value)
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    let time = `${h}💩:${m}💩:${s}`
    return time;
  }

}

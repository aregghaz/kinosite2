import {Pipe, PipeTransform} from '@angular/core';

@Pipe(
  {name: 'searchSerial'}
)
export class SerialsPipe implements PipeTransform {

  transform(serials, value) {
    return serials.filter(serial => {
      return serial.name.includes(value);
    });
  }
}

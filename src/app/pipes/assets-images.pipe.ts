import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assetsImages'
})
export class AssetsImagesPipe implements PipeTransform {

  pathToImages = "assets/img/";

  transform(value: string): string {
    return this.pathToImages + value;
  }

}

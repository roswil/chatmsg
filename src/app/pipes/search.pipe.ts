import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //return null;
    if(!value)
    {
      return;
    }

    if(!args)
    {
      return value;

    }
    args=args.toLowercase();
    return value.filter((item)=>{
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }

}

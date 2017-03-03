import * as _ from "lodash";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {
  transform(array: any[], query: string, attribute: string): any {
    if (query) {
      return _.filter(array, row=>row[attribute].indexOf(query) > -1);
    }
    return array;
  }
}
import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "lodash";

@Pipe({
  name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {
  transform(array: any[], query: string, attribute: string): any {
    if (query) {
      return _.filter(array, row=> _.lowerCase(row[attribute]).indexOf(_.lowerCase(query)) > -1);
    }
    return array;
  }
}
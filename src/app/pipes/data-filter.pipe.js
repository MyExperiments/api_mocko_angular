"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var _ = require("lodash");
var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query, attribute) {
        if (query) {
            return _.filter(array, function (row) { return _.lowerCase(row[attribute]).indexOf(_.lowerCase(query)) > -1; });
        }
        return array;
    };
    return DataFilterPipe;
}());
DataFilterPipe = __decorate([
    core_1.Pipe({
        name: "dataFilter"
    })
], DataFilterPipe);
exports.DataFilterPipe = DataFilterPipe;
//# sourceMappingURL=data-filter.pipe.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EventFilterPipe = (function () {
    function EventFilterPipe() {
    }
    //transform(value: IEvent[], args: string[]): IEvent[] {
    //    debugger;
    //    let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
    //    return filter ? value.filter((event: IEvent) =>
    //        event.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
    //}
    EventFilterPipe.prototype.transform = function (value, searcttext) {
        if (searcttext !== '') {
            var items = [];
            for (var i = 0; i < value.length; i++) {
                if (value[i].name.toLowerCase() === searcttext.toLowerCase()) {
                    items.push(value[i]);
                }
            }
            return items;
        }
        return value;
    };
    return EventFilterPipe;
}());
EventFilterPipe = __decorate([
    core_1.Pipe({
        name: 'eventFilter'
    })
], EventFilterPipe);
exports.EventFilterPipe = EventFilterPipe;
//# sourceMappingURL=event-filter.pipe.js.map
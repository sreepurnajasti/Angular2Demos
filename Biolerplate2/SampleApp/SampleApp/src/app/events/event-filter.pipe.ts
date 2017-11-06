import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from './event';

@Pipe({
    name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {
    //transform(value: IEvent[], args: string[]): IEvent[] {
    //    debugger;
    //    let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
    //    return filter ? value.filter((event: IEvent) =>
    //        event.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
    //}

    transform(value: any, searcttext: string): any {
        if (searcttext !== '') {
            let items: any = [];
            for (let i = 0; i < value.length; i++) {
                if (value[i].name.toLowerCase() === searcttext.toLowerCase()) {
                    items.push(value[i]);
                }
            }
            return items;
        }
        return value;
    }
}
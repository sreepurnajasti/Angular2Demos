import { Component } from '@angular/core';

@Component({
    selector: 'events-app',
    template: `
    <div> 
        <h1>{{pageTitle}}</h1>
        <el-events></el-events>
    </div>
    `
})
export class AppComponent {
    pageTitle: string = 'Local Events App';
}

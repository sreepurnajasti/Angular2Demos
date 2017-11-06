import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list.component';
import { EventFilterPipe } from './events/event-filter.pipe';
import { ThumbComponent } from './shared/thumb.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        EventListComponent,
        EventFilterPipe,
        ThumbComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

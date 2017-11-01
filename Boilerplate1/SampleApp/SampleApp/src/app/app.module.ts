import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './components/about.component';
import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        UserComponent,
        AboutComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

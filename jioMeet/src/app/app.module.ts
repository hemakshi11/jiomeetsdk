import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MainVideoCallComponent } from './components/main-video-call/main-video-call.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './components/loader/loader.service';
import { MediaserviceService } from './services/mediaservice.service';


@NgModule({
  imports:      
  [ BrowserModule,
    MatIconModule,
    
   ],
  declarations: [ AppComponent, MainVideoCallComponent, LoaderComponent ],
  providers:[MediaserviceService, LoaderService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}
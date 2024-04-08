import { Routes } from '@angular/router';
import { MainVideoCallComponent } from './components/main-video-call/main-video-call.component';

export const routes: Routes = [
    { path:'',redirectTo:'/main-video',pathMatch:'full' },
    { path:'/main-video', component: MainVideoCallComponent },
    { path:'**',component: MainVideoCallComponent }
];

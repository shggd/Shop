import { FormsModule } from '@angular/forms';
import { TrackingComponent } from './tracking.component';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TrackingResultComponent } from './tracking-result.component';


const trackingRouting:Routes = [
    {path:'orderstatus',component:TrackingComponent}
];

@NgModule({
    declarations:[
        TrackingComponent,
        TrackingResultComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        FormsModule,
        RouterModule.forChild(trackingRouting)
    ],
    providers:[]
})

export class TrackingModule {}
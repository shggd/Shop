import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchResultComponent } from './search-result.component';
import { SearchPageComponent } from './search-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const searchRouting: Routes = [
    {path:'search',component:SearchPageComponent},
];


@NgModule({
    declarations:[
        // SearchComponent,
        SearchPageComponent,
        SearchResultComponent,
    ],
    imports:[
        CommonModule,
        SharedModule,
        RouterModule.forChild(searchRouting)
    ],
    providers:[]
})

export class SearchModule {}
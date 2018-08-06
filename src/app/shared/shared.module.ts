import { FooterComponent } from './../navbar/footer.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { SearchComponent } from './../search/search.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule , Routes } from '@angular/router';
import { NotfoundComponent } from '../navbar/notfound.component';

@NgModule({
    declarations:[
        SearchComponent,
        NavbarComponent,
        FooterComponent,
        NotfoundComponent
    ],
    imports:[
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule
    ],
    exports:[
        SearchComponent,
        NavbarComponent,
        FooterComponent
    ]
})

export class SharedModule{}
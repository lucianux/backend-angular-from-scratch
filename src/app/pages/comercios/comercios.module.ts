import { NgModule } from '@angular/core';
import { ComerciosComponent } from './comercios.component';
import { CommonModule } from '@angular/common';
import {
    NbCardModule,
    NbListModule,
    NbButtonModule
} from '@nebular/theme';

@NgModule({
    imports: [
        NbCardModule,
        NbListModule,
        NbButtonModule,
        CommonModule
    ],
    declarations: [
        ComerciosComponent
    ]
})
export class ComerciosModule { }
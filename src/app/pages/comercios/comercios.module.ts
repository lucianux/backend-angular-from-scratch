import { NgModule } from '@angular/core';
import { ComerciosComponent } from './comercios.component';
import { CommonModule } from '@angular/common';
import {
    NbCardModule,
    NbListModule
} from '@nebular/theme';

@NgModule({
    imports: [
        NbCardModule,
        NbListModule,
        CommonModule
    ],
    declarations: [ ComerciosComponent ],
})
export class ComerciosModule { }
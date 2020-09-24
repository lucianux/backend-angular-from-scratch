import { NgModule } from '@angular/core';
import { AgregarComponent } from './agregar.component';
import { CommonModule } from '@angular/common';
import {
    NbCardModule,
    NbListModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule
} from '@nebular/theme';
//import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule as ngFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        ThemeModule,
        NbCardModule,
        NbListModule,
        NbInputModule,
        NbButtonModule,
        NbSelectModule,
        CommonModule,
        ngFormsModule
    ],
    declarations: [
        AgregarComponent
    ]
})
export class AgregarModule { }
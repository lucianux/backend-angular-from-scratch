import { NgModule } from '@angular/core';
import { SubirComponent } from './subir.component';
import { CommonModule } from '@angular/common';
import {
    NbButtonModule,
    NbCardModule,
    NbInputModule
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule as ngFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        ThemeModule,
        NbInputModule,
        NbCardModule,
        NbButtonModule,
        CommonModule,
        ngFormsModule
    ],
    declarations: [
        SubirComponent
    ]
})
export class SubirModule { }
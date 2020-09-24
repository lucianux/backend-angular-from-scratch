import { NgModule } from '@angular/core';
import { ArchivosComponent } from './archivos.component';
import { CommonModule } from '@angular/common';
import {
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbListModule
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule as ngFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        ThemeModule,
        NbInputModule,
        NbCardModule,
        NbListModule,
        NbButtonModule,
        CommonModule,
        ngFormsModule
    ],
    declarations: [
        ArchivosComponent
    ]
})
export class ArchivosModule { }
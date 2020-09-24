import { NgModule } from '@angular/core';
import { EditarComponent } from './editar.component';
import { CommonModule } from '@angular/common';
import {
    NbCardModule,
    NbListModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule as ngFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        ThemeModule,
        NbCardModule,
        NbListModule,
        NbButtonModule,
        NbInputModule,
        NbSelectModule,
        CommonModule,
        ngFormsModule
    ],
    declarations: [
        EditarComponent
    ]
})
export class EditarModule { }
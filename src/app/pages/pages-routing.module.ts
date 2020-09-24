import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComerciosComponent } from './comercios/comercios.component';
import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { SubirComponent } from './subir/subir.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'editar/:uid',
      component: EditarComponent
    },
    {
      path: 'agregar',
      component: AgregarComponent
    },
    {
      path: 'comercios',
      component: ComerciosComponent
    },
    {
      path: 'archivos',
      component: ArchivosComponent
    },
    {
      path: 'subir',
      component: SubirComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'comercios',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { BackgroundComponent } from './background/background.component';

import { ProjectsComponent } from './projects/projects.component';
import { CaseComponent } from './projects/case/case.component'
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home', data: {animation: 'transition'} },
  { path: 'home', component: HomeComponent, data: {animation: 'transition'} },
  { path: 'background', component: BackgroundComponent, data: {animation: 'transition'} },
  { path: 'projects', component: ProjectsComponent, data: {animation: 'transition'} },
  { path: 'contact', component: ContactComponent, data: {animation: 'transition'} },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

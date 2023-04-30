import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './component/first-page/first-page.component';
import { SecondPageComponent } from './component/second-page/second-page.component';
import { ThirdPageComponent } from './component/third-page/third-page.component';
import { FourthPageComponent } from './component/fourth-page/fourth-page.component';
import { FifthPageComponent } from './component/fifth-page/fifth-page.component';
import { SixthPageComponent } from './component/sixth-page/sixth-page.component';
import { SeventhPageComponent } from './component/seventh-page/seventh-page.component';
const routes: Routes = [
  {path:'', component:SixthPageComponent},
  {path:'first-page', component:FirstPageComponent},
  {path: 'seven-page', component:SeventhPageComponent},
  {path:'second-page', component: SecondPageComponent},
  {path:'third-page', component:ThirdPageComponent},
  {path: 'fourth-page', component: FourthPageComponent},
  {path: 'fifth-page', component: FifthPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

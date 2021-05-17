import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { IncidentComponent } from './incident/incident.component';
import { MenuComponent } from './menu/menu.component';
import { ListIncidentsComponent } from './list-incidents/list-incidents.component';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{path: "incidents", component: ListIncidentsComponent},
{path: "add", component: AddComponent},
{path:"detail/:id", component: DetailComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    IncidentComponent,
    MenuComponent,
    ListIncidentsComponent,
    AddComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

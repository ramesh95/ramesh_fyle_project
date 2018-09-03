import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieHomeComponent } from './pages/movie-home/movie-home.component';
// import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { OmdbServices } from '../services/omdb-services.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: "", redirectTo: "/moviehome", pathMatch: "full"},
  { path: "moviehome", component: MovieHomeComponent },
  
]; 

@NgModule({
  declarations: [
    AppComponent,
    MovieHomeComponent,
   // MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    OmdbServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

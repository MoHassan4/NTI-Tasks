import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './app/core/interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app/app.routes';
import { AuthModule } from './app/auth/auth.module';
import { NavbarComponent } from './app/shared/components/navbar/navbar.component';
import { FooterComponent } from './app/shared/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent,FooterComponent],
  imports: [
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AuthModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

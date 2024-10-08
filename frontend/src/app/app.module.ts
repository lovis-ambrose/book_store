import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RegisterComponent} from './components/register/register.component';
import {ActivateAccountComponent} from './components/activate-account/activate-account.component';
import {CodeInputModule} from "angular-code-input";
import {httpTokenInterceptor} from "./services/interceptor/http-token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ActivateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CodeInputModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withFetch(),
      withInterceptors([httpTokenInterceptor])
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

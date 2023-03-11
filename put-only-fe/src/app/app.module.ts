import { NgModule, isDevMode } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatSelectModule } from '@angular/material/select'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { HeaderComponent } from '@app/header/header.component'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Example App DevTools',
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    EffectsModule.forRoot([]),
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

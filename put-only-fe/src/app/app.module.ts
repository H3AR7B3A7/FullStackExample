import { isDevMode, NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { HeaderComponent } from '@app/header/header.component'
import { HomeComponent } from './home/home.component'
import { EffectsModule } from '@ngrx/effects'

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

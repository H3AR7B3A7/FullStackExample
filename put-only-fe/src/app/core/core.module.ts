import { NgModule, Optional, SkipSelf } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard'
import { StoreModule } from '@ngrx/store'
import { appReducer } from '@app/core/state/core.reducer'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from '@app/core/material.module'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    StoreModule.forFeature('core', appReducer),
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [BrowserModule, ReactiveFormsModule, MaterialModule],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule)
  }
}

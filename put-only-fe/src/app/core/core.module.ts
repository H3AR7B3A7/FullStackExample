import { HttpClientModule } from '@angular/common/http'
import { NgModule, Optional, SkipSelf } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { appReducer } from '@app/core/state/core.reducer'
import { StoreModule } from '@ngrx/store'

import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard'

@NgModule({
  imports: [StoreModule.forFeature('core', appReducer)],
  exports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule)
  }
}

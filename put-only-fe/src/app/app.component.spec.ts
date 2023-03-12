import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatSelectModule } from '@angular/material/select'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { routes } from '@app/app-routing.module'
import { AppComponent } from '@app/app.component'
import { appReducer, initialState } from '@app/core/state/core.reducer'
import { HeaderComponent } from '@app/header/header.component'
import { describe, expect, test } from '@jest/globals'
import { StoreModule } from '@ngrx/store'
import { provideMockStore } from '@ngrx/store/testing'
import { first, firstValueFrom } from 'rxjs'
import { DEFAULT_THEME } from "@app/core/theme";

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        StoreModule.forRoot({
          core: appReducer,
        }),
        MatSidenavModule,
        BrowserAnimationsModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
      ],
      declarations: [AppComponent, HeaderComponent],
      providers: [
        provideMockStore({
          initialState: {
            core: initialState,
          },
        }),
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  test('should create the app', () => {
    expect(component).toBeTruthy()
  })

  test('should have a default theme of light', async () => {
    expect(component.theme$).toBeDefined()
    await expect(firstValueFrom(component.theme$)).resolves.toEqual(
      DEFAULT_THEME
    )
  })

  test('should have the side navigation panel open by default', async () => {
    expect(component.sidenav$).toBeDefined()
    await expect(firstValueFrom(component.sidenav$)).resolves.toBeTruthy()
  })

  test('should set the routes property to all routes with a title', () => {
    expect(component.routes).toBeDefined()
    expect(component.routes.length).toBeGreaterThan(0)
    component.routes.forEach((route) => {
      expect(route.title).toBeDefined()
    })
  })

  test('should dispatch an action to open the side navigation panel', () => {
    const showSidenav = true
    const spy = jest.spyOn(component['store'], 'dispatch')
    component.openChanged(showSidenav)
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        type: '[Core] Set Sidenav',
        open: showSidenav,
      })
    )
  })
})

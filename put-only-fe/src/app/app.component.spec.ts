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
import { expect } from '@jest/globals'
import { StoreModule } from '@ngrx/store'
import { provideMockStore } from '@ngrx/store/testing'

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

  it('should create the app', () => {
    expect(component).toBeTruthy()
  })

  it('should have a default theme of light', () => {
    expect(component.theme$).toBeDefined()
    component.theme$.subscribe((theme) => {
      console.log('theme', theme)
      expect(theme).toEqual('lol') // ?????
    })
  })

  it('should have the side navigation panel open by default', () => {
    expect(component.sidenav$).toBeDefined()
    component.sidenav$.subscribe((sidenav) => {
      console.log(typeof sidenav, sidenav)
      fixture.detectChanges()
      expect(sidenav).toBe(false) // ?????
    })
  })

  it('should set the routes property to all routes with a title', () => {
    expect(component.routes).toBeDefined()
    expect(component.routes.length).toBeGreaterThan(0)
    component.routes.forEach((route) => {
      expect(route.title).toBeDefined()
    })
  })

  it('should dispatch an action to open the side navigation panel', () => {
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

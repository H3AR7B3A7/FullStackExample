import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectChange, MatSelectModule } from '@angular/material/select'
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import * as CoreActions from '@app/core/state/core.actions'
import { initialState } from '@app/core/state/core.reducer'
import { DEFAULT_THEME } from '@app/core/theme'
import { describe, expect, test } from '@jest/globals'
import { provideMockStore } from '@ngrx/store/testing'
import { firstValueFrom } from 'rxjs'

import { HeaderComponent } from './header.component'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule,
      ],
      declarations: [HeaderComponent],
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
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  test('should create the component', () => {
    expect(component).toBeTruthy()
  })

  test('should initialize currentTheme$ correctly', async () => {
    expect(component.currentTheme$).toBeTruthy()
    await expect(firstValueFrom(component.currentTheme$)).resolves.toEqual(
      DEFAULT_THEME
    )
  })

  test('should dispatch toggleSidenav action', () => {
    const spy = jest.spyOn(component['store'], 'dispatch')
    component.toggleSidenav()
    expect(spy).toHaveBeenCalledWith(CoreActions.toggleSidenav())
  })

  test('should dispatch changeTheme action', () => {
    const mockSelection = {
      value: { title: 'Dark Theme', value: 'dark-theme' },
    } as MatSelectChange
    const spy = jest.spyOn(component['store'], 'dispatch')
    component.onChange(mockSelection)
    expect(spy).toHaveBeenCalledWith(
      CoreActions.changeTheme({ theme: mockSelection.value })
    )
  })
})

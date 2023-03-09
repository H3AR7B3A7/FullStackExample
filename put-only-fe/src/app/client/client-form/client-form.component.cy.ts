import { MatButtonModule } from '@angular/material/button'
import { provideMockStore } from '@ngrx/store/testing'

import { ClientFormComponent } from './client-form.component'

describe('ClientFormComponent', () => {
  it('should mount', () => {
    cy.mount(ClientFormComponent, {
      imports: [MatButtonModule],
      providers: [provideMockStore({})],
    })
  })
})

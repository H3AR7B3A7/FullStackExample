import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Client } from '@app/client/client'
import { ClientOverviewComponent } from '@app/client/client-overview/client-overview.component'
import { of } from 'rxjs'

describe('ClientOverviewComponent', () => {
  it('should mount', () => {
    cy.mount(ClientOverviewComponent, {
      imports: [
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
      ],
      componentProperties: {
        clients$: of(exampleData),
      },
    })
  })
})

const exampleData: Client[] = [
  { clientId: 1, secured: true },
  { clientId: 2, secured: false },
  { clientId: 3, secured: true },
]

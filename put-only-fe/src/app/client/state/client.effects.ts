import { Injectable } from '@angular/core'
import { ClientService } from '@app/client/client.service'
import { ClientApiActions, ClientPageActions } from '@app/client/state/actions'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of } from 'rxjs'

@Injectable()
export class ClientEffects {
  constructor(
    private actions$: Actions,
    private clientService: ClientService
  ) {}

  getClients$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ClientPageActions.loadClients),
      mergeMap(() =>
        this.clientService.getClients().pipe(
          map((clients) => ClientApiActions.loadClientsSuccess({ clients })),
          catchError((error) => of(ClientApiActions.loadClientsFail({ error })))
        )
      )
    )
  })
}

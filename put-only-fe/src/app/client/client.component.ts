import { Component } from '@angular/core'
import { ClientService } from './client.service'

@Component({
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent {
  constructor(private clientService: ClientService) {}

  clients$ = this.clientService.getClients()
}

import { Client } from '@app/client/client'

export interface ClientState {
  clients: Client[]
  errorMessage: string
  loading: boolean
  showForm: boolean
}

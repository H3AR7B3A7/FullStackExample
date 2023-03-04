package com.example.putonlybe;

import org.springframework.stereotype.Service;

@Service
public class ClientMapper {
    public Client toModel(ClientDto dto) {
        Client client = new Client();
        client.setClientId(dto.clientId());
        client.setSecured(dto.secured());
        return client;
    }
}

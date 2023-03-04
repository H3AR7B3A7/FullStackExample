package com.example.putonlybe;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ClientController {

    private final ClientRepository clientRepository;
    private final ClientMapper clientMapper;

    @Operation(summary = "Get all clients")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Fetched all clients"),
    })
    @GetMapping("/client")
    public List<Client> getAll() {
        return clientRepository.findAll();
    }

    @Operation(summary = "Get client by clientId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Client found"),
            @ApiResponse(responseCode = "404", description = "Client not found")
    })
    @GetMapping("/client/{clientId}")
    public Client getByClientId(@PathVariable String clientId) {
        return clientRepository.findByClientId(clientId).orElseThrow(() -> new EntityNotFoundException("Entity not found"));
    }

    @Operation(summary = "Create / update client ")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Client created"),
            @ApiResponse(responseCode = "204", description = "Client updated")
    })
    @PutMapping("/client/{clientId}")
    public ResponseEntity<Client> createOrUpdateClient(@PathVariable String clientId, @RequestBody ClientDto newClient) {
        return clientRepository.findByClientId(clientId)
                .map(existingClient -> {
                    existingClient.setClientId(newClient.clientId());
                    existingClient.setSecured(newClient.secured());
                    Client savedClient = clientRepository.save(existingClient);
                    return ResponseEntity.status(HttpStatus.NO_CONTENT).body(savedClient);
                })
                .orElseGet(() -> {
                    Client createdClient = clientRepository.save(clientMapper.toModel(newClient));
                    return ResponseEntity.status(HttpStatus.CREATED).body(createdClient);
                });
    }

    @Transactional
    @Operation(summary = "Delete client by clientId")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Client deleted"),
            @ApiResponse(responseCode = "404", description = "Client not found")
    })
    @DeleteMapping("/client/{clientId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteClient(@PathVariable String clientId) {
        Client client = clientRepository.findByClientId(clientId).orElseThrow(() -> new EntityNotFoundException("Entity not found"));
        clientRepository.delete(client);
    }

    @GetMapping("/clientid")
    public List<String> getClientIds() {
        return clientRepository.findAllCLientId(true);
    }

    @GetMapping("/clientid2")
    public List<ClientIdOnly> getClientIds2() {
        return clientRepository.findBySecured(true);
    }

    @GetMapping("/clientid3")
    public List<String> getClientIds3() {
        return clientRepository.findBySecured_(true).stream().map(Client::getClientId).toList();
    }
}

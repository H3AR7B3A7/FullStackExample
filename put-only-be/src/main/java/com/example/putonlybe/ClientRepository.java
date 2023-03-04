package com.example.putonlybe;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ClientRepository extends JpaRepository<Client, Long> {
    Optional<Client> findByClientId(String clientId);

    @Query( "select c.clientId from Client c where c.secured = :secured" )
    List<String> findAllCLientId(@Param("secured") boolean secured);

    List<ClientIdOnly> findBySecured(boolean secured);

    List<Client> findBySecured_(boolean secured);
}

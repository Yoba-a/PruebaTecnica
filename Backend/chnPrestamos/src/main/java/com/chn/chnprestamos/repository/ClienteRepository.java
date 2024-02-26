package com.chn.chnprestamos.repository;

import com.chn.chnprestamos.models.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, String> {
}

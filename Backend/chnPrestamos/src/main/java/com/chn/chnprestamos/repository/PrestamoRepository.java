package com.chn.chnprestamos.repository;

import com.chn.chnprestamos.models.Prestamo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PrestamoRepository extends JpaRepository<Prestamo, Integer> {


}

package com.chn.chnprestamos.repository;

import com.chn.chnprestamos.models.PagoPrestamo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PagoPrestamoRepository extends JpaRepository<PagoPrestamo, Integer> {
}

package com.chn.chnprestamos.repository;


import com.chn.chnprestamos.models.SolicitudPrestamo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SolicitudPrestamoRepository extends JpaRepository<SolicitudPrestamo, Integer> {


}

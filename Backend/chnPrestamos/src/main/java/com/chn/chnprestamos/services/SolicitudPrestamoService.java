package com.chn.chnprestamos.services;

import com.chn.chnprestamos.models.SolicitudPrestamo;
import com.chn.chnprestamos.repository.SolicitudPrestamoRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Setter
@Getter
public class SolicitudPrestamoService {
    @Autowired
    private SolicitudPrestamoRepository solicitudPrestamoRepository;


    public List<SolicitudPrestamo> findAll(){
        return solicitudPrestamoRepository.findAll();
    }

    public SolicitudPrestamo save(SolicitudPrestamo solicitudPrestamo) {
        return solicitudPrestamoRepository.save(solicitudPrestamo);
    }

    public SolicitudPrestamo findById(Integer id) {
        return solicitudPrestamoRepository.findById(id).orElse(null);
    }

    public void deleteById(Integer id) {
        solicitudPrestamoRepository.deleteById(id);
    }


}

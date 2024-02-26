package com.chn.chnprestamos.services;

import com.chn.chnprestamos.models.PagoPrestamo;
import com.chn.chnprestamos.repository.PagoPrestamoRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Setter
@Getter
public class PagoPrestamoService {

    @Autowired
    private PagoPrestamoRepository pagoPrestamoRepository;

    public List<PagoPrestamo> findAll(){
        return pagoPrestamoRepository.findAll();
    }


    public PagoPrestamo findById(Integer id) {
        return pagoPrestamoRepository.findById(id).orElse(null);
    }


    public PagoPrestamo save(PagoPrestamo pagoPrestamo) {
        return pagoPrestamoRepository.save(pagoPrestamo);
    }

    public void deleteById(Integer id) {
        pagoPrestamoRepository.deleteById(id);
    }

}

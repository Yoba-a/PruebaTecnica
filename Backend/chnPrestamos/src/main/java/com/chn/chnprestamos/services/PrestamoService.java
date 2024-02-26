package com.chn.chnprestamos.services;

import com.chn.chnprestamos.models.Prestamo;
import com.chn.chnprestamos.repository.PrestamoRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Setter
@Getter
public class PrestamoService {

    @Autowired
    private PrestamoRepository prestamoRepository;

    public List<Prestamo> findAll(){
        return prestamoRepository.findAll();
    }

    public Prestamo findById(Integer id) {
        return prestamoRepository.findById(id).orElse(null);
    }

    public Prestamo save(Prestamo prestamo) {
        return prestamoRepository.save(prestamo);
    }

    public void deleteById(Integer id) {
        prestamoRepository.deleteById(id);
    }

}

import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function preventDefault(event) {
  event.preventDefault();
}

export default function PrestamosActivos() {
  const [prestamos, setPrestamos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPrestamos = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/chnApi/prestamo');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPrestamos(data);
      } catch (error) {
        console.error("Failed to fetch préstamos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrestamos();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <React.Fragment>
      <Title>Préstamos</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID Préstamo</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Monto Solicitado</TableCell>
            <TableCell>Monto Final Aprobado</TableCell>
            <TableCell>Fecha Inicio</TableCell>
            <TableCell>Tasa de Interés</TableCell>
            <TableCell>Cuota Mensual</TableCell>
            <TableCell>Estado del Préstamo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prestamos.map((prestamo) => (
            <TableRow key={prestamo.prestamoID}>
              <TableCell>{prestamo.prestamoID}</TableCell>
              <TableCell>{prestamo.solicitudPrestamo.usuarioCliente.nombreUsuario}</TableCell>
              <TableCell>{`$${prestamo.solicitudPrestamo.montoSolicitado}`}</TableCell>
              <TableCell>{`$${prestamo.montoFinalAprobado}`}</TableCell>
              <TableCell>{prestamo.fechaInicio}</TableCell>
              <TableCell>{`${prestamo.tasaDeInteres * 100}%`}</TableCell>
              <TableCell>{`$${prestamo.cuotaMensual}`}</TableCell>
              <TableCell>{prestamo.estadoPrestamo.estadoPrestamo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Ver más préstamos
      </Link>
    </React.Fragment>
  );
}

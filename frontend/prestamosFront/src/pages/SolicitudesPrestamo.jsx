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

export default function SolicitudesPrestamo() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSolicitudesPrestamo = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/chnApi/solicitud-prestamo');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSolicitudes(data);
      } catch (error) {
        console.error("Failed to fetch solicitudes de préstamo:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSolicitudesPrestamo();
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
      <Title>Solicitudes de Préstamo</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID Solicitud</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Monto Solicitado</TableCell>
            <TableCell>Fecha Solicitud</TableCell>
            <TableCell>Fecha Inicio Préstamo</TableCell>
            <TableCell>Tasa Interés Solicitada</TableCell>
            <TableCell>Estado Solicitud</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {solicitudes.map((solicitud) => (
            <TableRow key={solicitud.solicitudID}>
              <TableCell>{solicitud.solicitudID}</TableCell>
              <TableCell>{solicitud.usuarioCliente.nombreUsuario}</TableCell>
              <TableCell>{`$${solicitud.montoSolicitado}`}</TableCell>
              <TableCell>{solicitud.fechaSolicitud}</TableCell>
              <TableCell>{solicitud.fechaInicioPrestamo}</TableCell>
              <TableCell>{`${solicitud.tasaInteresSolicitada * 100}%`}</TableCell>
              <TableCell>{solicitud.estadoSolicitud.estadoSolicitud}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Ver más solicitudes
      </Link>
    </React.Fragment>
  );
}

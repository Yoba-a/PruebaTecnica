import React, { useState } from 'react';
import { Grid, Typography, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import { Snackbar, Alert } from '@mui/material';




export default function AgregarCliente() {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success'); 
  const [cliente, setCliente] = useState({
    noIdenteificacion: '',
    usuario: {
      nombreUsuario: '',
      estadoUsuario: 'A',
      password: '',
      rol: {
        rolID: 3,
        nombreRol: 'Cliente'
      }
    },
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    direccion: '',
    correoElectronico: '',
    telefono: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith('usuario.')) {
      const fieldName = name.split('.')[1];
      setCliente({
        ...cliente,
        usuario: {
          ...cliente.usuario,
          [fieldName]: value
        }
      });
    } else {
      setCliente({ ...cliente, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
     console.log(cliente)
      const response = await fetch('http://localhost:8080/chnApi/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(cliente),
      });
      

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setSnackbarMessage('Cliente agregado con éxito');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      
    } catch (error) {
        console.error('Hubo un error!', error);
    
        setSnackbarMessage('Error al agregar cliente');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      console.error('Hubo un error!', error);
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Agregar Cliente
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="noIdenteificacion"
              name="noIdenteificacion"
              label="No Identificación"
              fullWidth
              variant="standard"
              value={cliente.noIdenteificacion}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="nombreUsuario"
              name="usuario.nombreUsuario"
              label="Nombre de Usuario"
              fullWidth
              variant="standard"
              value={cliente.usuario.nombreUsuario}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="usuario.password"
              label="Contraseña"
              type="password"
              fullWidth
              variant="standard"
              value={cliente.usuario.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="nombre"
              name="nombre"
              label="Nombre"
              fullWidth
              variant="standard"
              value={cliente.nombre}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="apellido"
              name="apellido"
              label="Apellido"
              fullWidth
              variant="standard"
              value={cliente.apellido}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="fechaNacimiento"
              name="fechaNacimiento"
              label="Fecha de Nacimiento"
              type="date"
              fullWidth
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              value={cliente.fechaNacimiento}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="direccion"
              name="direccion"
              label="Dirección"
              fullWidth
              variant="standard"
              value={cliente.direccion}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="correoElectronico"
              name="correoElectronico"
              label="Correo Electrónico"
              fullWidth
              variant="standard"
              value={cliente.correoElectronico}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="telefono"
              name="telefono"
              label="Teléfono"
              fullWidth
              variant="standard"
              value={cliente.telefono}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
      <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
    </React.Fragment>
  );
}

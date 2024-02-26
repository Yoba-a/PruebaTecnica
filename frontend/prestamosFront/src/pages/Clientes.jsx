import React, { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Modal, TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

function preventDefault(event) {
  event.preventDefault();
}

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [clienteEditando, setClienteEditando] = useState({});

  useEffect(() => {
    const fetchClientes = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/chnApi/clientes");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        console.error("Failed to fetch clientes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const handleOpenModal = (cliente) => {
    setClienteEditando(cliente);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleEditClick = (cliente) => () => {
    handleOpenModal(cliente);
  };

  const handleDeleteClick = (noIdentificacion) => async () => {
    
    if (window.confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      try {
        const response = await fetch(`http://localhost:8080/chnApi/clientes/deleteCliente/${noIdentificacion}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error(`Error al eliminar el cliente: ${response.statusText}`);
        }
        
        setClientes(clientes.filter((cliente) => cliente.noIdenteificacion !== noIdentificacion));
        
        alert('Cliente eliminado con éxito');
      } catch (error) {
        console.error('Hubo un error al eliminar el cliente:', error);
        
        alert('Error al eliminar el cliente');
      }
    }
  };
  

  return (
    <React.Fragment>
      <Title>Lista de Clientes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>No. Identificación</TableCell>
            <TableCell>Nombre Usuario</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Correo Electrónico</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell>Direccion</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientes.map((cliente) => (
            <TableRow key={cliente.noIdenteificacion}>
              <TableCell>{cliente.noIdenteificacion}</TableCell>
              <TableCell>{cliente.usuario.nombreUsuario}</TableCell>
              <TableCell>{cliente.nombre}</TableCell>
              <TableCell>{cliente.apellido}</TableCell>
              <TableCell>{cliente.correoElectronico}</TableCell>
              <TableCell>{cliente.telefono}</TableCell>
              <TableCell>{cliente.direccion}</TableCell>
              <TableCell>
                <IconButton onClick={handleEditClick(cliente)} color="primary">
                  <EditIcon />
                </IconButton>

                <IconButton
                  onClick={handleDeleteClick(cliente.noIdenteificacion)}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Ver más clientes
      </Link>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editar Cliente
          </Typography>
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
            onSubmit={(event) => {
              
              console.log(clienteEditando);
              
              fetch(`http://localhost:8080/chnApi/clientes/updateCliente`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(clienteEditando) });
              handleCloseModal();
            }}
          >
            <TextField
              label="No. Identificación"
              variant="standard"
              fullWidth
              value={clienteEditando.noIdenteificacion || ""}
              onChange={(e) =>
                setClienteEditando({
                  ...clienteEditando,
                  noIdenteificacion: e.target.value,
                })
              }
            />
            
            <TextField
              label="Nombre"
              variant="standard"
              fullWidth
              value={clienteEditando.nombre || ""}
              onChange={(e) =>
                setClienteEditando({
                  ...clienteEditando,
                  nombre: e.target.value,
                })
              }
            />

            <TextField
                label="Apellido"
                variant="standard"
                fullWidth
                value={clienteEditando.apellido || ""}
                onChange={(e) =>
                    setClienteEditando({
                    ...clienteEditando,
                    apellido: e.target.value,
                    })
                }
            />

            <TextField
                label="Correo Electrónico"
                variant="standard"
                fullWidth
                value={clienteEditando.correoElectronico || ""}
                onChange={(e) =>
                    setClienteEditando({
                    ...clienteEditando,
                    correoElectronico: e.target.value,
                    })
                }
            />

            <TextField
                label="Teléfono"
                variant="standard"
                fullWidth
                value={clienteEditando.telefono || ""}
                onChange={(e) =>
                    setClienteEditando({
                    ...clienteEditando,
                    telefono: e.target.value,
                    })
                }
            />

            <TextField
                label="Dirección"
                variant="standard"
                fullWidth
                value={clienteEditando.direccion || ""}
                onChange={(e) =>
                    setClienteEditando({
                    ...clienteEditando,
                    direccion: e.target.value,
                    })
                }
            />

            
            <Button type="submit" variant="contained" color="primary">
              Guardar Cambios
            </Button>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

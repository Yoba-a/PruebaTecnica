
## Se crea el diagrama de entidad relacion de la aplicacion

[![image.png](https://i.postimg.cc/PqNx4mHg/image.png)](https://postimg.cc/CZTSMnz7)


## Estructura del proyecto 

[![image.png](https://i.postimg.cc/76GnpG3c/image.png)](https://postimg.cc/Q9D77Mnk)

### Controladores
en este paquete defini los Controladores necesarios para el manejo de la informacion 

### Models 
en este paquete defini las entidades de la base de datos usando anotaciones asi como todos atributos de cada tabla 

## repository 
aca maneje los repository de cada entidad que extiende de jpa 

## services 
Este paque usa las funciones que se definen en nuestro repository para que nuestros Controladores usen estos objetos de la capa de base de datos 




## compilacion del proyecto 

docker-compose up --build 
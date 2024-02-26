# Usar la imagen base del JDK que necesitas
FROM maven:3.8.4-openjdk-17 AS build

# Copiar archivos pom.xml y src al contenedor
COPY /chnPrestamos/pom.xml /tmp/
COPY /chnPrestamos/mvnw /tmp/
COPY /chnPrestamos/mvnw.cmd /tmp/
COPY /chnPrestamos/src /tmp/src/

# Establecer el directorio de trabajo
WORKDIR /tmp/

# Compilar el proyecto
RUN mvn clean package -DskipTests

# Usar la imagen base de OpenJDK para la imagen final
FROM openjdk:17-oracle

# Copiar el jar compilado desde la etapa de construcción al contenedor
COPY --from=build /tmp/target/chnPrestamos-0.0.1-SNAPSHOT.jar /app.jar

# Exponer el puerto que usa la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java","-jar","/app.jar"]

# Aprendiendo Debian

Cuaderno de estudio de la [Debian Reference (version 2.100)](https://packages.debian.org/bookworm/debian-reference)
Manual de usuario de [Debian 12 (Bookworm)](https://packages.debian.org/bookworm/) 

de [Osamu Aoki](https://salsa.debian.org/osamu) (青木 修).

---
# Prefacio

## 1. Aviso

The Debian system itself is a moving target. This makes its documentation difficult to be current and correct. Although the current testing version of the Debian system was used as the basis for writing this, some contents may be already outdated by the time you read this.

## 2. Qué es Debian

What is Debian

The Debian Project is an association of individuals who have made common cause to create a free operating system. It's distribution is characterized by the following.

Commitment to the software freedom: Debian Social Contract and Debian Free Software Guidelines (DFSG)

Internet based distributed unpaid volunteer effort: https://www.debian.org

Large number of pre-compiled high quality software packages

Focus on stability and security with easy access to the security updates

Focus on smooth upgrade to the latest software packages in the testing archives

Large number of supported hardware architectures

## 3. Sobre este documento

### 3.1. Principios rectores

Following guiding rules are followed while compiling this document.

Provide overview and skip corner cases. (Big Picture)

Keep It Short and Simple. (KISS)

Do not reinvent the wheel. (Use pointers to the existing references)

Focus on non-GUI tools and consoles. (Use shell examples)

Be objective. (Use popcon etc.)

### 3.2. Prerrequisitos

You are expected to make good efforts to seek answers by yourself beyond this documentation. This document only gives efficient starting points.

You must seek solution by yourself from primary sources.

The Debian site https://www.debian.org 

The documentation directory
"/usr/share/doc/package_name"

Wikipedia https://www.wikipedia.org/

The Debian Administrator's Handbook
https://www.debian.org/doc/manuals/debian-handbook/
 
The Linux Documentation Project (TLDP) http://tldp.org/

### 3.3. Convenciones

´#´ command-in-root-account

$ command-in-user-account

### 3.4. Estadísticas de uso (popcon)

### 3.5. El tamaño del paquete

### 3.6. Informes de errores en este documento

## 4. Recordatorios para nuevos usuarios

## 5. Algunas citas para nuevos usuarios

# 1. Tutoriales de GNU/Linux

## 1.1. Fundamentos de la consola

### 1.1.1. El shell prompt

### 1.1.2. El shell prompt en el entorno gráfico

### 1.1.3. La cuenta root

### 1.1.4. El shell prompt de root

### 1.1.5. Herramientas gráficas de administración del sistema

### 1.1.6. Consolas virtuales

### 1.1.7. Cómo salir del intérprete de órdenes

### 1.1.8. Cómo apagar el sistema

### 1.1.9. Recuperar una consola en estado normal

### 1.1.10. Paquetes adicionales recomendados para principiantes

### 1.1.11. Una cuenta de usuario adicional

### 1.1.12. Configuración de sudo

### 1.1.13. Tiempo de juego

## 1.2. Sistema de archivos tipo Unix

### 1.2.1. Fundamentos de los archivos Unix

### 1.2.2. Estructura interna del sistema de archivos

### 1.2.3. Permisos del sistema de archivos

### 1.2.4. Control de permisos de archivos nuevos: umask

### 1.2.5. Permisos para grupos de usuarios (group)

### 1.2.6. Marcas de tiempo

### 1.2.7. Enlaces

### 1.2.8. Tuberías con nombre (FIFOs)

### 1.2.9. Sockets

### 1.2.10. Archivos de dispositivo

### 1.2.11. Archivos especiales de dispositivo

### 1.2.12. procfs y sysfs

### 1.2.13. tmpfs

## 1.3. Midnight Commander (MC)

### 1.3.1. Personalización de MC

### 1.3.2. Inicio de MC

### 1.3.3. Administrador de archivos de MC

### 1.3.4. Trucos de línea de órdenes en MC

### 1.3.5. Editor interno de MC

### 1.3.6. Visor interno de MC

### 1.3.7. Funciones de inicio automático de MC

### 1.3.8. Sistema de archivos virtual de MC

## 1.4. Entorno de trabajo básico tipo Unix

### 1.4.1. Shell de inicio de sesión

### 1.4.2. Personalización de bash

### 1.4.3. Combinaciones especiales de teclas

### 1.4.4. Operaciones con el ratón

### 1.4.5. El paginador

### 1.4.6. El editor de texto

### 1.4.7. Configurar el editor de texto predeterminado

### 1.4.8. Uso de vim

### 1.4.9. Registro de la actividad del shell

### 1.4.10. Órdenes básicas de Unix

## 1.5. Órdenes simples del shell

### 1.5.1. Ejecución de órdenes y variables de entorno

### 1.5.2. La variable "$LANG"

### 1.5.3. La variable "$PATH"

### 1.5.4. La variable "$HOME"

### 1.5.5. Opciones de la línea de órdenes

### 1.5.6. Patrones glob del shell

### 1.5.7. Valor de retorno de una orden

### 1.5.8. Secuencias típicas de órdenes y redirección del shell

### 1.5.9. Alias de órdenes

## 1.6. Procesamiento de texto tipo Unix

### 1.6.1. Herramientas de texto de Unix

### 1.6.2. Expresiones regulares

### 1.6.3. Expresiones de reemplazo

### 1.6.4. Sustitución global con expresiones regulares

### 1.6.5. Extracción de datos de tablas en archivos de texto

### 1.6.6. Fragmentos de scripts para encadenar órdenes

# 2. Gestión de paquetes Debian

## 2.1. Requisitos previos para la gestión de paquetes Debian

### 2.1.1. Configuración de paquetes

### 2.1.2. Precauciones básicas

### 2.1.3. Vivir con actualizaciones constantes

### 2.1.4. Fundamentos del archivo Debian

### 2.1.5. Debian es 100 % software libre

### 2.1.6. Dependencias de paquetes

### 2.1.7. Flujo de eventos de la gestión de paquetes

### 2.1.8. Primera respuesta ante problemas de gestión de paquetes

## 2.2. Operaciones básicas de gestión de paquetes

### 2.2.1. apt frente a apt-get / apt-cache frente a aptitude

### 2.2.2. Operaciones básicas de gestión de paquetes en la línea de órdenes

### 2.2.3. Uso interactivo de aptitude

### 2.2.4. Combinaciones de teclas de aptitude

### 2.2.5. Vistas de paquetes en aptitude

### 2.2.6. Opciones de método de búsqueda de aptitude

### 2.2.7. Fórmula de expresiones regulares de aptitude

### 2.2.8. Resolución de dependencias de aptitude

### 2.2.9. Registros de actividad de paquetes

## 2.3. Ejemplos de operaciones con aptitude

### 2.3.1. Listar paquetes mediante expresiones regulares en sus nombres

### 2.3.2. Explorar mediante coincidencias de expresiones regulares

### 2.3.3. Purgar definitivamente los paquetes eliminados

### 2.3.4. Ordenar el estado de instalación automática/manual

### 2.3.5. Actualización de todo el sistema

## 2.4. Operaciones avanzadas de gestión de paquetes

### 2.4.1. Operaciones avanzadas de gestión de paquetes en la línea de órdenes

### 2.4.2. Verificación de archivos de paquetes instalados

### 2.4.3. Protección ante problemas con paquetes

### 2.4.4. Búsqueda en los metadatos de paquetes

## 2.5. Aspectos internos de la gestión de paquetes Debian

### 2.5.1. Metadatos del archivo

### 2.5.2. Archivo «Release» de nivel superior y autenticidad

### 2.5.3. Archivos «Release» de nivel de archivo

### 2.5.4. Obtención de metadatos de paquetes

### 2.5.5. Estado de los paquetes para APT

### 2.5.6. Estado de los paquetes para aptitude

### 2.5.7. Copias locales de los paquetes descargados

### 2.5.8. Nombres de archivos de paquetes Debian

### 2.5.9. La orden dpkg

### 2.5.10. La orden update-alternatives

### 2.5.11. La orden dpkg-statoverride

### 2.5.12. La orden dpkg-divert

## 2.6. Recuperación de un sistema averiado

### 2.6.1. Fallo de instalación por dependencias ausentes

### 2.6.2. Errores de caché de los datos de paquetes

### 2.6.3. Incompatibilidad con configuraciones antiguas de usuario

### 2.6.4. Paquetes distintos con archivos superpuestos

### 2.6.5. Reparar un script de paquete averiado

### 2.6.6. Recuperación con la orden dpkg

### 2.6.7. Recuperar los datos de selección de paquetes

## 2.7. Consejos para la gestión de paquetes

### 2.7.1. Cómo elegir paquetes Debian

### 2.7.2. Paquetes de archivos fuente mezclados

### 2.7.3. Ajustar la versión candidata

### 2.7.4. Actualizaciones y backports

### 2.7.5. Bloquear paquetes instalados por «Recommends»

### 2.7.6. Seguir testing con algunos paquetes de unstable

### 2.7.7. Seguir unstable con algunos paquetes de experimental

### 2.7.8. Descarga y actualización automática de paquetes

### 2.7.9. Limitar el ancho de banda de descarga de APT

### 2.7.10. Degradación de emergencia

### 2.7.11. ¿Quién subió el paquete?

### 2.7.12. El paquete equivs

### 2.7.13. Adaptar un paquete al sistema stable

### 2.7.14. Servidor proxy para APT

### 2.7.15. Lecturas adicionales sobre gestión de paquetes

# 3. Inicialización del sistema

## 3.1. Descripción general del proceso de arranque

### 3.1.1. Etapa 1: UEFI

### 3.1.2. Etapa 2: el gestor de arranque

### 3.1.3. Etapa 3: el sistema Debian mínimo

### 3.1.4. Etapa 4: el sistema Debian normal

## 3.2. Inicio con systemd

### 3.2.1. El nombre de host

### 3.2.2. El sistema de archivos

### 3.2.3. Inicialización de interfaces de red

## 3.3. Mensajes del núcleo

## 3.4. Mensajes del sistema

## 3.5. Gestión del sistema

## 3.6. Otros monitores del sistema

## 3.7. Personalización de systemd

### 3.7.1. Activación por sockets

## 3.8. El sistema udev

### 3.8.1. Inicialización de módulos del núcleo

# 4. Autenticación y controles de acceso

## 4.1. Autenticación normal de Unix

## 4.2. Gestión de información de cuentas y contraseñas

## 4.3. Contraseñas seguras

## 4.4. Creación de contraseñas cifradas

## 4.5. PAM y NSS

### 4.5.1. Archivos de configuración consultados por PAM y NSS

### 4.5.2. Gestión centralizada moderna del sistema

### 4.5.3. «Por qué GNU su no admite el grupo wheel»

### 4.5.4. Reglas de contraseñas más estrictas

## 4.6. Seguridad de la autenticación

### 4.6.1. Contraseñas seguras en Internet

### 4.6.2. Secure Shell

### 4.6.3. Medidas adicionales de seguridad para Internet

### 4.6.4. Protección de la contraseña de root

## 4.7. Otros controles de acceso

### 4.7.1. sudo

### 4.7.2. PolicyKit

### 4.7.3. Restricción de acceso a algunos servicios de servidor

### 4.7.4. Funciones de seguridad de Linux

# 5. Configuración de red

## 5.1. Infraestructura de red básica

### 5.1.1. Resolución de nombres de host

### 5.1.2. Nombre de las interfaces de red

### 5.1.3. Rango de direcciones de red para la LAN

### 5.1.4. Compatibilidad con dispositivos de red

## 5.2. Configuración moderna de red para el escritorio

### 5.2.1. Herramientas gráficas de configuración de red

## 5.3. Configuración moderna de red sin entorno gráfico

## 5.4. Configuración de red de bajo nivel

### 5.4.1. Órdenes de iproute2

### 5.4.2. Operaciones seguras de red de bajo nivel

## 5.5. Optimización de red

### 5.5.1. Cómo encontrar el MTU óptimo

### 5.5.2. Optimización de TCP para WAN

## 5.6. Infraestructura de Netfilter

# 6. Aplicaciones de red

## 6.1. Navegadores web

### 6.1.1. Suplantación de la cadena User-Agent

### 6.1.2. Extensiones del navegador

## 6.2. El sistema de correo

### 6.2.1. Fundamentos del correo electrónico

### 6.2.2. Limitaciones de los servicios de correo modernos

### 6.2.3. Expectativas históricas de los servicios de correo

### 6.2.4. Agente de transporte de correo (MTA)

#### 6.2.4.1. Configuración de exim4

#### 6.2.4.2. Configuración de postfix con SASL

#### 6.2.4.3. Configuración de direcciones de correo

#### 6.2.4.4. Operaciones básicas de MTA

## 6.3. Servidor y utilidades de acceso remoto (SSH)

### 6.3.1. Fundamentos de SSH

### 6.3.2. Nombre de usuario en el host remoto

### 6.3.3. Conexión sin contraseñas remotas

### 6.3.4. Cómo tratar con clientes SSH ajenos

### 6.3.5. Configuración de ssh-agent

### 6.3.6. Envío de correo desde un host remoto

### 6.3.7. Reenvío de puertos para túneles SMTP/POP3

### 6.3.8. Cómo apagar el sistema remoto mediante SSH

### 6.3.9. Resolución de problemas de SSH

## 6.4. Servidor de impresión y utilidades

## 6.5. Otros servidores de aplicaciones de red

## 6.6. Otros clientes de aplicaciones de red

## 6.7. Diagnóstico de los daemons del sistema

# 7. Sistema gráfico

## 7.1. Entorno de escritorio gráfico

## 7.2. Protocolo de comunicación gráfica

## 7.3. Infraestructura gráfica

## 7.4. Aplicaciones gráficas

## 7.5. Fuentes tipográficas

### 7.5.1. Fuentes básicas

### 7.5.2. Rasterización de fuentes

## 7.6. Entorno aislado (sandbox)

## 7.7. Escritorio remoto

## 7.8. Conexión al servidor X

### 7.8.1. Conexión local al servidor X

### 7.8.2. Conexión remota al servidor X

### 7.8.3. Conexión al servidor X mediante chroot

## 7.9. Portapapeles

# 8. Internacionalización y localización (I18N y L10N)

## 8.1. Configuración regional (locale)

### 8.1.1. Fundamentos de la configuración regional UTF-8

### 8.1.2. Reconfiguración de la configuración regional

### 8.1.3. Codificación de nombres de archivo

### 8.1.4. Mensajes localizados y documentación traducida

### 8.1.5. Efectos de la configuración regional

## 8.2. Entrada de teclado

### 8.2.1. Entrada de teclado en la consola Linux y X Window

### 8.2.2. Entrada de teclado en Wayland

### 8.2.3. Compatibilidad con métodos de entrada mediante IBus

### 8.2.4. Un ejemplo para japonés

## 8.3. Salida en pantalla

## 8.4. Caracteres de ancho ambiguo de Asia oriental

# 9. Consejos para el sistema

## 9.1. Consejos para la consola

### 9.1.1. Registro limpio de la actividad del shell

### 9.1.2. El programa screen

### 9.1.3. Navegación por directorios

### 9.1.4. Envoltorio de Readline

### 9.1.5. Exploración del árbol de código fuente

## 9.2. Personalización de vim

### 9.2.1. Personalización de vim con funciones internas

### 9.2.2. Personalización de vim con paquetes externos

## 9.3. Registro y presentación de datos

### 9.3.1. El daemon de registros

### 9.3.2. Analizador de registros

### 9.3.3. Visualización personalizada de datos de texto

### 9.3.4. Visualización personalizada de fecha y hora

### 9.3.5. Eco coloreado del shell

### 9.3.6. Órdenes coloreadas

### 9.3.7. Registro de la actividad del editor para repeticiones complejas

### 9.3.8. Captura de imágenes de una aplicación X

### 9.3.9. Registro de cambios en archivos de configuración

## 9.4. Supervisión, control e inicio de actividades de programas

### 9.4.1. Medición del tiempo de un proceso

### 9.4.2. Prioridad de planificación

### 9.4.3. La orden ps

### 9.4.4. La orden top

### 9.4.5. Listado de archivos abiertos por un proceso

### 9.4.6. Seguimiento de la actividad de programas

### 9.4.7. Identificación de procesos que usan archivos o sockets

### 9.4.8. Repetición de una orden a intervalos constantes

### 9.4.9. Repetición de una orden recorriendo archivos

### 9.4.10. Inicio de un programa desde el entorno gráfico

### 9.4.11. Personalización de programas que se inician

### 9.4.12. Terminación de un proceso

### 9.4.13. Programación de tareas puntuales

### 9.4.14. Programación periódica de tareas

### 9.4.15. Tecla Alt-SysRq

## 9.5. Consejos de mantenimiento del sistema

### 9.5.1. ¿Quién está en el sistema?

### 9.5.2. Avisar a todos los usuarios

### 9.5.3. Identificación del hardware

### 9.5.4. Configuración del hardware

### 9.5.5. Hora del sistema y del hardware

### 9.5.6. Configuración del terminal

### 9.5.7. Infraestructura de sonido

### 9.5.8. Desactivar el salvapantallas

### 9.5.9. Desactivar los sonidos de aviso

### 9.5.10. Uso de memoria

### 9.5.11. Comprobación de seguridad e integridad del sistema

## 9.6. Consejos para el almacenamiento de datos

### 9.6.1. Uso del espacio en disco

### 9.6.2. Configuración de particiones de disco

### 9.6.3. Acceso a particiones mediante UUID

### 9.6.4. LVM2

### 9.6.5. Configuración del sistema de archivos

### 9.6.6. Creación y comprobación de integridad del sistema de archivos

### 9.6.7. Optimización del sistema de archivos mediante opciones de montaje

### 9.6.8. Optimización del sistema de archivos mediante el superbloque

### 9.6.9. Optimización del disco duro

### 9.6.10. Optimización de unidades de estado sólido

### 9.6.11. Uso de SMART para predecir fallos del disco duro

### 9.6.12. Especificar el directorio temporal mediante $TMPDIR

### 9.6.13. Ampliación del almacenamiento disponible mediante LVM

### 9.6.14. Ampliación del almacenamiento disponible montando otra partición

### 9.6.15. Ampliación del almacenamiento disponible mediante bind-mount de otro directorio

### 9.6.16. Ampliación del almacenamiento disponible mediante overlay-mount de otro directorio

### 9.6.17. Ampliación del almacenamiento disponible mediante un enlace simbólico

## 9.7. Imagen de disco

### 9.7.1. Creación de un archivo de imagen de disco

### 9.7.2. Escritura directa en el disco

### 9.7.3. Montaje del archivo de imagen de disco

### 9.7.4. Limpieza de un archivo de imagen de disco

### 9.7.5. Creación de un archivo de imagen de disco vacío

### 9.7.6. Creación de un archivo de imagen ISO9660

### 9.7.7. Escritura directa en un CD/DVD-R/RW

### 9.7.8. Montaje de un archivo de imagen ISO9660

## 9.8. Datos binarios

### 9.8.1. Visualización y edición de datos binarios

### 9.8.2. Manipulación de archivos sin montar el disco

### 9.8.3. Redundancia de datos

### 9.8.4. Recuperación de archivos de datos y análisis forense

### 9.8.5. División de archivos grandes en archivos pequeños

### 9.8.6. Vaciado del contenido de archivos

### 9.8.7. Archivos ficticios

### 9.8.8. Borrado de un disco duro completo

### 9.8.9. Borrado del espacio no utilizado de un disco duro

### 9.8.10. Recuperación de archivos eliminados que siguen abiertos

### 9.8.11. Búsqueda de todos los enlaces duros

### 9.8.12. Consumo invisible de espacio en disco

## 9.9. Consejos de cifrado de datos

### 9.9.1. Cifrado de discos extraíbles con dm-crypt/LUKS

### 9.9.2. Montaje de discos cifrados con dm-crypt/LUKS

## 9.10. El núcleo

### 9.10.1. Parámetros del núcleo

### 9.10.2. Cabeceras del núcleo

### 9.10.3. Compilación del núcleo y módulos relacionados

### 9.10.4. Compilación del código fuente del núcleo: recomendación del equipo Debian Kernel

### 9.10.5. Controladores de hardware y firmware

## 9.11. Sistema virtualizado

### 9.11.1. Herramientas de virtualización y emulación

### 9.11.2. Flujo de trabajo de virtualización

### 9.11.3. Montaje del archivo de imagen de disco virtual

### 9.11.4. Sistema chroot

### 9.11.5. Varios sistemas de escritorio

# 10. Gestión de datos

## 10.1. Compartir, copiar y archivar

### 10.1.1. Herramientas de archivado y compresión

### 10.1.2. Herramientas de copia y sincronización

### 10.1.3. Convenciones para archivos comprimidos

### 10.1.4. Convenciones para copias

### 10.1.5. Convenciones para seleccionar archivos

### 10.1.6. Medios de archivo

### 10.1.7. Dispositivos de almacenamiento extraíbles

### 10.1.8. Elección del sistema de archivos para compartir datos

### 10.1.9. Compartir datos a través de la red

## 10.2. Copias de seguridad y recuperación

### 10.2.1. Política de copias de seguridad y recuperación

### 10.2.2. Conjuntos de utilidades de copia de seguridad

### 10.2.3. Copias de seguridad personales

## 10.3. Infraestructura de seguridad de datos

### 10.3.1. Gestión de claves para GnuPG

### 10.3.2. Uso de GnuPG con archivos

### 10.3.3. Uso de GnuPG con Mutt

### 10.3.4. Uso de GnuPG con Vim

### 10.3.5. La suma MD5

### 10.3.6. Llavero de contraseñas

## 10.4. Herramientas de combinación de código fuente

### 10.4.1. Extracción de diferencias entre archivos de código fuente

### 10.4.2. Combinación de actualizaciones de archivos de código fuente

### 10.4.3. Combinación interactiva

## 10.5. Git

### 10.5.1. Configuración del cliente Git

### 10.5.2. Órdenes básicas de Git

### 10.5.3. Consejos para Git

### 10.5.4. Referencias de Git

### 10.5.5. Otros sistemas de control de versiones

# 11. Conversión de datos

## 11.1. Herramientas de conversión de texto

### 11.1.1. Conversión de archivos de texto con iconv

### 11.1.2. Comprobación de que un archivo sea UTF-8 con iconv

### 11.1.3. Conversión de nombres de archivo con iconv

### 11.1.4. Conversión de finales de línea (EOL)

### 11.1.5. Conversión de tabulaciones (TAB)

### 11.1.6. Editores con conversión automática

### 11.1.7. Extracción de texto sin formato

### 11.1.8. Resaltado y formato de texto sin formato

## 11.2. Datos XML

### 11.2.1. Indicaciones básicas para XML

### 11.2.2. Procesamiento de XML

### 11.2.3. Extracción de datos XML

### 11.2.4. Validación de XML

## 11.3. Composición tipográfica

### 11.3.1. Composición tipográfica con roff

### 11.3.2. TeX/LaTeX

### 11.3.3. Impresión cuidada de una página de manual

### 11.3.4. Creación de una página de manual

## 11.4. Datos imprimibles

### 11.4.1. Ghostscript

### 11.4.2. Combinar dos archivos PS o PDF

### 11.4.3. Utilidades para datos imprimibles

### 11.4.4. Impresión con CUPS

## 11.5. Conversión de datos de correo

### 11.5.1. Fundamentos de datos de correo

## 11.6. Herramientas para datos gráficos

## 11.7. Conversión miscelánea de datos

# 12. Programación

## 12.1. Scripts de shell

### 12.1.1. Compatibilidad con el shell POSIX

### 12.1.2. Parámetros del shell

### 12.1.3. Condicionales del shell

### 12.1.4. Bucles del shell

### 12.1.5. Variables de entorno del shell

### 12.1.6. Secuencia de procesamiento de la línea de órdenes del shell

### 12.1.7. Programas de utilidad para scripts de shell

## 12.2. Programación con lenguajes interpretados

### 12.2.1. Depuración de código en lenguajes interpretados

### 12.2.2. Programa gráfico con un script de shell

### 12.2.3. Acciones personalizadas para el gestor de archivos gráfico

### 12.2.4. Locura de scripts cortos en Perl

## 12.3. Programación en lenguajes compilados

### 12.3.1. C

### 12.3.2. Programa C sencillo (gcc)

### 12.3.3. Flex: un Lex mejorado

### 12.3.4. Bison: un Yacc mejorado

## 12.4. Herramientas de análisis estático de código

## 12.5. Depuración

### 12.5.1. Ejecución básica de gdb

### 12.5.2. Depuración del paquete Debian

### 12.5.3. Obtención de un backtrace

### 12.5.4. Órdenes avanzadas de gdb

### 12.5.5. Comprobación de dependencias de bibliotecas

### 12.5.6. Herramientas de seguimiento dinámico de llamadas

### 12.5.7. Depuración de errores de X

### 12.5.8. Herramientas de detección de fugas de memoria

### 12.5.9. Desensamblado de binarios

## 12.6. Herramientas de construcción

### 12.6.1. Make

### 12.6.2. Autotools

#### 12.6.2.1. Compilación e instalación de un programa

#### 12.6.2.2. Desinstalación de un programa

### 12.6.3. Meson

## 12.7. Web

## 12.8. Traducción del código fuente

## 12.9. Creación de paquetes Debian

# A. Apéndice

## A.1. El laberinto Debian

## A.2. Historia de los derechos de autor

## A.3. Formato del documento

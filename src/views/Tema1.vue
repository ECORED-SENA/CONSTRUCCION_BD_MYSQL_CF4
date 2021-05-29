<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 ¿Qué es SQL?
  

    .row.justify-content-around.align-items-center.p-4
    
      .col-4
          figure
            .img-50.img-c.p-4
              img.img-c(src="@/assets/tema1/t-1.svg")        
      .col-lg-8
          
          p.mb-4p.mb-4 SQL (por sus siglas en inglés Structured Query Language; en español lenguaje de consulta estructurada) es un lenguaje que da acceso a un sistema de gestión de bases de datos relacionales que permite especificar diversos tipos de operaciones en ellos.
            br
            p Es un lenguaje estándar consolidado por el Instituto Americano de Normas (ANSI) y por la Organización de Estándares Internacional (ISO). Está compuesto por comandos, cláusulas, operadores y funciones de agregado.
    .row.p-4
        p.mb-4 #[strong Para adentrarse a complementar la información, observar el siguiente video:]
        

        a.anexo.mb-4.mb-lg-0(href="https://youtu.be/4w_OD5OEgps" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p  Curso MySQL - Structured Query Language (DDL,DML,DCL)
    br
    br
 

    #t_1_1.titulo-segundo
      .h4 1.1	Conexión a la base de datos

    .row.justify-content-around.align-items-center
      p.mb-4 La conexión al servidor de base de datos de MySQL se puede realizar de dos maneras distintas: utilizando una interfaz de línea de comandos o haciendo uso de la interfaz gráfica de administración, en este caso Workbench que es la herramienta con que se ha venido trabajando en los módulos anteriores; a continuación, rápidamente se mostrará cómo establecer la conexión al servidor e iniciar el trabajo con el lenguaje SQL.
        br
        br
    .row.justify-content-around.align-items-center.mb-5

      .h5 Conexión desde línea de comandos

      p.mb-5 Para establecer la conexión a través de consola se debe utilizar uno de los comandos de Windows, para ello basta con cargar la consola desde el botón de búsqueda de Windows.
      
      .h6.text-center Consola de comandos Windows

      .justify-content-around.align-items-center.mb-4       
          figure
            img.img-c(src="@/assets/tema1/t-3.svg", alt='Consola de comandos Windows')

      p.mb-2 Después de cargar la consola debe ubicarse en la ruta de instalación de MySQL, que por defecto debe estar en la siguiente ruta: 
      .align-self-center.img-c.mb-4
        figure
          img.img-c(src="@/assets/tema1/t-4.svg", alt='Consola de comandos Windows')
      p.mb-2 Lo normal es que se deba indicar algún otro dato para conectar con la base de datos, como el usuario, la clave o la dirección del servidor con el que se quiere conectar. La sintaxis sería la siguiente:
      .col-auto.m-4.bl-bl
          p.p-4.pp-2 mysql -h nombre_servidor -u nombre_usuario -p

      p.mb-2 Si se desea conectar a la base de datos en local y con nombre de usuario root, se tendría que escribir:

      .col-auto.m-4.bl-bl
          p.p-4.pp-2 mysql -h localhost -u root –p
    

      p.mb-2 Lo primero que preguntará será el password para el usuario root. Una vez introducida la clave, se estará dentro de la línea de comandos de MySQL.
  
      
      .h6.mt-5.text-center Estableciendo la conexión a la base de datos

      .justify-content-around.align-items-center.mb-4       
          figure
            img.img-c(src="@/assets/tema1/t-7.svg", alt='Consola de comandos Windows')

      p.mb-2 De esta manera ya se tiene acceso al  servidor de base de datos sobre el cual se puede iniciar el trabajo con las sentencias y el lenguaje SQL.

      .h5.m-4 Dentro de la consola de MySQL
      p.mb-2 Una vez dentro, se tendrán a disposición todas las sentencias de MySQL para el trabajo con la base de datos y el lenguaje SQL.
      p.mb-2 Lo usual es que primero se tenga que conectar con una base de datos en concreto, de entre todas las que se pueden tener creadas en el servidor MySQL. Eso se hace con el comando use, seguido del nombre de la base de datos con la que se desea conectar.

      .row.m-4.justify-content-around.align-items-center
        .col-5.justify-content-around.align-items-center.mb-4       
          .col-auto.m-4.bl-bl
            p.p-4.pp-2 mysql> use mibasedatos;
    

        .col.justify-content-around.align-items-center.mb-4       
          figure
            img(src="@/assets/tema1/t-9.svg", alt='Dentro de la consola de MySQL')

        .col-5.justify-content-around.align-items-center.mb-4       
          .col-auto.m-4.bl-bl1
            p.p-3.pp-2 Esto conectaría con la base de datos llamada "mibasedatos".

      .col-lg-12.cajon.color-primario.p-4.mb-4.bl-blue.row.justify-content-around.align-items-center
        
          .h5 Nota
          p hay que fijarse que todas las sentencias dentro de la línea de comandos de MySQL acaban en "#[strong ;]". Si no se escribe el punto y coma, lo más seguro es que no se ejecute el comando y vuelva a salir el prompt para seguir introduciendo el comando. Si se quería ejecutar la sentencia escrita antes, con simplemente entrar el ";" será suficiente, es decir, no se debe escribir de nuevo la sentencia entera, solo el ";" y volver a presionar la tecla "enter".

      p.m-4 Si se quiere ver una lista de las bases de datos alojadas en el servidor, se puede escribir el comando show databases. Así:
      .h6.text-center Primeros comandos SQL

      .row.justify-content-md-center
        .col-lg-10      
          figure
            img.img-c(src="@/assets/tema1/t-11.svg", alt='Estableciendo la conexión a la base de datos')

      
    .col-7
      hr

    .row.justify-content-around.align-items-center.mb-5

      .h5 Conexión desde interfaz gráfica

      p.mb-5 Para realizar una conexión desde la interfaz gráfica al servidor de base de datos se utilizará la herramienta MySQL Workbench y se configura la conexión desde ella de la siguiente manera.
      
      .h6.text-center Conexión al servidor desde Workbench

      .justify-content-around.align-items-center.mb-4       
          figure
            img.img-c(src="@/assets/tema1/t-12.svg", alt='Conexión al servidor desde Workbench')    

      p.mb-5 Como se muestra en la figura anterior, se debe agregar una conexión hacia el servidor ya sea local o cualquier otro equipo en la red, para ello se requiere contar con las credenciales de acceso como usuario, contraseña, puerto de comunicaciones y dirección del servidor.

      .h6.text-center Creación de una nueva conexión
      .justify-content-around.align-items-center.mb-4       
          figure
            img.img-c(src="@/assets/tema1/t-13.svg", alt='Creación de una nueva conexión')    

      p.mb-5 Una vez se cuente con la conexión, solo se debe dar clic en ella e ingresar, posteriormente se da clic en la opción nuevo Query para tener acceso a una consola de MySQL.

      .h6.text-center Acceso a una consola de MySQL
      .justify-content-around.align-items-center.mb-4       
          figure
            img.img-c(src="@/assets/tema1/t-14.svg", alt='Acceso a una consola de MySQL')  
      hr

    #t_1_2.titulo-segundo
      .h4 1.2	Sentencias y comandos DDL

    .row.justify-content-around.align-items-center
      p.mb-4 #[strong DDL:] Data Definition Language es la denominación en inglés que determina su sigla, en español se traduce como lenguaje de definición de datos; muchas veces se pueden llegar a encontrar con el título de #[strong operaciones básicas]. Estos comandos permiten crear bases de datos, tablas, vistas, eliminar cualquier objeto, modificar el diseño de los mismos. Se utilizan para la construcción de la base de datos y el mantenimiento de la misma.

    .h6 Dentro de los comandos DDL se pueden encontrar: 
    br
    .row.justify-content-md-center
      .col-10
        table
          thead
            tr
              th.columna-30  Comando
              th.columna-70 Descripción
          tbody
            tr
              td Create
              td Utilizado para crear nuevas tablas, campos e índices.
            tr
              td Drop
              td Empleado para eliminar tablas e índices.
            tr
              td Alter
              td
                | Utilizado para modificar las tablas agregando campos o cambiando la definición de los campos.
            tr
              td Truncate
              td Utilizado para truncar todo el contenido de una tabla.
      br
      .row.justify-content-md-center.mt-5
        .row.justify-content-md-center.bl-blue.m-1
          .row.mt-5
            .col-auto.justify-content-md-center
              figure
                 img.img-c.mb-3(src="@/assets/tema1/t-15.svg", alt='Create | Crear') 
            .col-lg.justify-content-md-center
              .h6 Create | Crear
              p Este comando permite crear objetos de datos, como nuevas bases de datos, tablas, vistas y procedimientos almacenados.
              br
           
              .mb-4
                p #[strong Ejemplo (crear una tabla)]
                p create table 'customers';
        .row.justify-content-md-center.bl-gr.m-1
          .row.mt-5
            .col-auto.justify-content-md-center
              figure
                img.img-c.mb-3(src="@/assets/tema1/t-16.svg", alt='Create | Crear') 
            .col-lg.justify-content-md-center
              .h6 Alter | Modificar
              p Este comando permite modificar la estructura de una tabla u objeto. Se pueden agregar/quitar campos a una tabla, modificar el tipo de un campo, agregar/quitar índices a una tabla, modificar un trigger, etc.
              br
           
              .mb-4
                p #[strong Ejemplo (agregar columna a una tabla)]
                p Alter table 'alumnos' add edad int unsigned;
        .row.justify-content-md-center.bl-blue.m-1
          .row.mt-5
            .col-auto.justify-content-md-center
              figure
                img.img-c.mb-3(src="@/assets/tema1/t-17.svg", alt='Drop | Eliminar') 
            .col-lg.justify-content-md-center
              .h6 Drop | Eliminar
              p Este comando elimina un objeto de la base de datos. Puede ser una tabla, vista, índice, trigger, función, procedimiento o cualquier objeto que el motor de la base de datos soporte. Se puede combinar con la sentencia Alter.
              br
           
              .mb-4
                p #[strong Ejemplo]
                p Drop table 'alumnos';
        .row.justify-content-md-center.bl-gr.m-1
          .row.mt-5
            .col-auto.justify-content-md-center
              figure
                img.img-c.mb-3(src="@/assets/tema1/t-18.svg", alt="Truncate | Borrar tabla").class   
            .col-lg.justify-content-md-center
              .h6 Truncate | Borrar tabla
              p Este comando trunca todo el contenido de una tabla. La ventaja sobre el comando Drop, es que, si se quiere borrar todo el contenido de la tabla, es mucho más rápido, especialmente si la tabla es muy grande. La desventaja es que Truncate solo sirve cuando se quieren eliminar absolutamente todos los registros, ya que no se permite la cláusula Where. Si bien en un principio, esta sentencia parecería ser DML (lenguaje de manipulación de datos), es en realidad una DDL, ya que internamente, el comando Truncate borra la tabla y la vuelve a crear y no ejecuta ninguna transacción.
              br
            
              .mb-4
                p #[strong Ejemplo ]
                p Truncate table 'nombre_tabla';

    #t_1_3.titulo-segundo.mt-5
      .h4 1.3	Sentencias y comandos DML

    .row.justify-content-around.align-items-center
      p.mb-4 #[strong DML:] un lenguaje de manipulación de datos (Data Manipulation Language, o DML en inglés) es un lenguaje proporcionado por el sistema de gestión de base de datos que permite a los usuarios llevar a cabo las tareas de consulta o manipulación de los datos, organizados por el modelo de datos adecuado.

    p.mb-4 #[strong Dentro de los comandos DML se pueden encontrar:]
    .row.justify-content-md-center
      .col-10
        table
          thead
            tr
              th.columna-30  Comando
              th.columna-70 Descripción
          tbody
              tr
                td Select
                td
                  | Utilizado para consultar registros de la base de datos que satisfagan un criterio determinado.
              tr
                td Insert
                td Utilizado para cargar lotes de datos en la base de datos en una &uacute;nica operaci&oacute;n.
              tr
                td Update
                td Utilizado para modificar los valores de los campos y registros especificados.
              tr
                td Delete
                td Utilizado para eliminar registros de una tabla de una basede datos.
              tr
                td Merge
                td
                  | Cuando se quiere actualizar/insertar datos de una tabla, se actualiza cuando se cumple la condici&oacute;n e inserta cuando no se cumple.

      br
      .row.justify-content-md-center.mt-5
        .row.justify-content-md-center.bl-blue.m-1      
          .row.mt-5
            .col-auto.justify-content-md-center
              figure
                img.img-c.mb-3(src="@/assets/tema1/t-19.svg", alt="Select | Seleccionar").class   
            .col-lg.justify-content-md-center
              .h6 Select | Seleccionar
              p Una instrucción Select sirve para extraer información de una o más tablas de una base de datos.
              br
              p #[strong Sintaxis:]
              P.ms-4 [Select - campos_seleccionados]
              P.ms-4 [From - tablas_de_datos]
              p.ms-4 [Where - condición]
              P.ms-4 [Order by - ordenar_por_lista_campos]
              P.ms-4 [Limit - limite_de_renglones]

              br
            
              p #[strong Ejemplo]
              p Select id, nombre, teléfono 
              p.ms-4 From personas
              br
              p #[strong Select * ]
              P.ms-4 From personas 
              P.ms-4 Where id >0 
              P.ms-4 Order by nombre 
              P.ms-4 Limit 10
              br
              br
              p En esta instrucción se puede hacer uso de operadores lógicos y de comparación para personalizar la búsqueda.
              br     
              table
                tbody
                  tr.bl-blue2
                    th(colspan='2')    Operadores de comparación 
                  tr
                    td.columna-30 #[strong Signo]
                    td.columna-70 #[strong  Descripción]
                  tr
                    td =
                    td Igual.
                  tr
                    td &lt; 
                    td Menor que.
                  tr
                    td &gt; 
                    td Mayor que.
                  tr
                    td &lt;=
                    td Menor igual que.
                  tr
                    td &gt;=
                    td Mayor igual que.
                  tr
                    td &lt;&gt; 
                    td Distinto de.
                  tr
                    td !=
                    td Distinto de.
              br
              br

              p #[strong Ejemplo]
              p Select *  
              p.ms-4 From persona
              p.ms-4 Where id  #[strong >=]0 
              p.ms-4 Order by nombre 
              p.ms-4 Limit 10

              br
              br

              table
                tbody
                  tr.bl-blue2
                    th(colspan='2')    Operadores lógicos
                  tr
                    td.columna-30  #[strong Signo]
                    td.columna-70  #[strong Descripción]
                  tr
                    td And
                    td “Y”
                  tr
                    td Or 
                    td “O”
                  tr
                    td Not 
                    td “No”
              br
              br
              p #[strong Ejemplo]
              p Select *  
              p.ms-4 From persona
              p.ms-4 Where id #[strong >=0 and id<= ]30 
              p.ms-4 Order by nombre 
              p.ms-4 Limit 10    
              br
              br
              p Además de la sintaxis, se puede encontrar consultas que utilicen las siguientes funciones de agregado: Count, Sum, Avg, Max, Min.
              br
              p Y otros operadores de comparación: Between para intervalo de valores, Like para comparación entre cadenas de caracteres con los Pattern ‘%’ y ‘_’, al igual que la sentencia IN para especificar registros de una base de datos.
              br


        .row.justify-content-md-center.bl-gr.mt-3      
          .row.mt-5
            .col-auto.justify-content-md-center
              figure
                img.img-c.mb-3(src="@/assets/tema1/t-20.svg", alt="Insert | Insertar (adicionar)").class   
            .col-lg.justify-content-md-center
              .h6 Insert | Insertar (adicionar)
              p La instrucción Insert sirve para agregar uno o más registros en una tabla de la base de datos, en la cláusula Insert hay que especificar el nombre de la tabla con una lista de campos (opcional).
              br
              p Incluye también la lista de valores en la cual, si se especificaron los nombres de los campos, esta debería llevar el mismo orden de los campos tal como se declararon.
              br
              p #[strong Sintaxis:]
              p Insert [Into] nombre tabla [(lista columnas)]
              p Values ([expresion1, expresion2, ...])
              br
              .mb-4
                p #[strong Ejemplo ]
                p Insert into persona (id, nombre, apellido, dirección, teléfono) Values (1, ‘Juan’, ‘Perez’, ‘Carrera 40 35 - 20’, 317 876543).

        .row.justify-content-md-center.bl-blue.mt-3      
          .row.mt-5
            .col-auto.justify-content-md-center
              figure
                img.img-c.mb-3(src="@/assets/tema1/t-21.svg", alt="Udtate | Actualizar").class   
            .col-lg.justify-content-md-center
              .h6 Udtate | Actualizar
              p La instrucción Update modifica uno o más registros en una tabla, en la cláusula SET, se puede llamar el nombre de una o más columnas y asignarle su nuevo valor.
              br
              p En la cláusula Where se puede especificar una condición bajo la cual serán modificados los renglones.
              br
              p #[strong Sintaxis:]
              p Update nombre tabla.
              p Set nombre_columna= expresion1,[nombre_columna2=expresion2]...
              p [Where condición]

              br
              .mb-4
                p #[strong Ejemplo ]
                p Update persona Set apellido=’Pérez Flores’ Where id=1;

        .row.justify-content-md-center.bl-gr.mt-3      
          .row.mt-5
            .col-auto.justify-content-md-center
              figure
                img.img-c.mb-3(src="@/assets/tema1/t-22.svg", alt="Delete | Eliminar").class   
            .col-lg.justify-content-md-center
              .h6 Delete | Eliminar
              p La cláusula Delete se emplea para borrar uno o más registros de una tabla, se utiliza con la cláusula Where para escribir una condición bajo la cual será o serán eliminados los registros que cumplan con dicha condición.
              br
              p Se puede utilizar una subconsulta dentro de la cláusula Where, es importante mencionar que si existen constraint de foreign-key estos previenen de no eliminar un registro que tenga relación con otro de otra tabla.
              br
              p #[strong Sintaxis:]
              p Delete from nombre tabla
              p [Where condición]

              br
              .mb-4
                p #[strong Ejemplo ]
                p Delete from persona Where id=5;



    #t_1_4.titulo-segundo.mt-5
      br
      .h4 1.4	Sentencias y comandos DCL

    .row.justify-content-around.align-items-center.mb-5
      p.mb-4 #[strong DCL] (Data Control Language): permite crear roles, permisos e integridad referencial, así como el control al acceso a la base de datos.
      p Este tipo de sentencias son utilizadas para la realizar la administración y control de acceso a las bases de datos.

    .h6 Dentro de los comandos DML se pueden encontrar: 
    .row.justify-content-md-center
      .col-10.m-5
        table
          thead
            tr
              th.columna-30  Comando
              th.columna-70 Descripción
          tbody
            tr
              td Grant
              td Dar permisos.
            tr
              td Revoke
              td Quitar permisos.
           
      br
      
      .row.justify-content-md-center.bl-blue.m-1
          .row.mt-5
            .col-auto.justify-content-md-center
              figure
                img.img-c.mb-3(src="@/assets/tema1/t-23.svg", alt='Create | Crear') 
            .col-lg.justify-content-md-center
              .h6 Grant | Garantizar 
              p La cláusula Grant permite a los administradores del sistema otorgar privilegios y roles que se pueden otorgar a cuentas y roles de usuario. Se aplican estas restricciones de sintaxis:
              br
              p Grant no puede combinar la concesión de privilegios y roles en la misma declaración. Una cláusula Grant dada debe otorgar privilegios o roles.
              br
            
              p.ms-4 ✔	La cláusula On distingue si la declaración otorga privilegios o roles:
              p.ms-4 ✔	Con On, la declaración otorga privilegios.
              p.ms-4 ✔	Sin On, la declaración otorga roles.
              br  
              p Está permitido asignar tanto privilegios como roles a una cuenta, pero debe usar Grant declaraciones separadas, cada una con la sintaxis apropiada para lo que se va a otorgar.
              br
              p La cláusula Grant puede aplicarse en tres niveles distintos como se muestra en la siguiente tabla.

              br
              .row.justify-content-md-center
                
                  table
                    thead
                      tr
                        th.columna-30  Comando
                        th.columna-70 Descripción
                    tbody
                      tr
                        td Global
                        td Los privilegios globales se aplican a todas las bases de datos de un servidor dado.
                      tr
                        td En base de datos
                        td Los privilegios de base de datos se aplican a todos los objetos en una base de datos dada.
                      tr
                        td Tabla
                        td Los privilegios de tabla se aplican a todas las columnas de una tabla dada.
                      tr
                        td Columna
                        td Los privilegios de columna se aplican a una columna individual en una tabla dada.
                      tr
                        td Rutina
                        td Los permisos se aplican a las rutinas almacenadas.
              br  
              br      
              p #[strong Ejemplos:]
              p Global: Grant all on *.*
              p Base de datos: Grant all on db_name.*
              p Tabla: Grant all on db_name.tbl_name
              br
              p Para la cláusula Revoke se utiliza exactamente igual a la sentencia Grant la diferencia radica en que el comando Revoke, quita los permisos o privilegios que se hayan aplicado utilizando para ello los mismos niveles.
              br 
              p A continuación, se muestra un listado de las opciones o valores que pueden ser usados con la sentencia Grant o Revoke.
              br
              

      .row.justify-content-md-center.bl-gr.m-1
          .row.mt-5
            .col-auto.justify-content-md-center
              figure
                img.img-c.mb-3(src="@/assets/tema1/t-24.svg", alt='Create | Crear') 
            .col-lg.justify-content-md-center
              .h6 Sentencia Grant o Remoke    
              table
                thead
                  tr
                    th.columna-30 Privilegio
                    th.columna-70 Significado
                tbody
                  tr
                    td All [privileges]
                    td Activa todos los privilegios excepto Grant Option.
                  tr
                    td Alter
                    td Permite el uso de.
                  tr
                    td Create
                    td Permite el uso de.
                  tr
                    td Create routine
                    td Crear rutinas almacenadas.
                  tr
                    td Create temporarytables
                    td Permite el uso de.
                  tr
                    td Create view
                    td Permite el uso de.
                  tr
                    td Delete
                    td Permite el uso de.
                  tr
                    td Drop
                    td Permite el uso de.
                  tr
                    td Execute
                    td Permite al usuario ejecutar procedimientos almacenados.
                  tr
                    td File
                    td Permite el uso de y.
                  tr
                    td Index
                    td Permite el uso de y.
                  tr
                    td Insert
                    td Permite el uso de.
                  tr
                    td Lock tables
                    td Permite el uso de en tablas sobre las que ya se posea el privilegio Select.
                  tr
                    td Process
                    td Permite el uso de.
                  tr
                    td References
                    td No implementado.
                  tr
                    td Reload
                    td Permite el uso de.
                  tr
                    td Replication client
                    td Permite al usuario preguntar d&oacute;nde est&aacute;n los servidores esclavo o maestro.
                  tr
                    td Replication slave
                    td
                      | Necesario para la replicaci&oacute;n esclava (para leer eventos del diario binario desde el maestro).
                  tr
                    td Select
                    td Permite el uso de.
                  tr
                    td Show databases
                    td La sentencia muestra todas las bases de datos.
                  tr
                    td Show view
                    td Permite el uso de.
                  tr
                    td Shutdown
                    td Permite el uso del apagado de mysqladmin shutdown.
                  tr
                    td Update
                    td Permite el uso de.
                  tr
                    td Usage
                    td Sin&oacute;nimo de &quot;sin privilegios&quot;.
                  tr
                    td Grant option
                    td Permite conceder privilegios.

              br 
              p Es importante aclarar que para poder aplicar o retirar permisos, estos se aplican a usuarios que deben ser creados dentro del servidor de base de datos, para desarrollar estas tareas hay que utilizar los siguientes comandos:
              br
              p #[strong Sintaxis:]
              p Create user:  'nombre_usuario'@'localhost'  Identified by 'tu_contrasena';
              br
          
              p #[strong Ejemplo:]
              p Create user 'sena'@'local host'  Identified BY 'Passw0rd';
              br
          
              p Mediante el comando anterior se crea el usuario llamado SENA y se le asigna la contraseña ‘Password’, sin embargo, este usuario no puede acceder a la consola de MySQL por que se tendrían que asignar los permisos necesarios para conectarse y trabajar sobre el servidor de base de datos.
              br
              p #[strong Ejemplo:]
              p Grant all privileges on * . * To 'sena'@'localhost';
              br
           
              p Para este caso se estarían aplicando permisos de nivel global al usuario SENA y se les asignaría permisos a todas las bases de datos y todos los objetos que hacen parte de dichas bases de datos, la cláusula All privileges hace que tenga todos los permisos sin ninguna restricción.
              br

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

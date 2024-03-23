export enum RabbitMQ {
    ClientesQueue = 'clientes',
    CuentasQueue = 'cuentas',
    SucursalesQueue = 'sucursales',
    transaccionesQueue = 'transacciones',
  }
  
  export enum ClientesMSG {
    INSERTAR = 'INSERTAR',
    TODOS = 'TODOS',
    ACTUALIZAR = 'ACTUALIZAR',
    ELIMINAR = 'ELIMINAR',
    UNO = 'UNO',
  }
  
  export enum CuentasMSG {
    INSERTAR = 'INSERTAR',
    TODOS = 'TODOS',
    ACTUALIZAR = 'ACTUALIZAR',
    ELIMINAR = 'ELIMINAR',
    UNO = 'UNO',
  }
  export enum SucursalesMSG {
    INSERTAR = 'INSERTAR',
    TODOS = 'TODOS',
    ACTUALIZAR = 'ACTUALIZAR',
    ELIMINAR = 'ELIMINAR',
    UNO = 'UNO',
    INSERTAR_PASAJERO = 'INSERTAR_PASAJERO',
  }
  export enum TransaccionesMSG {
    INSERTAR = 'INSERTAR',
    TODOS = 'TODOS',
    ACTUALIZAR = 'ACTUALIZAR',
    ELIMINAR = 'ELIMINAR',
    UNO = 'UNO',
    INSERTAR_PASAJERO = 'INSERTAR_PASAJERO',
  }
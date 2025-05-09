export class Product {
  constructor(
    id,
    descripcion,
    precioUnitario,
    descuento,
    precioConDescuento,
    stock,
  ) {
    this.id = id;
    this.descripcion = descripcion;
    this.precioUnitario = precioUnitario;
    this.descuento = descuento;
    this.precioConDescuento = precioConDescuento;
    this.stock = stock;
  }
}

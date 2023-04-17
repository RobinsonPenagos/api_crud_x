import Product from "../models/productsModel";

export const obtenerProductos = async (req, res) => {
  const productos = await Product.findAll();
  res.json(productos);
};

export const obtenerProductosPorId = async (req, res) => {
  const producto = await Product.findByPk(req.params.id);
  res.json(producto);
};

export const crearProducto = async (req, res) => {
  console.log(req.body);
  const crearProducto = await Product.create(req.body);

  res.json({mensaje: "Producto creado"})
  res.json(crearProducto);
};

export const actualizarProductoPorId = async (req, res) => {
  const producto = await Product.findByPk(req.params.id);
  console.log(producto);
  const actualizarProductoPorId = await producto.update(req.body);
  console.log(actualizarProductoPorId);
  res.json({mensaje: "Producto actualizado"})
  res.json(actualizarProductoPorId);
};

export const eliminarProductoPorId = async (req, res) => {
  const producto = await Product.findByPk(req.params.id);

  await producto.destroy();
  res.json({mensaje: "Producto eliminado"})
  res.json(producto);
};

const { render } = require('../app');
const bd = require('../config/bd');

const productsController = {
  create: (req,res) => {
    res.render('products/create', 
    {
      title: "Crear artículo"
    });
  },

  add: (req, res) => {
    const articulo = {
      nombre : req.body.nombre,
      precio: req.body.precio,
      codigo: req.body.codigo
    };
    let picture = req.files.pic;
    picture.mv(`./public/uploads/${picture.name}`, error => {
      if(error) {
        console.log(error);
        return res.render('products/create',{ mensaje: 'Error al subir' })
      }
      bd.query("insert into productos set ?", articulo, (error, resul) => {
				if (error) {
					console.log(error);
					return;
				} else {
					let mensaje = "Artículo creado con éxito";
					res.render("products/create", { mensaje: mensaje });
				}
			});
    })
    
  },

  edit: (req, res) => {
    let id = req.params.id;
    // console.log(id);
    bd.query('select * from productos where id = ?', id, (error, fila) => {
      if(error) {
        console.log(error+' error en consulta');
        return;
      }
      console.log(fila);
      if (fila.length > 0) {
        res.render('products/edit', { articulo: fila[0] })
      }
  
    })
  }
}

module.exports = productsController;
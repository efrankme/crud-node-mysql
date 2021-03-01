// Controlador Home

const bd = require('../config/bd');

const indexController = {
  home: (req, res) => {
    bd.query("select * from productos", (error, rows) => {
			if (!error) {
        console.log(rows);
        res.render("index", 
        { 
          title: "Home", 
          articulos: rows 
        });
			}
		});
	}
}

module.exports = indexController;
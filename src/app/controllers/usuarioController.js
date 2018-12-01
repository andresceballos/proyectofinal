const dbConnection = require('../../config/dbConnection');
const conn = dbConnection();
const controller = {};

controller.list = (req, res) => {

    conn.query('SELECT * FROM usuario_eps', (err, result) => {

        if (err) {
            res.json(err);
        }

        res.render('crud', {
            crud: result

        });
    });
}

controller.add = (req, res) => {
    const { nombre, edad, telefono, eps, ciudad } = req.body;

    conn.query('INSERT INTO usuario_eps SET ?',
        {
            nombre,
            edad,
            telefono,
            eps,
            ciudad
        }, (err, result) => {
            res.redirect('/crud');
        });
};

controller.edit = (req, res) => {
    const { id } = req.params;


    conn.query('SELECT * FROM usuario_eps WHERE id_usuario = ?', [id], (err, rows) => {
        res.render('editUsuario', {
            crud: rows[0]

        });
    });
};


controller.update = (req, res) => {
    const { id } = req.params;
    const newNews = req.body;

    conn.query('UPDATE usuario_eps SET ? WHERE id_usuario = ?', [newNews, id], (err, rows) => {
        res.redirect('/crud')
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;

    conn.query('DELETE FROM usuario_eps WHERE id_usuario = ?', [id], (err, rows) => {
        res.redirect('/crud');
    });
};


module.exports = controller;
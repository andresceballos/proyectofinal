const dbConnection = require('../../config/dbConnection');
const conn = dbConnection();
const controller = {};

controller.list = (req, res) => {

    conn.query('SELECT * FROM news', (err, result) => {

        if (err) {
            res.json(err);
        }

        res.render('news', {
            news: result

        });
    });
}

controller.add = (req, res) => {
    const { title, news } = req.body;

    conn.query('INSERT INTO news SET ?',
        {
            title,
            news
        }, (err, result) => {
            res.redirect('/news');
        });
};

controller.edit = (req, res) => {
    const { id } = req.params;


    conn.query('SELECT * FROM news WHERE id_news = ?', [id], (err, rows) => {
        res.render('newsUpdate', {
            news: rows[0]

        });
    });
};


controller.update = (req, res) => {
    const { id } = req.params;
    const newNews = req.body;

    conn.query('UPDATE news SET ? WHERE id_news = ?', [newNews, id], (err, rows) => {
        res.redirect('/news')
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;

    conn.query('DELETE FROM news WHERE id_news = ?', [id], (err, rows) => {
        res.redirect('/news');
    });
};


module.exports = controller;
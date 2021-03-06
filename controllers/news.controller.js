const News = require("../models/News.model")

module.exports.newsContrl = {
    addNews: async (req, res) => {
        try {
            const retAddNews = await News.create({
                title: req.body.title, 
                body: req.body.body, 
                categoryId: req.body.categoryId,
            });
            res.json(retAddNews)
        } catch (e) {
            res.json({error: e.toString()})
        }
    }, 

    getAllNews: async (req, res) => {
        try {
            await News.find({})
        } catch (e) {
            res.json({error: e.toString()})
        }
    }
}
const { response } = require('express')
const express = require('express')
const router = express.Router()

const axios = require('axios')



router.get('/desafios', (req, res) => {
    console.log('testando API!')
    //todo list
    axios
        .get('https://api.github.com/search/repositories?q=user:takenet+language:Csharp&order=desc&sort=created&per_page=5&page=1')
        .then(repositoriosTakenet => {
            // const repoCsharp = repositoriosTakenet.data.filter(repo => {
            //     return repo.language === "C#"
            //   })
            // res.json(repoCsharp)
            res.json(repositoriosTakenet.data)
        })
        .catch(error => {
            console.error(error)
        })
})




module.exports = { router: router }
const express = require('express')
const cities = require('./cities-names.json')
const { port=3333, delay=0 } = require('minimist')(process.argv)
const cors = require('cors')

const byName = name => cities =>
    name.toLowerCase() === cities.substr(0, name.length).toLowerCase()

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

const app = express()
    .use(logger)
    .use(cors())
    .use('/', express.static('./dist/img'))
    .get('/cities', (req, res) =>
        res.status(200).json(cities)
    )
    .get('/cities/:name', (req, res) =>
        setTimeout(() =>
                res.status(200).json(
                    cities.filter(byName(req.params.name))
                ),
            delay
        )
    )

app.listen(port, () => console.log('Travel day app running on port ' + port + ' with a ' + delay/1000 + ' second delay'))

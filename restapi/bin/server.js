"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require('cors');
var bodyParse = require('body-parser');
var app = express();
app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
var port = 3000;
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
var tamanhos = [
    {
        id: 1,
        name: "Pequeno",
        quantidade_sabores: 1
    },
    {
        id: 2,
        "name": "Médio",
        "quantidade_sabores": 2
    },
    {
        id: 3,
        name: "Grande",
        quantidade_sabores: 3
    }
];
app.get('/tamanhos', function (req, res, next) {
    res.send(tamanhos);
});
app.post('/logon', function (req, res) {
    if (req.body.userName && req.body.password) {
        var userName = req.body.userName;
        var password = req.body.password;
        if (userName == "admin@senai" && password == "1234") {
            res.json("Login efetuado com sucesso");
        }
        else {
            res.json("Usuário ou senha incorretos!");
        }
    }
});
var sabores1 = [
    {
        sabor: "Calabresa",
        preco: 12
    },
    {
        sabor: "Quatro Queijos",
        preco: 15
    },
    {
        sabor: "Bacon",
        preco: 13
    },
    {
        sabor: "Chocolate",
        preco: 14
    },
    {
        sabor: "Brocolis",
        preco: 16
    }
];
app.get('/sabores/1', function (req, res, next) {
    res.send(sabores1);
});
var sabores2 = [
    {
        sabor: "Calabresa",
        preco: 18
    },
    {
        sabor: "Quatro Queijos",
        preco: 21
    },
    {
        sabor: "Bacon",
        preco: 19
    },
    {
        sabor: "Chocolate",
        preco: 20
    },
    {
        sabor: "Brocolis",
        preco: 22
    }
];
app.get('/sabores/2', function (req, res, next) {
    res.send(sabores2);
});
var sabores3 = [
    {
        sabor: "Calabresa",
        preco: 25
    },
    {
        sabor: "Quatro Queijos",
        preco: 28
    },
    {
        sabor: "Bacon",
        preco: 26
    },
    {
        sabor: "Chocolate",
        preco: 27
    },
    {
        sabor: "Brocolis",
        preco: 29
    }
];
app.get('/sabores/3', function (req, res, next) {
    res.send(sabores3);
});

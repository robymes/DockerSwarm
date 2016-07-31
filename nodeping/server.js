/*eslint no-console: ["error", { allow: ["log"] }] */

"use strict";

var express,
    uuid,
    os,
    instanceUuid,
    app,
    server;

try {
    os = require("os");
    uuid = require("uuid");
    instanceUuid = uuid.v4();
    express = require("express");
    app = express();

    app.get("/ping", function (req, res) {
        res.status(200).send({
            instanceId: instanceUuid,
            networks: os.networkInterfaces()
        });
    });

    server = app.listen(8080, function () {
        var host = server.address().address,
            port = server.address().port;
        console.log("Node.JS simple REST service listening at http://%s:%s", host, port);
    });
} catch (error) {
    console.log("Error: %s", error);
}
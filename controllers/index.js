module.exports = (app) => {

    app.use("/api/crud_layer", require("./crud_layer/crud_layer.route"));
    app.use("/api/client", require("./client/client.route"));


};
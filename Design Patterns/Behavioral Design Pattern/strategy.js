var Shipping = function () {
    this.transport = "";
};

Shipping.prototype = {
    setStrategy: function (transport) {
        this.transport = transport;
    },

    calculate: function (package) {
        return this.transport.calculate(package);
    }
};

var ByRoad = function () {
    this.calculate = function (package) {
        // calculations...
        return "$45.95";
    }
};

var ByTrain = function () {
    this.calculate = function (package) {
        // calculations...
        return "$139.40";
    }
};

var ByAir = function () {
    this.calculate = function (package) {
        // calculations...
        return "$243.20";
    }
};

function run() {

    var package = { from: "76712", to: "10012", weigth: "lkg" };

    // the 3 strategies

    var road = new ByRoad();
    var train = new ByTrain();
    var plane = new ByAir();

    var shipping = new Shipping();

    shipping.setStrategy(road);
    console.log("By road strategy: " + shipping.calculate(package));
    shipping.setStrategy(train);
    console.log("By train strategy: " + shipping.calculate(package));
    shipping.setStrategy(plane);
    console.log("By air strategy: " + shipping.calculate(package));
}
run()

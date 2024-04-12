"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var Nodes = /** @class */ (function () {
    function Nodes() {
        var datas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            datas[_i] = arguments[_i];
        }
        this.nodes = new Array(datas.length);
        for (var i = 0; i < datas.length; i++)
            this.nodes[i] = new Node_1.default(datas[i]);
    }
    Nodes.prototype.toNode = function () {
        return this.nodes;
    };
    return Nodes;
}());
exports.default = Nodes;

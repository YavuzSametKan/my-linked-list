"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var Nodes_1 = require("./Nodes");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        var datas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            datas[_i] = arguments[_i];
        }
        if (datas.length > 0) {
            this.push.apply(this, datas);
        }
        else {
            this.head = null;
            this.length = 0;
        }
    }
    LinkedList.prototype.prepend = function () {
        var datas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            datas[_i] = arguments[_i];
        }
        var nodes = new (Nodes_1.default.bind.apply(Nodes_1.default, __spreadArray([void 0], datas, false)))().toNode();
        if (nodes.length === 0)
            return;
        for (var i = nodes.length - 1; i >= 0; i--) {
            nodes[i].next = this.head;
            this.head = nodes[i];
            this.length++;
        }
    };
    LinkedList.prototype.push = function () {
        var datas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            datas[_i] = arguments[_i];
        }
        var nodes = new (Nodes_1.default.bind.apply(Nodes_1.default, __spreadArray([void 0], datas, false)))().toNode();
        if (nodes.length === 0)
            return;
        var cursor = this.head;
        if (!cursor) {
            this.head = nodes[0];
            cursor = this.head;
            this.length++;
            if (nodes.length === 1)
                return;
        }
        else {
            while (cursor.next !== null)
                cursor = cursor.next;
        }
        for (var i = 1; i < nodes.length; i++) {
            cursor.next = nodes[i];
            cursor = cursor.next;
            this.length++;
        }
    };
    LinkedList.prototype.addToSorted = function () {
        var datas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            datas[_i] = arguments[_i];
        }
        var nodes = new (Nodes_1.default.bind.apply(Nodes_1.default, __spreadArray([void 0], datas, false)))().toNode();
        if (nodes.length === 0)
            return;
        for (var _a = 0, nodes_1 = nodes; _a < nodes_1.length; _a++) {
            var node = nodes_1[_a];
            if (!this.head || node.data < this.head.data) {
                node.next = this.head;
                this.head = node;
                this.length++;
            }
            else {
                var cursor = this.head;
                while (cursor.next && node.data > cursor.next.data)
                    cursor = cursor.next;
                node.next = cursor.next;
                cursor.next = node;
                this.length++;
            }
        }
    };
    LinkedList.prototype.sort = function () {
        // If the list is empty or has only one element, no need to sort
        if (!this.head || !this.head.next)
            return;
        var sorted = false;
        while (!sorted) {
            sorted = true;
            var cursor = this.head;
            var prev = null;
            while (cursor.next) {
                if (cursor.data > cursor.next.data) {
                    sorted = false;
                    // Swap the data of the current and next nodes
                    var temp = cursor.data;
                    cursor.data = cursor.next.data;
                    cursor.next.data = temp;
                }
                prev = cursor;
                cursor = cursor.next;
            }
        }
    };
    LinkedList.prototype.contains = function (data) {
        var cursor = this.head;
        while (cursor != null) {
            if (cursor.data === data) {
                return true;
            }
            cursor = cursor.next;
        }
        return false;
    };
    LinkedList.prototype.countOf = function (data) {
        var counter = 0;
        var cursor = this.head;
        while (cursor != null) {
            if (cursor.data === data)
                counter++;
            cursor = cursor.next;
        }
        return counter;
    };
    LinkedList.prototype.set = function (index, data) {
        var node = new Node_1.default(data);
        if (index > this.size() - 1 || index < 0 || this.size() === 0)
            return;
        if (!node)
            return;
        if (index === 0) {
            node.next = this.head.next;
            this.head = node;
        }
        else {
            var cursor = this.head;
            for (var i = 0; i < index - 1; i++) {
                cursor = cursor.next;
            }
            node.next = cursor.next.next;
            cursor.next = node;
        }
    };
    LinkedList.prototype.clear = function () {
        this.head = null;
        this.length = 0;
    };
    LinkedList.prototype.pop = function (piece) {
        if (piece === void 0) { piece = 1; }
        if (this.size() === 0)
            return;
        if (piece >= this.size()) {
            this.clear();
            return;
        }
        var cursor = this.head;
        for (var i = 0; i < this.size() - (piece + 1); i++) {
            cursor = cursor.next;
        }
        cursor.next = null;
        this.length -= piece;
    };
    LinkedList.prototype.poll = function (piece) {
        if (piece === void 0) { piece = 1; }
        if (this.size() === 0)
            return;
        if (piece >= this.size()) {
            this.clear();
            return;
        }
        for (var i = 0; i < piece; i++) {
            this.head = this.head.next;
        }
        this.length -= piece;
    };
    LinkedList.prototype.get = function (index) {
        if (index >= this.size() || index < 0)
            return null;
        var cursor = this.head;
        for (var i = 0; i < index; i++) {
            cursor = cursor.next;
        }
        return cursor != null ? cursor.data : null;
    };
    LinkedList.prototype.getFirst = function () {
        return this.head !== null ? this.head.data : null;
    };
    LinkedList.prototype.getLast = function () {
        return this.get(this.size() - 1);
    };
    LinkedList.prototype.size = function () {
        return this.length;
    };
    LinkedList.prototype.toArray = function () {
        var arr = new Array(this.size());
        var cursor = this.head;
        for (var i = 0; i < arr.length; i++) {
            arr[i] = cursor.data;
            cursor = cursor.next;
        }
        return arr;
    };
    LinkedList.prototype.print = function () {
        if (this.size() === 0)
            return;
        var cursor = this.head;
        var result = cursor.data;
        cursor = cursor.next;
        while (cursor !== null) {
            result += ' -> ' + cursor.data;
            cursor = cursor.next;
        }
        result += '\nlist length: ' + this.length;
        console.log(result);
    };
    return LinkedList;
}());
exports.default = LinkedList;

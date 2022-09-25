var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var names = ["Max", "Alex"];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("COngrats, DONE");
    }, 1500);
});
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
var mergeObj = merge({ name: "Max" }, { age: 22 });
console.log(mergeObj.age);
function countAndDescribe(element) {
    var describe = "Got no value";
    if (element.length) {
        describe = "Got ".concat(element.length, " items");
    }
    return [element, describe];
}
console.log(countAndDescribe("sup"));
function extractAndConvert(obj, key) {
    // keyof
    return obj[key];
}
extractAndConvert({ name: "John" }, "name");
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        // Generic classes
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        this.id = id;
        this.name = name;
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("Department(".concat(this.id, "): IT"));
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id) {
        return _super.call(this, id, "Accounting") || this;
    }
    AccountingDepartment.prototype.describe = function () {
        console.log("Department(".concat(this.id, "): Accounting"));
    };
    AccountingDepartment.getInstance = function () {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2");
        return this.instance;
    };
    return AccountingDepartment;
}(Department));
var it = new ITDepartment("v1", ["Oleh", "Decor"]);
it.addEmployee("Ann");
it.addEmployee("Dil");
it.printEmployeeInformation();
it.describe();
var accountingDepartment = AccountingDepartment.getInstance();
var accountingDepartment2 = AccountingDepartment.getInstance();
console.log(accountingDepartment, accountingDepartment2);
var user1;
user1 = {
    name: "Ann",
    age: 21
};
console.log(user1);
var add = function (n1, n2) { return n1 + n2; };
console.log(add(1, 2));

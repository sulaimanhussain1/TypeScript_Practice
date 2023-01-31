"use strict";
var Role;
(function (Role) {
    Role[Role["MANAGER"] = 0] = "MANAGER";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["EMPLOYEE"] = 2] = "EMPLOYEE";
    Role[Role["USER"] = 3] = "USER";
})(Role || (Role = {}));
console.log(Role);

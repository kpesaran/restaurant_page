//assigning names to type
var x;
var y;
var z;
var a;
//referencing hard coded informatiion
//enums are sdpecial type that has hard coded list of values
var ContactStatus;
(function (ContactStatus) {
    ContactStatus["Active"] = "active";
    ContactStatus["Inactive"] = "inactive";
    ContactStatus["New"] = "new";
})(ContactStatus || (ContactStatus = {}));
var primaryContact = {
    birthDate: new Date('01-01-1999'),
    id: 12345,
    name: "James",
    postalCode: 80000,
    status1: '1nactive',
    status2: ContactStatus.Active,
    status3: "active",
    clone: function () {
        throw new Error("Function not implemented.");
    },
    test: function (name) {
        throw new Error("Function not implemented.");
    }
};
//to only allow Contact types to the parameter
//We can define what the return type should be
function clone(source) {
    return Object.apply({}, source);
}
var abcde = {
    id: 234, name: "homer Simpsoin",
    clone: function () {
        throw new Error("Function not implemented.");
    },
    test: function (name) {
        throw new Error("Function not implemented.");
    }
};
var gggg = clone(abcde);
//can also pass as variables, can provide type information for functions... 
function clone2(source, func) {
    return Object.apply({}, source);
}
//generics
//simply a meta type, that represents any other type you may want to substitute in 
//whatever type is passed in will get passed right out 
function cloneGeneric(source) {
    return Object.apply({}, source);
}
var abc = {
    id: 234, name: "homer Simpsoin",
    clone: function () {
        throw new Error("Function not implemented.");
    },
    test: function (name) {
        throw new Error("Function not implemented.");
    }
};
var g = cloneGeneric(abc);
var dateRange = { startDate: Date.now(), endDate: Date.now() };
var dateRangeCopy = cloneGeneric(dateRange);
//# sourceMappingURL=typeScriptPlay.js.map
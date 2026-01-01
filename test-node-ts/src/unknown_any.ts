// call, construct and access properties of unknown type 'any'

let value: any;

value = "chai";
value = [1, 2, 3];
value.toUpperCase(); // should not error

let newValue: unknown;

newValue = "chai";
newValue = [1, 2, 3];
// newValue.toUpperCase(); // should error
if (typeof newValue === "string") {
    newValue.toUpperCase(); // should not error
}
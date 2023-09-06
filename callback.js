function greet(name) {
    console.log('Hello ${name}');
}
function higherOrderFunction(callback) {
    const name = "Mounika";
    callback(name);
}

higherOrderFunction(greet);
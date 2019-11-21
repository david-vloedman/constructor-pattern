'using strict'


const person = (function () {
  let greeting = 'Hello, my name is';
  let _name = "";

  function _getName() {
    return _name;
  }

  function setName(name) {
    _name = name;
  }

  function greet() {
    return `${greeting} ${_getName()}.`;
  }

  return {
    setName: setName,
    greet: greet,
  };

})();

person.setName('David');

console.log(person.greet());
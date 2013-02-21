function Sequence() {
  this.steps = [];

  this.append = function(step) {
    this.steps.push(this.process(step));
  };

  this.run = function() {
    if (!this.steps.length) return;

    var step = this.steps.shift(); // removes it from the array as well
  
    window.setTimeout(function() {
      if (step.execute() !== false) {
        this.run();
      }
    }.bind( this ), step.delay);
  };

  this.prepend = function(step) {
    this.steps.unshift(this.process(step));
  };

  this.process = function(step) {
    if (typeof step == 'function') step = { execute: step };
    step.delay = step.delay || 0;
    step.execute = step.execute || function(){};
    return step;
  };
};

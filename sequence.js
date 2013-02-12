function Sequence() {
  this.steps = [];

  this.append = function(step) {
    this.process(step);
    this.steps.push(step);
  };

  this.play = function() {
    if (!this.steps.length) return;

    var step = this.steps.shift(); // removes it from the array as well

    window.setTimeout(_.bind(function() {
      if (step.execute() !== false) {
        this.play();
      }
    }, this), step.delay);
  };

  this.prepend = function(step) {
    this.process(step);
    this.steps.unshift(step);
  };

  this.process = function(step) {
    step.delay = step.delay || 0;
    step.execute = step.execute || function(){};
  };
};

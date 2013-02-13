sequence
========

Sequence lets you run JavaScript functions in a sequence, with an optional delay between each execution.

```javascript
var sequence = new Sequence;

sequence.append({
  delay: 5000,
  execute: function() {
    document.write("This will be executed with a 5 second delay once it's its turn.");
    return false; // causes the sequence to pause
  }
});

// we can also pass a function directly, the default delay is 0
sequence.append(function() {
    // remember the previous function will pause the sequence
    document.write("This will be executed immediately if we sequence.run() again.");
});

// we can also prepend
sequence.prepend(function() {
  document.write("This will be executed first when the sequence is started. ");
});

sequence.run();
```

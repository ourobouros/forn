var handle = function (cb) {
  return function(form) {

  // If it was actually an event
  if (form.preventDefault) {
    form.preventDefault();
    form = form.target;
  }

  cb(new FormData(form));
};

// Export it for webpack
if (typeof module === 'object' && module.exports) {
  module.exports = { handle };
}

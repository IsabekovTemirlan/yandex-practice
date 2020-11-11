(function() {
  class Templator {
    constructor(template) {
      this._template = template;
    }

    compile(ctx) {
      window.handleClick = ctx.handleClick
      return this._template.length > 18 ?
        this.ul = this._template
        .replace(/{{ className }}/, ctx.className)
        .replace(/{{chat.id}}/, ctx.chat.id)
        .replace(/{{handleClick}}/, 'window.'+ ctx.handleClick.name + "()")
        .replace(/{{ items }}/, Array(4).fill(0).map((i, id) => `<li>${id+1}</li>`).join("") ) : null
    }
  }

  window.Templator = Templator;
})();
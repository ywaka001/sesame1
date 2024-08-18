// IE11で問題が発生する場合、厳密にチェックする
if (!Element.prototype.getRootNode) {
    Element.prototype.getRootNode = function(options) {
      if (options && options.composed) {
        let node = this;
        while (node.parentNode) {
          node = node.parentNode;
        }
        return node;
      }
      return this.ownerDocument;
    };
  }
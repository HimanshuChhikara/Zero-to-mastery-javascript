Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
}

new Date().lastYear()
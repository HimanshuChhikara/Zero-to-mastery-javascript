function createStack() {
    return {
        item: [],
        push(item) {
            this.item.push(item);
        },
        pop() {
            return this.item.pop();
        } 
    }
}
function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
    this.left = null;
    this.right = null;
}

function DoublyList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}

DoublyList.prototype.add = function(data, parent){
    var node = new Node(data);
    if (parent) {
     
        parent.next = node;
        node.previous = parent;
        parent.tail = node;
    }else{
        if (this._length){
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;

        }else{
            this.head = null;
            this.tail = node;
        }
        this._length += 1;
    }
  
    return node;

}

DoublyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
 
    // 1st use-case: an invalid position 
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: a valid position 
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
 
    return currentNode;
};

DoublyList.prototype.searchNode = function (name){
    var currentNode = this.head,
        length = this._length,
        count = 0;

    while (count < length){
        if (currentNode.data != name){
            currentNode = currentNode.next;
        }
        count++;
    }

    return currentNode;
}

//检查是否只有一个起始站
//return : true 不是有多个起始站 ，
//          false 只有一个
DoublyList.prototype.validSingleHead = function(){
    var currentNode = this.head,
        length = this._length,
        count = 0,
        total = 0;

  while (count < length){
        if (currentNode.previous == null){
                  total += 1;
                  console.log("Pre: " + currentNode.data)
        }
        count++;
        currentNode = currentNode.next ;
    }

    if (total > 1 || total == 0){
        return true;
    }
    else{
        return false;
    }
}

//检查是否只有一个终点站
////return : true 不是有多个终点站
//          false 只有一个
DoublyList.prototype.validSingleEnd = function(){
    var currentNode = this.head,
        length = this._length,
        count = 0,
        total = 0;

  while (count < length){
        if (currentNode.next == null){
            total += 1;
            console.log("next: " + currentNode.data)
        }
        count++;
        currentNode = currentNode.next ;
    }

    if (total > 1 || total == 0){
        return true;
    }
    else{
        return false;
    }


}

//test
//var d = new DoublyList(); var head = d.add("head"); d.add("node1")
//var node2 = d.add("node2", head);


// Nodes
class Node {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

//Linked List
class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = null;
    }

   
   append(ListNode){

   }
   printList(){

   }
   prepend(ListNode){

   }
   pop(){

   }
    insertAt(index,ListNode){
        if (index === 0){
            this.prepend(ListNode);
            return;
        }
        let curr = this.head;
        let prev =  this.head;
        let i = 0;
        while(curr != null && i != index){
            prev = curr;
            curr = curr.next;
            i = i + 1;
        }
        if(i === index){
            if(curr === null){
                this.tail.next = ListNode;
                this.tail = ListNode;
            }else{
                prev.next = ListNode;
                ListNode.next = curr;
            }

        }else console.log("Invalid Index");
    }

    removeAt(index){
        let curr = this.head;
        let prev =  this.head;
        let i = 0;
        while(curr !== this.tail && i !== index){
            prev = curr;
            curr = curr.next;
            i++;
        }
        if(curr === this.tail){
            if( i === index){
                this.tail = prev;
                this.tail.next = null;
            }else console.log("Invalid Index");
        }else{
            prev.next = curr.next;
        }
    }
   
}


let list = new LinkedList();
list.insertAt(0,new Node(1));
list.insertAt(3,new Node(4));
list.insertAt(1,new Node('A'));
list.removeAt(1);
list.removeAt(3);

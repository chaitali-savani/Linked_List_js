

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
    if (this.head === null) {
        this.head = ListNode;
        this.tail = ListNode;
    } else {
        this.tail.next = ListNode;
        this.tail = ListNode;
    }
   }
   printList(){
    let curr = this.head;
        let listString = "";
        while (curr !== null) {
            listString += curr.data + " -> ";
            curr = curr.next;
        }
        console.log(listString + "null");
    } 
    

   }
   prepend(ListNode){
    ListNode.next = this.head;
    this.head = ListNode;
    if(this.tail === null)
        this.tail = ListNode;
   


   }
   pop(){
    let result;
        //ckeck if linked list is empty
        if(this.head === null) {
            console.log("list is empty")
            return;
        }
        // checking if only one node exist
        if(this.head === this.tail){
            result = this.head.data;
            this.head = null;
            this.tail = null;
            return result;
        }
        //travers the list to get second last node
        let curr = this.head;
        while(curr.next !== this.tail){
            curr = curr.next;
        }
        result = this.tail.data;
        this.tail = curr;
        this.tail.next = null;
        return result;
    }

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
list.printList();
list.insertAt(3,new Node(4));
list.printList();
list.insertAt(1,new Node('A'));
list.printList();
list.removeAt(1);
list.removeAt(3);
list.append(new Node(5));
list.prepend(new Node(0));
list.printList();
console.log(list.pop());
list.printList();

list.append(new Node(2));
list.prepend(new Node('C'));
list.append(new Node(10));

list.printList();

console.log(list.pop());

list.printList();

list.insertAt(2, new Node(-1));
list.printList(); 

list.insertAt(0, new Node('x'));
list.printList();
list.insertAt(15,new Node('B'));
list.printList();


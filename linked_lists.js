/**
 * Created by jyotikabanerjee on 09/08/14.
 */
function Node(data){
    this.data = data;
    this.next = null;
}


function LinkedList() {
    this.head = new Node("HEAD_NODE");

    /**Insert an element in the list*/
    this.insert = function (data,item,flag){
        console.log('Insert function...'+data);
        var curr = this.head;
        var newnode;
        /** If node not provided, add to the end of the list.*/

        if(!item) {
                while(curr.next !== null){
                    curr= curr.next;
                }
                newnode = new Node(data);
                curr.next = newnode;
           }
        else{
               /** If flag === 0, insert after. Else, insert before*/
               /** Default value: insert_after: 0 (falsy) */
               if(!flag){
                   var insert_after = this.find(item);
                   newnode = new Node(data);
                   newnode.next = insert_after.next;
                   insert_after.next = newnode;
               }
               else{
                   var prev = null;
                   newnode = new Node(data);
                   if(item === "HEAD_NODE"){
                       console.log("Cannot add the node before head node");
                       return;
                   }

                   while(curr !== null){
                       if(curr.next !==null &&  curr.next.data === item){
                           prev = curr;
                           curr = curr.next;
                           newnode.next = curr;
                           prev.next = newnode;
                       }
                       curr = curr.next;
                 }
               }
           }
    };

    /**Find an element in the list*/
    this.find = function (elem){
        var curr = this.head;
        while(curr.data !== elem){
            curr = curr.next;
        }
        return curr;
    };

    /**Display contents of the list*/
    this.display = function (){
        var curr = this.head;
        while(curr.next !== null){
            console.log(curr.next.data);
            curr = curr.next;
        }
    };

    /**Remove element from list*/
    this.remove = function (val){
        var curr = this.head;
        while(curr.next !== null){
            if(curr.next.data === val){
                curr.next = curr.next.next;
                //  curr.next.next=null;
            }
            curr = curr.next;
        }

    };


    /** Reverse the list*/
    this.reverse = function(){
        var curr = this.head;
        var revList = new LinkedList();

        while(curr.next!== null){
            console.log("inserting "+curr.next.data+ " into front of reverse");
            revList.insert(curr.next.data,'HEAD_NODE');
            //revList.insert(1);
            curr = curr.next;
        }

        return revList;
    }
}



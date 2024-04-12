import Nodee from './Node'
import Nodes from "./Nodes";
import IfLinkedList from './IfLinkedList'
export default class LinkedList implements IfLinkedList{
    private head: Nodee
    private length: number

    /**
     * Initializes a new instance of the LinkedList class.
     * If initial data is provided, it adds the data to the linked list.
     * @param datas Initial data to be added to the linked list.
     */
    constructor(...datas: any) {
        if(datas.length > 0){
            this.push(...datas)
        } else {
            this.head = null
            this.length = 0
        }
    }

    /**
     * Adds new nodes with the provided data to the beginning of the linked list.
     * @param datas Data to be prepended to the linked list.
     */
    prepend(...datas: any): void{
        let nodes: Nodee[] = new Nodes(...datas).toNode()

        if(nodes.length === 0) return

        for(let i: number = nodes.length-1; i >= 0; i--){
            nodes[i].next = this.head
            this.head = nodes[i]
            this.length++
        }
    }

    /**
     * Adds new nodes with the provided data to the end of the linked list.
     * @param datas Data to be added to the end of the linked list.
     */
    push(...datas: any): void{
        let nodes: Nodee[] = new Nodes(...datas).toNode()

        if (nodes.length === 0) return

        let cursor: Nodee = this.head

        if (!cursor) {
            this.head = nodes[0]
            cursor = this.head
            this.length++

            if (nodes.length === 1) return
        } else {
            while (cursor.next !== null)
                cursor = cursor.next
        }

        for (let i: number = 1; i < nodes.length; i++) {
            cursor.next = nodes[i]
            cursor = cursor.next
            this.length++
        }
    }

    /**
     * Adds new nodes with the provided data to the linked list while maintaining a sorted order.
     * @param datas Data to be added to the linked list.
     */
    addToSorted(...datas: any): void{
        let nodes: Nodee[] = new Nodes(...datas).toNode()

        if (nodes.length === 0) return

        for (let node of nodes) {
            if (!this.head || node.data < this.head.data) {
                node.next = this.head
                this.head = node
                this.length++
            } else {
                let cursor: Nodee = this.head

                while (cursor.next && node.data > cursor.next.data)
                    cursor = cursor.next

                node.next = cursor.next
                cursor.next = node
                this.length++
            }
        }
    }

    /**
     * Sorts the linked list in ascending order.
     */
    sort(): void {
        // If the list is empty or has only one element, no need to sort
        if (!this.head || !this.head.next) return;

        let sorted: boolean = false;

        while (!sorted) {
            sorted = true;
            let cursor: Nodee = this.head;

            while (cursor.next) {
                if (cursor.data > cursor.next.data) {
                    sorted = false;

                    // Swap the data of the current and next nodes
                    let temp = cursor.data;
                    cursor.data = cursor.next.data;
                    cursor.next.data = temp;
                }

                cursor = cursor.next;
            }
        }
    }

    /**
     * Checks if the linked list contains a node with the specified data.
     * @param data Data to search for in the linked list.
     * @returns True if the data is found, otherwise false.
     */
    contains(data: any): boolean{
        let cursor: Nodee = this.head
        while(cursor != null){
            if(cursor.data === data){
                return true
            }
            cursor = cursor.next
        }
        return false
    }

    /**
     * Counts the occurrences of nodes with the specified data in the linked list.
     * @param data Data to count occurrences of in the linked list.
     * @returns Number of occurrences of the specified data.
     */
    countOf(data: any): number{
        let counter: number = 0
        let cursor: Nodee = this.head

        while(cursor != null){
            if(cursor.data === data)
                counter++
            cursor = cursor.next
        }

        return counter
    }

    /**
     * Sets the data of the node at the specified index with the provided data.
     * @param index Index of the node to set the data for.
     * @param data Data to set for the node.
     */
    set(index: number, data: any): void {
        const node: Nodee = new Nodee(data)

        if(index > this.size()-1 || index < 0 || this.size() === 0) return

        if(!node) return

        if(index === 0){
            node.next = this.head.next
            this.head = node
        }
        else{
            let cursor: Nodee = this.head
            for(let i: number = 0; i < index-1; i++){
                cursor = cursor.next
            }
            node.next = cursor.next.next
            cursor.next = node
        }
    }

    /**
     * Clears the linked list by setting the head to null and resetting the length to 0.
     */
    clear(): void{
        this.head = null
        this.length = 0
    }

    /**
     * Removes the specified number of nodes from the end of the linked list.
     * @param piece Number of nodes to remove from the end of the linked list.
     */
    pop(piece: number = 1): void {
        if (this.size() === 0) return

        if (piece >= this.size()) {
            this.clear()
            return
        }

        let cursor: Nodee = this.head

        for (let i = 0; i < this.size()-(piece+1); i++) {
            cursor = cursor.next
        }
        cursor.next = null

        this.length -= piece
    }

    /**
     * Removes the specified number of nodes from the beginning of the linked list.
     * @param piece Number of nodes to remove from the beginning of the linked list.
     */
    poll(piece: number = 1): void{
        if(this.size() === 0) return

        if (piece >= this.size()) {
            this.clear()
            return
        }

        for(let i: number = 0; i < piece; i++){
            this.head = this.head.next
        }
        this.length -= piece
    }

    /**
     * Retrieves the data of the node at the specified index in the linked list.
     * @param index Index of the node to retrieve data from.
     * @returns Data of the node at the specified index, or null if the index is out of bounds.
     */
    get(index: number): any{
        if (index >= this.size() || index < 0) return null;

        let cursor: Nodee = this.head;
        for (let i: number = 0; i < index; i++) {
            cursor = cursor.next;
        }

        return cursor != null ? cursor.data : null
    }

    /**
     * Retrieves the data of the first node in the linked list.
     * @returns Data of the first node, or null if the linked list is empty.
     */
    getFirst(): any{
        return this.head !== null ? this.head.data : null
    }

    /**
     * Retrieves the data of the last node in the linked list.
     * @returns Data of the last node, or null if the linked list is empty.
     */
    getLast(): any{
        return this.get(this.size()-1)
    }

    /**
     * Retrieves the number of nodes in the linked list.
     * @returns Number of nodes in the linked list.
     */
    size(): number{
        return this.length
    }

    /**
     * Converts the linked list to an array.
     * @returns An array containing the data of all nodes in the linked list.
     */
    toArray(): any[]{
        let arr: any[] = new Array<any>(this.size())
        let cursor: Nodee = this.head
        for(let i: number = 0; i < arr.length; i++){
            arr[i] = cursor.data
            cursor = cursor.next
        }
        return arr
    }

    /**
     * Prints the data of all nodes in the linked list to the console.
     * Output: x -> y -> z -> ... -> n
     */
    print(): void{
        if(this.size() === 0) return

        let cursor: Nodee = this.head
        let result: string =  cursor.data
        cursor = cursor.next
        while (cursor !== null){
            result += ' -> ' + cursor.data
            cursor = cursor.next
        }
        console.log(result)
    }
}
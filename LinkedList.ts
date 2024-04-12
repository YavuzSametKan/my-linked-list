import Nodee from './Node'
import Nodes from "./Nodes";
export default class LinkedList{
    private head: Nodee
    private length: number

    constructor(...datas: any) {
        if(datas.length > 0){
            this.push(...datas)
        } else {
            this.head = null
            this.length = 0
        }
    }

    prepend(...datas: any){
        let nodes: Nodee[] = new Nodes(...datas).toNode()

        if(nodes.length === 0) return

        for(let i: number = nodes.length-1; i >= 0; i--){
            nodes[i].next = this.head
            this.head = nodes[i]
            this.length++
        }
    }

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

    addToSorted(...datas): void{
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

    sort(): void {
        // If the list is empty or has only one element, no need to sort
        if (!this.head || !this.head.next) return;

        let sorted = false;

        while (!sorted) {
            sorted = true;
            let cursor: Nodee = this.head;
            let prev: Nodee = null;

            while (cursor.next) {
                if (cursor.data > cursor.next.data) {
                    sorted = false;

                    // Swap the data of the current and next nodes
                    let temp = cursor.data;
                    cursor.data = cursor.next.data;
                    cursor.next.data = temp;
                }

                prev = cursor;
                cursor = cursor.next;
            }
        }
    }

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

    clear(): void{
        this.head = null
        this.length = 0
    }

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

    get(index: number): any{
        if (index >= this.size() || index < 0) return null;

        let cursor: Nodee = this.head;
        for (let i: number = 0; i < index; i++) {
            cursor = cursor.next;
        }

        return cursor != null ? cursor.data : null
    }

    getFirst(): any{
        return this.head !== null ? this.head.data : null
    }

    getLast(): any{
        return this.get(this.size()-1)
    }

    size(): number{
        return this.length
    }

    toArray(){
        let arr: any[] = new Array<any>(this.size())
        let cursor: Nodee = this.head
        for(let i: number = 0; i < arr.length; i++){
            arr[i] = cursor.data
            cursor = cursor.next
        }
        return arr
    }

    print(): void{
        if(this.size() === 0) return

        let cursor: Nodee = this.head
        let result: string =  cursor.data
        cursor = cursor.next
        while (cursor !== null){
            result += ' -> ' + cursor.data
            cursor = cursor.next
        }
        result += '\nlist length: ' + this.length
        console.log(result)
    }
}
export default interface IfLinkedList{
    prepend(...datas: any): void
    push(...datas: any): void
    addToSorted(...datas: any): void

    sort(): void

    contains(data: any): boolean
    countOf(data: any): number

    isEmpty(): boolean

    set(index: number, data: any): void

    clear(): void

    pop(piece: number): void
    poll(piece: number): void

    get(index: number): any
    getFirst(): any
    getLast(): any

    size(): number

    toArray(): any[]

    print(): void
}
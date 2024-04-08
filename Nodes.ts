import Nodee from "./Node";

export default class Nodes{
    nodes: Nodee[]
    constructor(...datas: any){
        this.nodes = new Array<Nodee>(datas.length)
        for(let i: number = 0; i < datas.length; i++)
            this.nodes[i] = new Nodee(datas[i])
    }

    toNode(): Nodee[]{
        return this.nodes
    }
}
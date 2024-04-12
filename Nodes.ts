import Nodee from "./Node"

export default class Nodes{
    private nodes: Nodee[]
    constructor(...datas: any){
        this.nodes = new Array<Nodee>(datas.length)
        for(let i: number = 0; i < datas.length; i++)
            this.nodes[i] = new Nodee(datas[i])
    }

    toNodeArray(): Nodee[]{
        return this.nodes
    }
}
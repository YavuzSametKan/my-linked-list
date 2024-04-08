# My Linked List

This class implements a singly linked list data structure.

## Constructor

### constructor(...datas: any)

Creates a new LinkedList. The provided data (datas) is added to the list.

Parameters:
- `datas`: Data to be added or an array of data.

## Methods

### prepend(...datas: any): void

Adds data to the beginning of the list.

Parameters:
- `datas`: Data to be added or an array of data.

### prependNode(node: Nodee | Nodee[]): void

Adds one or multiple nodes to the beginning of the list.

Parameters:
- `node`: Node or array of nodes to be added.

### add(...datas: any): void

Adds data to the end of the list.

Parameters:
- `datas`: Data to be added or an array of data.

### addNode(node: Nodee | Nodee[]): void

Adds one or multiple nodes to the end of the list.

Parameters:
- `node`: Node or array of nodes to be added.

### addToSorted(...datas: any): void

Adds data to the end of the list in sorted order.

Parameters:
- `datas`: Data or array of data to be added in sorted order.

### contains(data: any): boolean

Checks if a specific data exists in the list.

Parameters:
- `data`: Data to be checked.

### countOf(data: any): number

Counts how many times a specific data appears in the list.

Parameters:
- `data`: Data to be counted.

### set(index: number, data: any): void

Replaces the data at a specific index with new data.

Parameters:
- `index`: Index of the data to be replaced.
- `data`: New data.

### setNode(index: number, node: Nodee): void

Replaces the node at a specific index with a new node.

Parameters:
- `index`: Index of the node to be replaced.
- `node`: New node.

### clear(): void

Clears the list, resets it to its initial state.

### pop(piece = 1): void

Removes a specified number of elements from the end of the list.

Parameters:
- `piece`: Number of elements to remove.

### poll(piece = 1): void

Removes a specified number of elements from the beginning of the list.

Parameters:
- `piece`: Number of elements to remove.

### get(index: number): any

Gets the data at a specific index.

Parameters:
- `index`: Index of the data to get.

### getFirst(): any

Gets the data at the beginning of the list.

### getLast(): any

Gets the data at the end of the list.

### size(): number

Gets the size of the list (number of elements).

### toArray(): any[]

Converts the elements of the list to an array.

### print(): void

Prints the elements of the list to the console.
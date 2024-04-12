# My Linked List

This is a TypeScript implementation of a singly linked list.

## Usage

### Creating a Linked List

You can create a new instance of the linked list with or without initial data:

```typescript
const linkedList = new LinkedList() // Creates an empty linked list
const linkedListWithData = new LinkedList(1, 2, 3) // Creates a linked list with initial data
```

### Methods

#### `add(...datas: any): void`

Adds new nodes with the provided data to the end of the linked list.

#### `prepend(...datas: any): void`

Prepends new nodes with the provided data to the beginning of the linked list.

#### `push(...datas: any): void`

Same as `add`, adds new nodes with the provided data to the end of the linked list.

#### `addToSorted(...datas: any): void`

Adds new nodes with the provided data to the linked list while maintaining a sorted order.

#### `sort(): void`

Sorts the linked list in ascending order.

#### `contains(data: any): boolean`

Checks if the linked list contains a node with the specified data.

#### `countOf(data: any): number`

Counts the occurrences of nodes with the specified data in the linked list.

#### `isEmpty(): boolean`

Checks if the linked list is empty.

#### `set(index: number, data: any): void`

Sets the data of the node at the specified index to the provided data.

#### `clear(): void`

Clears the linked list, removing all nodes.

#### `pop(piece: number = 1): void`

Removes the last `piece` nodes from the linked list.

#### `poll(piece: number = 1): void`

Removes the first `piece` nodes from the linked list.

#### `get(index: number): any`

Returns the data of the node at the specified index.

#### `getFirst(): any`

Returns the data of the first node in the linked list.

#### `getLast(): any`

Returns the data of the last node in the linked list.

#### `size(): number`

Returns the number of nodes in the linked list.

#### `toArray(): any[]`

Converts the linked list to an array.

#### `print(): void`

Prints the contents of the linked list to the console.

## Examples

```typescript
import LinkedList from './LinkedList'

((): void => {
    // Creating a new LinkedList
    const linkedList = new LinkedList()

    // Checking if the list is empty
    console.log("Is List Empty?", linkedList.isEmpty()) // Output: true

    // Adding elements to the list
    linkedList.push(7, 2, 7, 1, 5)
    console.log("\nInitial List:")
    linkedList.print() // Output: 7 -> 2 -> 7 -> 1 -> 5

    // Prepending elements to the list
    linkedList.prepend(10, 20)
    console.log("\nList after prepending elements:")
    linkedList.print() // Output: 10 -> 20 -> 7 -> 2 -> 7 -> 1 -> 5

    // Adding elements to the sorted list
    linkedList.addToSorted(3, 9, 6)
    console.log("\nSorted List after prepending elements:")
    linkedList.print() // Output: 3 -> 6 -> 9 -> 10 -> 20 -> 7 -> 2 -> 7 -> 1 -> 5

    // Checking if the list contains a specific element
    console.log("\nDoes the list contain 7?", linkedList.contains(7)) // Output: true

    // Counting occurrences of a specific element
    console.log("Number of occurrences of 7:", linkedList.countOf(7)) // Output: 2

    // Getting the size of the list
    console.log("Size of the list:", linkedList.size()) // Output: 10

    // Getting the first element of the list
    console.log("First element of the list:", linkedList.getFirst()) // Output: 3

    // Getting the last element of the list
    console.log("Last element of the list:", linkedList.getLast()) // Output: 5

    // Getting the element at a specific index
    console.log("Element at index 3:", linkedList.get(3)) // Output: 10

    // Checking if the list is empty
    console.log("Is List Empty?", linkedList.isEmpty()) // Output: false

    // Sorting to list
    console.log("\nElements are sorting:")
    linkedList.sort()
    linkedList.print() // Output: 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> 7 -> 9 -> 10 -> 20

    // Setting a specific element at an index
    linkedList.set(2, 15)
    console.log("\nList after setting element at index 2 to 15:")
    linkedList.print() // Output: 1 -> 2 -> 15 -> 5 -> 6 -> 7 -> 7 -> 9 -> 10 -> 20

    // Removing elements from the end of the list
    linkedList.pop(3)
    console.log("\nList after removing 3 elements from the end:")
    linkedList.print() // Output: 1 -> 2 -> 15 -> 5 -> 6 -> 7 -> 7

    // Removing elements from the beginning of the list
    linkedList.poll(2)
    console.log("\nList after removing 2 elements from the beginning:")
    linkedList.print() // Output: 15 -> 5 -> 6 -> 7 -> 7

    // Converting the list to an array
    const array: any[] = linkedList.toArray()
    console.log("\nArray representation of the list:", array) // Output: [ 15, 5, 6, 7, 7 ]
})()
```
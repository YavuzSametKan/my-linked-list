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
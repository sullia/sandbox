function myFunc(num) {
    // Set a base condition
    if (num === 0) {
        console.log("Task Completed!");
        return;
    }
    console.log("Hello " + num);
    myFunc(num -1);
}

// Call the function
myFunc(5);
// Exercise 7: Function Overloads
// Define an interface for a function that can accept either a string or a number as a parameter.
// Write a function using overloads that handles both types and logs a different message for each.

interface Logger {
  (input: string): void; 
  (input: number): void; 
}

const logMessage: Logger = (input: string | number) => {
  if (typeof input === "string") {
    console.log(`Message: ${input}`);
  } else {
    console.log(`Code: ${input}`);
  }
};

logMessage("Hello"); // Expected Output: "Message: Hello"
logMessage(404);     // Expected Output: "Code: 404"

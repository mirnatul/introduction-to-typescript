try {

}
catch (error) {
    if (error instanceof Error) {
        console.error("An error occurred:", error.message);
    }
    else {
        console.error("An unknown error occurred");
    }
}

// assertion example
const data: unknown = "Hello, TypeScript!";
// we have to assert the type here like data as string
const strData: string = data as string;
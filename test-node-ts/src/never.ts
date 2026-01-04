type Role = "admin" | "user";

// handle never type (only need if role is changed in future)

function assertNever(x: never): never {
    throw new Error(`Unhandled role: ${x}`);
}

function redirectBasedOnRole(role: Role): void {
    if (role === "admin") {
        console.log("Redirecting to admin dashboard...");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user homepage...");
        return;
    }
    // The following line should never be reached.
    // Using 'never' type to ensure all cases are handled.
    // but if there another type exist role will be of that type
    role;

    // use this
    assertNever(role);
}

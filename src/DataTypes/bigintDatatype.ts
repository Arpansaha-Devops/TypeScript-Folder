console.warn(Number.MAX_SAFE_INTEGER) // this is the maximum value of number in Js and Ts.
console.warn(BigInt(Number.MAX_SAFE_INTEGER)) // this is the maximum value of bigint in Js and Ts.

type UserID = bigint;

const userId: UserID = 9123456789012345678n;

function getUser(id: UserID) {
  console.log(`Fetching user ${id}`);
}

getUser(userId);


const numberBig = 12345678901234567890n;

const x = numberBig + 10n; // This is valid we must have to use the n at the end of the number to make it a bigint, otherwise it will throw an error because we can't mix bigint and number types.
console.log(x); // Output: 12345678901234567890n + 10n = 12345678901234567900n
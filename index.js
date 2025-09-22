const { toGlobalId, fromGlobalId } = require('graphql-relay');

// Example: Convert a User type and ID to a global ID
const userType = 'User';
const userId1 = 'sc__01K4CPPKAH42J7BK5YV41KA6N8';
const userId2 = 'cus_01K3EBSR156YEQ0YGAD5H8901W';
const globalId1 = toGlobalId(userType, userId1);
const globalId2 = toGlobalId(userType, userId2);
console.log('Global ID:', globalId1);
console.log('Global ID:', globalId2);

// Example: Convert the global ID back to type and ID
const { type, id } = fromGlobalId("VXNlcjoxMDEzMTE=");
console.log('Decoded type:', type);
console.log('Decoded ID:', id);

// console.log('Decoded type:', type2);
// console.log('Decoded ID:', id2); 
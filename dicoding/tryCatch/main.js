// mencoba try catch

// try {
//     console.log(hai);
// } catch (error) {
//     console.log(`Error: ${error.message}`);
// }

const node1 = '{ "name": "Fatwa", "age": 32, "city": "New York" }';
 
try {
    const user = JSON.parse(node1);
    if (!user.name) {
        throw new SyntaxError('Nama tidak ada');
    }
    if (!user.age) {
        throw new SyntaxError('Umur tidak ada');
    }
    if (!user.city) {
        throw new SyntaxError('Kota tidak ada');
    }
    console.log(user.name);
    console.log(user.age);
    console.log(user.city);
} catch (error) {
    console.log(`Error: ${error.message}`);
}
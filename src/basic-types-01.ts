/*
 * You can declare variable types with colon after the variable name.
 */
const variable_number_one: string = 'hello';
/*
 * If you are assigning to the variable upon declaration, you don't have to designate the type.
 */
const variable_number_two = 'hello';

/*
 * It is always good practice to declare the type of a variable when you aren't assigning to it upon declaration.
 */
let variable_number_three: string;

/*
 * Without the explicit `string` above, `variable_number_three` could be assigned a number.
 * The type declaration will cause an error if you do so.
 */
function doSomethingWithThisVariable(name: string) {
    variable_number_three = "one";
    doSomethingElse(variable_number_one, name);
}

/*
 * If `doSomethingElse()` is expecting two strings, and you have not declared the type of `variable_number_three`, then you can
 * assign a number to it in `doSomethingWithThisVariable()`, and it will pass it through.
 * That might not be what you intended.
 */
function doSomethingElse(var1: string, var2: string) {
    return;
}

$(document).ready(readyNow); // document sycnd with jQuery 

function readyNow() {
    console.log('we are ready');
    $("#submitButton").on('click', addEmployee);

} // ready now function

class Employee {
    constructor(firstName, LastName, ID, Title, AnnualSalary) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.ID = ID;
        this.Title = Title;
        this.AnnualSalary = AnnualSalary;

    } // end constructor
} // employee class

let employees = [];

function addEmployee() {
    const tempEmployee = new Employee(
        $('#firstNameIn').val(),
        $('#lastNameIn').val(),
        $('#idIn').val(),
        $('#titleIn').val(),
        $('#anualSalaryIn').val()
    ); // Makes new employee using value from fields & classes
    employees.push(tempEmployee);
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#anualSalaryIn').val(''); // emptys 
    tableCreator(employees);
} // end add employee 


function tableCreator(array){
    let el = $()
    for (const iterator of employees) {
        
    }
}
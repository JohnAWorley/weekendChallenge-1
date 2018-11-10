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
    let el = $('.outputTable')
    el.empty();
    for (let iterator of employees) {
        let monthlySalary = (iterator.AnnualSalary)/12
        let display= `<tr> <td>${iterator.firstName}</td> <td>${iterator.LastName}</td> <td>${iterator.ID}</td> <td>${iterator.Title}</td> <td>${iterator.AnnualSalary}</td> <td>${monthlySalary}</td> <td><button>Delete</button></td> </tr>`;
        el.append(display);

    }
}

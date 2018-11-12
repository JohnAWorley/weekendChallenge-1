$(document).ready(readyNow); // document sycnd with jQuery 

function readyNow() {
    console.log('we are ready');
    $("#submitButton").on('click', addEmployee);

} // ready now function

class Employee {
    constructor(firstName, LastName, ID, Title, AnnualSalary, monthlySalary) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.ID = ID;
        this.Title = Title;
        this.AnnualSalary = AnnualSalary;
        this.monthlySalary = (AnnualSalary/12);


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
    monthlyOutput(employees);
    
} // end add employee 


function tableCreator(array){
    let el = $('.outputTable')
    el.empty();
    for (let iterator of employees) {
        let display= `<tr class="${iterator.ID}">
         <td>${iterator.firstName}</td> 
         <td>${iterator.LastName}</td>
         <td>${iterator.ID}</td> 
         <td>${iterator.Title}</td> 
         <td>${iterator.AnnualSalary}</td>
         <td>${iterator.monthlySalary}</td> 
         <td><button class="${iterator.ID}">Delete</button></td>
            </tr>`;
        el.append(display);
    //     $(`.${iterator.ID}`).on('click', function() {$(`totalMonthlyExpesnes = (totalMonthlyExpesnes - .${iterator.monthlySalary})`)
    // }
    //     );
        
        $(`.${iterator.ID}`).on('click', function() {
            $(`.${iterator.ID}`).remove();
            employees.splice(employees.indexOf(iterator),1);
            monthlyOutput(employees);

    }
        );
        
    }
    
}

// let totalMonthlyExpesnes = 0;

function monthlyOutput( array ) {
    let el = $('.totalMonthlyOutput')
    el.empty();
    totalMonthlyExpesnes = 0;
    for (const iterator of employees) {
      let monthlyEmployeeSalary  =iterator.monthlySalary;
      totalMonthlyExpesnes  += monthlyEmployeeSalary;

    }
    redCheck(monthlyOutput);
    
    el.append(totalMonthlyExpesnes);
  
    
}

function redCheck() {
    if(totalMonthlyExpesnes>20000){
        $('.totalMonthlyOutput').css('background-color','red')
    }
    else{
        console.log('all good ');
        $('.totalMonthlyOutput').css('background-color','white')
    }
    
} // 


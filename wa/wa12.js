// Problem 1
// Create JSON for each employee
const sam = {
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true,
    };
    
    const mary = {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true,
    };
    
    const bill = {
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligible: false,
    };
    
    // Problem 2
    // Create JSON for the company
    const techStars = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: [sam, mary, bill],
    };
    
    // Add new employee to the company JSON
    const anna = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false,
    };
    techStars.employees.push(anna);
    
    // Problem 3
    // Calculate total salary for all company employees
    let totalSalary = 0;
    techStars.employees.forEach((employee) => {
    totalSalary += employee.salary;
    });
    console.log("Total Salary:", totalSalary);
    
    // Problem 4
    // Function to update salary for raise eligible employees and set eligibility to false
    function giveRaise(employee) {
    if (employee.raiseEligible) {
    employee.salary *= 1.1;
    employee.raiseEligible = false;
    }
    }
    
    techStars.employees.forEach((employee) => giveRaise(employee));
    console.log("Updated Employees:", techStars.employees);
    
    // Problem 5
    // Update the company JSON with who is working from home
    const workingFromHome = ["Anna", "Sam"];
    techStars.employees.forEach((employee) => {
    if (workingFromHome.includes(employee.firstName)) {
    employee.wfh = true;
    } else {
    employee.wfh = false;
    }
    });
    console.log("Updated Employees:", techStars.employees);
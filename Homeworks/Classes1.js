// Homework: Create an `Employee` Class (No Inheritance)

// Objective:
// Create a JavaScript class named `Employee` that represents an employee with strict validation rules 
// and meaningful output using getters and methods.

// Properties:
// Your class should have the following properties, all validated via setters:

// 1. name (String):
//    - Must be between 2 and 15 characters.
//    - Must be a string.
//    - Normalized: first letter uppercase, the rest lowercase.

// 2. surname (String):
//    - Same validation rules and normalization as name.

// 3. email (String):
//    - Must follow the basic format: x.x@xx.
//    - Should be trimmed (no leading/trailing spaces).
//    - Must be converted to lowercase.

// 4. phoneNumber (String):
//    - Must be a string.
//    - Must be exactly 9 digits.
//    - Must start with one of the valid Armenian mobile prefixes: 
//      091, 093, 094, 095, 096, 097, 098, or 099.
//    - No extra characters allowed (only digits, no "+" or dashes).

// 5. position (String):
//    - Must be between 2 and 50 characters.

// 6. salary (Number):
//    - Must be a number.
//    - Must be greater than or equal to 68,000 AMD (minimum net salary in Armenia).

// 7. isRemote (Boolean):
//    - Must be either true or false.

// All values must be assigned through their respective setters during object construction. 
// If any validation fails, throw an Error with a descriptive message.

// class Employee {
//     constructor(name, surname, email, phoneNumber, position, salary, isRemote) {
//       this.name = name;
//       this.surname = surname;
//       this.email = email;
//       this.phoneNumber = phoneNumber;
//       this.position = position;
//       this.salary = salary;
//       this.isRemote = isRemote;
//     }
  
//     // Name
//     get name() {
//       return this._name;
//     }
  
//     set name(value) {
//       if (typeof value !== 'string') throw new Error("Name must be a string.");
//       value = value.trim();
//       if (value.length < 2 || value.length > 15) throw new Error("Name must be between 2 and 15 characters.");
//       this._name = value[0].toUpperCase() + value.slice(1).toLowerCase();
//     }
  
//     // Surname
//     get surname() {
//       return this._surname;
//     }
  
//     set surname(value) {
//       if (typeof value !== 'string') throw new Error("Surname must be a string.");
//       value = value.trim();
//       if (value.length < 2 || value.length > 15) throw new Error("Surname must be between 2 and 15 characters.");
//       this._surname = value[0].toUpperCase() + value.slice(1).toLowerCase();
//     }
  
//     // Email
//     get email() {
//       return this._email;
//     }
  
//     set email(value) {
//       if (typeof value !== 'string') throw new Error("Email must be a string.");
//       value = value.trim().toLowerCase();
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(value)) throw new Error("Email format is invalid.");
//       this._email = value;
//     }
  
//     // Phone Number
//     get phoneNumber() {
//       return this._phoneNumber;
//     }
  
//     set phoneNumber(value) {
//       const validPrefixes = ['091', '093', '094', '095', '096', '097', '098', '099'];
//       if (typeof value !== 'string') throw new Error("Phone number must be a string.");
//       if (!/^\d{9}$/.test(value)) throw new Error("Phone number must be exactly 9 digits with no extra characters.");
//       if (!validPrefixes.includes(value.substring(0, 3))) throw new Error("Phone number must start with a valid Armenian prefix.");
//       this._phoneNumber = value;
//     }
  
//     // Position
//     get position() {
//       return this._position;
//     }
  
//     set position(value) {
//       if (typeof value !== 'string') throw new Error("Position must be a string.");
//       value = value.trim();
//       if (value.length < 2 || value.length > 50) throw new Error("Position must be between 2 and 50 characters.");
//       this._position = value;
//     }
  
//     // Salary
//     get salary() {
//       return this._salary;
//     }
  
//     set salary(value) {
//       if (typeof value !== 'number' || isNaN(value)) throw new Error("Salary must be a number.");
//       if (value < 68000) throw new Error("Salary must be at least 68,000 AMD.");
//       this._salary = value;
//     }
  
//     // isRemote
//     get isRemote() {
//       return this._isRemote;
//     }
  
//     set isRemote(value) {
//       if (typeof value !== 'boolean') throw new Error("isRemote must be a boolean.");
//       this._isRemote = value;
//     }
  
//     // Optional method for formatted output
//     getInfo() {
//       return `
//         ${this.name} ${this.surname}
//         Email: ${this.email}
//         Phone: ${this.phoneNumber}
//         Position: ${this.position}
//         Salary: ${this.salary} AMD
//         Remote: ${this.isRemote ? "Yes" : "No"}
//       `.trim();
//     }
//   }
  
//   // Example Usage
//   try {
//     const emp = new Employee("anna", "harutyunyan", "ANNA.H@example.com", "093123456", "Frontend Developer", 70000, true);
//     console.log(emp.getInfo());
//   } catch (error) {
//     console.error(error.message);
//   }
  

// Getter:
// Create a getter named `info` that returns a complete summary of the employee:

// Example:
// "Employee information: Bob Henderson is a QA Automation Engineer. He works remotely. 
// His salary is 670000 AMD. Phone number: 098666666. 
// Email: bob.henderson@email.com"

// - If `isRemote` is false, the sentence should say: "He works on-site."

//  Methods:

// 1. giveRaise(amount):
//    - Increases the salary by the given amount (number).
//    - Validates that the input is a number.

// 2. raiseSalary(percent):
//    - Increases the employee’s current salary by the given percent.
//    - The percent input:
//      - Must be a number.
//      - Must be greater than 0.
//    - Throws an error if input is invalid.

// 3. changePosition(newPosition):
//    - Changes the employee’s position to the given value.
//    - Validation rules:
//      - Must be a string.
//      - Must be between 2 and 50 characters.
//    - Throws an error if the input is invalid.
// */
// class Employee {
//   // Your code here
// }

// //  Example Usage:
// const emp = new Employee(
//   "bob",
//   "henderson",
//   "  Bob.Henderson@email.com ",
//   "098666666",
//   "QA Automation Engineer",
//   780000,
//   true
// );

// console.log(emp.info);
// Employee information: Bob Henderson is a QA Automation Engineer. He works remotely./He works on-site. (if isRemote = false)
// // His salary is 780000 AMD. Phone number: 098666666.
// // Email: bob.henderson@email.com

// emp.raiseSalary(10);
// emp.giveRaise(30000);
// emp.changePosition("Senior QA Automation Engineer");
// console.log(emp.info);
// // Updated info reflecting new salary and position


  class Employee {
    constructor(firstName, lastName, email, phoneNumber, position, salary, isRemote) {
      this.firstName = firstName.trim();
      this.lastName = lastName.trim();
      this.email = email.trim().toLowerCase();
      this.phoneNumber = phoneNumber.trim();
      this.position = position.trim();
      this.salary = salary;
      this.isRemote = isRemote;
    }
  
    get info() {
      const remoteStatus = this.isRemote ? "He works remotely." : "He works on-site.";
      const fullName = `${this.firstName[0].toUpperCase()}${this.firstName.slice(1)} ` +
                       `${this.lastName[0].toUpperCase()}${this.lastName.slice(1)}`;
      return `Employee information: ${fullName} is a ${this.position}. ${remoteStatus} ` +
             `His salary is ${this.salary} AMD. Phone number: ${this.phoneNumber}. ` +
             `Email: ${this.email}`;
    }
  
    giveRaise(amount) {
      if (typeof amount !== 'number' || isNaN(amount)) {
        throw new Error("Amount must be a valid number.");
      }
      this.salary += amount;
    }
  
    raiseSalary(percent) {
      if (typeof percent !== 'number' || isNaN(percent) || percent <= 0) {
        throw new Error("Percent must be a number greater than 0.");
      }
      this.salary += this.salary * (percent / 100);
    }
  
    changePosition(newPosition) {
      if (typeof newPosition !== 'string' || newPosition.trim().length < 2 || newPosition.trim().length > 50) {
        throw new Error("Position must be a string between 2 and 50 characters.");
      }
      this.position = newPosition.trim();
    }
  }
  
  //  Example Usage:
  const emp = new Employee(
    "bob",
    "henderson",
    "  Bob.Henderson@email.com ",
    "098666666",
    "QA Automation Engineer",
    780000,
    true
  );
  
  console.log(emp.info);
  
  emp.raiseSalary(10);
  emp.giveRaise(30000);
  emp.changePosition("Senior QA Automation Engineer");
  
  console.log(emp.info);
  
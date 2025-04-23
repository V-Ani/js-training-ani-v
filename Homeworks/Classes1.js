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

class Employee {
    constructor(name, surname, email, phoneNumber, position, salary, isRemote) {
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.position = position;
      this.salary = salary;
      this.isRemote = isRemote;
    }
  
    // Name
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (typeof value !== 'string') throw new Error("Name must be a string.");
      value = value.trim();
      if (value.length < 2 || value.length > 15) throw new Error("Name must be between 2 and 15 characters.");
      this._name = value[0].toUpperCase() + value.slice(1).toLowerCase();
    }
  
    // Surname
    get surname() {
      return this._surname;
    }
  
    set surname(value) {
      if (typeof value !== 'string') throw new Error("Surname must be a string.");
      value = value.trim();
      if (value.length < 2 || value.length > 15) throw new Error("Surname must be between 2 and 15 characters.");
      this._surname = value[0].toUpperCase() + value.slice(1).toLowerCase();
    }
  
    // Email
    get email() {
      return this._email;
    }
  
    set email(value) {
      if (typeof value !== 'string') throw new Error("Email must be a string.");
      value = value.trim().toLowerCase();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) throw new Error("Email format is invalid.");
      this._email = value;
    }
  
    // Phone Number
    get phoneNumber() {
      return this._phoneNumber;
    }
  
    set phoneNumber(value) {
      const validPrefixes = ['091', '093', '094', '095', '096', '097', '098', '099'];
      if (typeof value !== 'string') throw new Error("Phone number must be a string.");
      if (!/^\d{9}$/.test(value)) throw new Error("Phone number must be exactly 9 digits with no extra characters.");
      if (!validPrefixes.includes(value.substring(0, 3))) throw new Error("Phone number must start with a valid Armenian prefix.");
      this._phoneNumber = value;
    }
  
    // Position
    get position() {
      return this._position;
    }
  
    set position(value) {
      if (typeof value !== 'string') throw new Error("Position must be a string.");
      value = value.trim();
      if (value.length < 2 || value.length > 50) throw new Error("Position must be between 2 and 50 characters.");
      this._position = value;
    }
  
    // Salary
    get salary() {
      return this._salary;
    }
  
    set salary(value) {
      if (typeof value !== 'number' || isNaN(value)) throw new Error("Salary must be a number.");
      if (value < 68000) throw new Error("Salary must be at least 68,000 AMD.");
      this._salary = value;
    }
  
    // isRemote
    get isRemote() {
      return this._isRemote;
    }
  
    set isRemote(value) {
      if (typeof value !== 'boolean') throw new Error("isRemote must be a boolean.");
      this._isRemote = value;
    }
  
    // Optional method for formatted output
    getInfo() {
      return `
        ${this.name} ${this.surname}
        Email: ${this.email}
        Phone: ${this.phoneNumber}
        Position: ${this.position}
        Salary: ${this.salary} AMD
        Remote: ${this.isRemote ? "Yes" : "No"}
      `.trim();
    }
  }
  
  // Example Usage
  try {
    const emp = new Employee("anna", "harutyunyan", "ANNA.H@example.com", "093123456", "Frontend Developer", 70000, true);
    console.log(emp.getInfo());
  } catch (error) {
    console.error(error.message);
  }
  
  
// assigning names to type
let x: number;
let y: string;
let z: boolean;
let a: Date;
// | (pipe syntax) provides alternative syntax
type ContactBirthDate = Date | number | string

// define own custom type, use interfact

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}
interface Contact extends Address {
    // add properties interface should have
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate
    status1?: string;
    //
    status2?: ContactStatus
    status3?: ContactStatusAlt
    // defining method on interface
    clone(): Contact
    // method that accepts parameters
    test(name: string): Contact
}
interface Address {
    line1?: string;
    line2?: string;
    province?: string;
    region?: string;
    postalCode?: number,

}
// referencing hard coded informatiion
// enums are sdpecial type that has hard coded list of values

const primaryContact: Contact = {
  birthDate: new Date("01-01-1999"),
  id: 12345,
  name: "James",
  postalCode: 80000,
  status1: "1nactive",
  status2: ContactStatus.Active,
  status3: "active",
  clone(): Contact {
    throw new Error("Function not implemented.");
  },
  test(name: string): Contact {
    throw new Error("Function not implemented.");
  },
};
// alias for another type, can be used interchangably
type ContactName = string

// to only allow Contact types to the parameter
// We can define what the return type should be
function clone(source: Contact): Contact {
  return Object.apply({}, source);
}

const abcde: Contact = {
  id: 234,
  name: "homer Simpsoin",
  clone(): Contact {
    throw new Error("Function not implemented.");
  },
  test(name: string): Contact {
    throw new Error("Function not implemented.");
  },
};
const gggg = clone(abcde);

// can also pass as variables, can provide type information for functions...
function clone2(source: Contact, func: (source: Contact) => Contact): Contact {
  return Object.apply({}, source);
}

// generics
// simply a meta type, that represents any other type you may want to substitute in

// whatever type is passed in will get passed right out
function cloneGeneric<T>(source: T): T {
  return Object.apply({}, source);
}

const abc: Contact = {
  id: 234,
  name: "homer Simpsoin",
  clone(): Contact {
    throw new Error("Function not implemented.");
  },
  test(name: string): Contact {
    throw new Error("Function not implemented.");
  },
};
const g = cloneGeneric(abc);

const dateRange = { startDate: Date.now(), endDate: Date.now() };

const dateRangeCopy = cloneGeneric(dateRange);

// generic contraints... able to restrict types

// same as Interface AddressableContact extends Contact, Address {}
// this is because we are not adding new fields
// Use & to create a new type
type AddressableContact = Contact & Address

// enums add new code, if you only want to restrict certain fields to limited set of known values use type aliases
type ContactStatusAlt = "active" | "inactive" | "new"

// More advanced techniques...
// keyof operator
// variable of this type only contains values matching the names of the properties of the contact
type ContactFields = keyof Contact

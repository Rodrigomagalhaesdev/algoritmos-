// Busca de número telefonico por nome: O(n)
const findPhoneNumberByName = (phoneBook, name) => {
  for (const entry of phoneBook) {
    if (entry.name === name) {
      return entry.phoneNumber;
    }
  }
  return "Número não encontrado!";
}

// Buscar o nome pelo número telefonico
const findOwnerByPhoneNumber = (phoneBook, phoneNumber) => {
  for (const entry of phoneBook) {
    if (entry.phoneNumber === phoneNumber) {
      return entry.name;
    }
  }
  return "Dono não encontrado!";
}

// Retornar todos os items do array de objetos.
const readAllNumbers = (phoneBook) => {
  for (const entry of phoneBook) {
    console.log(`${entry.name} ${entry.phoneNumber}`);
  }
}

// Chamar um elemento da lista que contenha uma letra especifica
const readNumberFornamesStartingWith = (phoneBook) => {
  for (const entry of phoneBook) {
    if (entry.name.startsWith("R")) {
      console.log(`${entry.name} ${entry.phoneNumber}`);
    }
  }
}

const phoneBook = [
  {
    name: "Valter",
    phoneNumber: "132-456-8790",
  },
  {
    name: "Antonio",
    phoneNumber: "954-244-5698",
  },
  {
    name: "Belarmino",
    phoneNumber: "422-455-6787",
  },
  {
    name: "javascriptilson",
    phoneNumber: "544-123-5609",
  },
  {
    name: "forrest",
    phoneNumber: "983-343-6581",
  },
];

console.log(readAllNumbers(phoneBook));

console.log('--------------------------------------------------')


const valterNumber = findPhoneNumberByName(phoneBook, 'Valter');
const valterOwner = findOwnerByPhoneNumber(phoneBook, "132-456-8790");
console.log(valterNumber);
console.log(valterOwner);

readNumberFornamesStartingWith(phoneBook);

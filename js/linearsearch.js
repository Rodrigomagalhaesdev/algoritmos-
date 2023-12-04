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
    name: "Alice",
    phoneNumber: "132-456-8790",
  },
  {
    name: "Roline",
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


const aliceNumber = findPhoneNumberByName(phoneBook, 'alice');
const aliceOwner = findOwnerByPhoneNumber(phoneBook, "132-456-8790");
console.log(aliceNumber);
console.log(aliceOwner);

readNumberFornamesStartingWith(phoneBook);
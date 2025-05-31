import { program } from "commander";
import { listContacts, getContactById, removeContact, addContact } from "./contacts.js";

program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

function displayContact(contact, title = "📋 Contact Details") {
    if (!contact) {
        console.log("❌ Contact not found");
        return;
    }

    console.log(`\n${title}`);
    console.log("═".repeat(50));
    console.log(`👤 Name:  ${contact.name}`);
    console.log(`📧 Email: ${contact.email}`);
    console.log(`📞 Phone: ${contact.phone}`);
    console.log(`🆔 ID:    ${contact.id}`);
    console.log("═".repeat(50));
}

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const contacts = await listContacts();
            console.table(contacts);
            break;

        case "get":
            const contact = await getContactById(id);
            displayContact(contact, "🔍 Found Contact");
            break;

        case "add":
            const newContact = await addContact(name, email, phone);
            displayContact(newContact, "✅ Contact Added");
            break;

        case "remove":
            const removedContact = await removeContact(id);
            displayContact(removedContact, "🗑️ Contact Removed");
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(options);
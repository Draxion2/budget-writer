let db;

// set up connection to database and set version
const request = indexedDB.open('budget_writer', 1);

// add event in case database version changes
request.onupgradeneeded = function(e) {

    // save reference to db
    const db = e.target.result;

    // create object store called 'new_budget' 
    db.createObjectStore('new_budget', { autoIncrement: true});
};

// run on success
request.onsuccess = function(e) {

    // save reference to db
    db = e.target.result;

    if (navigator.onLine) {
        // uploadBudjet
    }
};

// run on error
request.onerror = function(e) {

    // log the error
    console.log(e.target.errorCode);
};

// run if a new budget is submitted when offline
function saveRecord(record) {

    // new transaction with db
    const transaction = db.transaction(['new_budget'], 'readwrite');

    // access the obj store for 'new_budget'
    const budgetObjectStore = transaction.objectStore('new_budget');

    // add record to store
    budgetObjectStore.add(record);
};
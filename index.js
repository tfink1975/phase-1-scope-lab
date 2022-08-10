var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName.toUpperCase();
}
    
function setBestCustomer() {
    window.bestCustomer = 'not bob';
    return bestCustomer;
} 

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer = 4
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 7;
    return leastFavoriteCustomer;
}
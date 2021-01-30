// first class and economy class handle start here 
function handleFlightTicket(ticket, isIncrease) {
    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-ticket-count').value = ticketNewCount;
    let ticketTotal = 0;
    if (ticket == 'first-class') {
        ticketTotal = ticketNewCount * 150;
    }
    if (ticket == 'economy-class') {
        ticketTotal = ticketNewCount * 100;
    }
    document.getElementById(ticket + '-total').innerText = ticketTotal;
    calculateTicketTotal();
}

// calculate for total amount, subtotal and vat
function calculateTicketTotal() {
    const firstClassTicketCount = getInputValue('first-class');
    const economyClassTicketCount = getInputValue('economy-class');

    const totalTicketPrice = firstClassTicketCount * 150 + economyClassTicketCount * 100;
    document.getElementById('sub-total').innerText = totalTicketPrice;

    // here 10 % vat = 0.1
    const vatCharge = Math.round(totalTicketPrice * 0.1);
    document.getElementById('vat-charge').innerText = vatCharge;

    const total = totalTicketPrice + vatCharge;
    document.getElementById('total-amount').innerText = total;
}

// calculate input value
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

//book now event handler part
document.getElementById('book-now').addEventListener('click', function () {
    document.getElementById('book-now-event').style.display = 'none';

    document.getElementById('notification').style.display = 'block';
})

// Thank You //
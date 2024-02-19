const buyTicket = document.getElementById('buyTicket');

function scrollToSetDiv() {
    var setDiv = document.getElementById('setDiv');
    if (setDiv) {
        setDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ticket section
let setCount = 20;
let totalOrderSet = 0;
let totalPrice = 0;
const getButtons = document.querySelectorAll('.butto');

for (const getButton of getButtons) {
    getButton.addEventListener('click', function () {
        if (!getButton.disabled) {
            getButton.style.backgroundColor = '#1DD100';           
            setCount = setCount - 1;
            document.getElementById('seatLeft').innerText = setCount;
            totalOrderSet = totalOrderSet + 1;
            document.getElementById('totalSet').innerText = totalOrderSet;
            totalPrice = totalPrice + 550;
            document.getElementById('totalPrice').innerText = totalPrice;
            document.getElementById('grandTotal').innerText = totalPrice;
            const getDivTitle = getButton.innerText;
            const mainDiv = document.getElementById('getThis');
            const createDiv = document.createElement('div');
            const createP = document.createElement('p');
            const createP1 = document.createElement('p');
            const createP2 = document.createElement('p');
            createP.innerText = getDivTitle;
            createP1.innerText = 'Economy';
            createP2.innerText = '550';
            createDiv.appendChild(createP);
            createDiv.appendChild(createP1);
            createDiv.appendChild(createP2);
            mainDiv.appendChild(createDiv);
            createDiv.classList.add('flex', 'justify-between');
            getButton.disabled = true;            
            if (totalPrice >= 2200) {
                getButtons.forEach(button => {
                    button.disabled = true;
                });
            }
        }
    });
}

// coupon section
const getApply = document.getElementById('apply');
getApply.addEventListener('click', function () {
    const getInput = document.getElementById('input').value;
    if (totalPrice >= 2200) {
        if (getInput == 'NEW15') {
            const getDiscount = 0.15 * totalPrice;
            const discountPrice = totalPrice - getDiscount;
            document.getElementById('grandTotal').innerText = discountPrice;
            const hideInput = document.getElementById('hidInput');
            hideInput.classList.add('hidden');
        }
    }
    if (totalPrice >= 2200) {
        if (getInput == 'Couple 20') {
            const getDiscount = 0.2 * totalPrice;
            const discountPrice = totalPrice - getDiscount;
            document.getElementById('grandTotal').innerText = discountPrice;
            const hideInput = document.getElementById('hidInput');
            hideInput.classList.add('hidden');
        }
    }
});

// Next button section
const getNextBtn = document.getElementById('nextButton');
getNextBtn.addEventListener('click', function () {
    if (totalPrice >= 550) {
        const getPayment = document.getElementById('paymentSuccess');
        getPayment.classList.remove('hidden');
        const getPayBtn = document.getElementById('paymentBtn');
        getPayBtn.addEventListener('click', function () {
            getPayment.classList.add('hidden');
        });
    }
});

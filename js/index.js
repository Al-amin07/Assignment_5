//  const seats = document.querySelectorAll('.char-btn');
const seats = document.getElementsByClassName('char-btn');
let count = 0;
let total = 0;
for (let seat of seats) {
    seat.addEventListener('click', function (event) {
        const clickSeat = event.target;
        // clickSeat.classList.add('bg-green-600')
        // total += 550;
        // console.log(total)
        count++;
        if (count > 4) {
            alert('You Cannot booked more than 4 seats')
        }
        else {
            clickSeat.style.backgroundColor = '#1DD100'
            clickSeat.style.color = 'white';


            const seatremains = getIntValue('total-seat');
            const updateSeat = seatremains - 1;
            setElementById('total-seat', updateSeat);


            const booked = getIntValue('booked-seat');
            const updateBooked = booked + 1;
            setElementById('booked-seat', updateBooked);
            

            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            p1.innerText = clickSeat.innerText;
            p2.innerText = 'Economoy';
            p3.innerText = '550';
            p2.style.textAlign = 'right';
            p3.style.textAlign = 'right';
            document.getElementById('append-container').appendChild(p1);
            document.getElementById('append-container').appendChild(p2);
            document.getElementById('append-container').appendChild(p3);

            const total = getIntValue('total-tk');
            const newTotal = total + 550;
            setElementById('total-tk', newTotal);

           
            setElementById('grand-total', newTotal);
            clickSeat.parentNode.setAttribute('disabled',true)
            
        }
    })
}

//  Set Value
function setElementById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

//  get int value
function getIntValue(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    return parseFloat(elementText);
}

function getDiscount(elementId, dis){
    const element = getIntValue(elementId);
    return element * dis;
}

document.getElementById('apply').addEventListener('click', function(){
    const input = document.getElementById('input-field');
    const inputValue = input.value;
    if(inputValue === 'NEW15'){
        // const grandTotal = getDiscount('grand-total', 0.5);
        // console.log(grandTotal)
        const valueG = getIntValue('grand-total');
        const newG = valueG * 0.85;
        setElementById('grand-total', newG)
        input.style.display = 'none';
        document.getElementById('apply').style.display = 'none'

        
    }

    else if(inputValue === 'Couple 20'){
        // const grandTotal = getDiscount('grand-total', 0.5);
        // console.log(grandTotal)
        const valueG = getIntValue('grand-total');
        const newG = valueG * 0.80;
        setElementById('grand-total', newG)
        input.style.display = 'none';
        document.getElementById('apply').style.display = 'none'

        
    }
})
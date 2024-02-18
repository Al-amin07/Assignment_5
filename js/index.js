//  const seats = document.querySelectorAll('.char-btn');
const seats = document.getElementsByClassName('char-btn');
let count = 0;
for (let seat of seats) {
    seat.addEventListener('click', function (event) {
        const clickSeat = event.target;
        // clickSeat.classList.add('bg-green-600')

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
            const div = document.createElement('div');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            p1.innerText = clickSeat.innerText;
            p2.innerText = 'Economoy';
            p3.innerText = '550';
            p2.style.textAlign = 'right'
            p3.style.textAlign = 'right'
            // div.classList.add('flex')
            // div.classList.add('justyfy-between')
           
            // div.style.display = 'flex';
            // div.style.justifyContent = 'space-between';
            // div.appendChild(p1);
            // div.appendChild(p2);
            // div.appendChild(p3);
           
            document.getElementById('append-container').appendChild(p1)
            document.getElementById('append-container').appendChild(p2)
            document.getElementById('append-container').appendChild(p3)
            
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
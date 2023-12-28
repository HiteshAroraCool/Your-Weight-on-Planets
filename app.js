const weightInput = document.getElementById("weight");
const planetSelect = document.getElementById('planet');

weightInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        calculateWeight();
    }
});

function calculateWeight() {
    const weight = parseFloat(weightInput.value);
    const planet = planetSelect.options[planetSelect.selectedIndex].value;
    const gravity = getGravity(planet);

    if (gravity && !isNaN(weight)) {
        const weightOnPlanet = weight * gravity;
        console.log(`Your weight on ${planet.charAt(0).toUpperCase() + planet.slice(1)} would be ${weightOnPlanet.toFixed(2)}`);
    } else {
        console.log('Invalid input. Please enter a valid weight and select a planet.');
    }
}

function getGravity(planet) {
    const planetData = {
        mercury: 0.38,
        venus: 0.91,
        earth: 1,
        mars: 0.38,
        jupiter: 2.64,
        saturn: 1.17,
        uranus: 0.92,
        neptune: 1.27
    };

    return planetData[planet];
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');            
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
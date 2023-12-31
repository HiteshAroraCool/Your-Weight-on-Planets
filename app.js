const weightInput = document.getElementById("weight");
const planetSelect = document.getElementById('planet');
const output = document.getElementById("result");

function calculateWeight() {
    const weight = parseFloat(weightInput.value);
    const planet = planetSelect.options[planetSelect.selectedIndex].value;
    const gravity = getGravity(planet);
    console.log(planet, gravity);

    if (gravity && !isNaN(weight)) {
        const weightOnPlanet = weight * gravity;

        output.innerHTML = `Your weight on ${planet.charAt(0).toUpperCase() + planet.slice(1)} would be ${weightOnPlanet.toFixed(2)}`
    } else {
        output.innerHTML = `Invalid input. Please enter a valid weight and select a planet.`;
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
        neptune: 1.27,
        pluto: 0.06
    };

    return planetData[planet];
}
weightInput.addEventListener("click", calculateWeight)
weightInput.addEventListener("input", calculateWeight); // Use input event for real-time updates
planetSelect.addEventListener("change", calculateWeight); // Listen for planet selection changes

// this code is scroll animate

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
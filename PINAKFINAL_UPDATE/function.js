function seeMore(planet) {
   
    if (planet === 'Neptune') {
        const name = 'Neptune';
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/planets?name=' + name,
            headers: { 'X-Api-Key': 'OenUhRJlBvjxHysC5KmM8w==4Fsh4anLYOklhMCB'},
            contentType: 'application/json',
            success: function(result) {
                const neptuneInfo = result[0];
                let neptuneText = getPlanetInformation('Neptune'); // Existing info text for Neptune
                
                // Append API results to the existing text
                neptuneText += `
                    Name: ${neptuneInfo.name}<br>
                    Mass: ${neptuneInfo.mass}<br>
                    Radius: ${neptuneInfo.radius}<br>
                    Period: ${neptuneInfo.period}<br>
                    Semi-Major Axis: ${neptuneInfo.semi_major_axis}<br>
                    Temperature: ${neptuneInfo.temperature}<br>
                    Distance from Earth (light years): ${neptuneInfo.distance_light_year}<br>
                    Host Star Mass: ${neptuneInfo.host_star_mass}<br>
                    Host Star Temperature: ${neptuneInfo.host_star_temperature}<br>
                `;
                
                // Display the modal with updated Neptune information
                displayModal(neptuneText);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });



    } else if (planet === 'Earth') {
        const name = 'Earth';
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/planets?name=' + name,
            headers: { 'X-Api-Key': 'OenUhRJlBvjxHysC5KmM8w==4Fsh4anLYOklhMCB'},
            contentType: 'application/json',
            success: function(result) {
                const earthInfo = result[0];
                let earthText = getPlanetInformation('Earth'); // Existing info text for Earth
                
                // Append API results to the existing text
                earthText += `
                    Name: ${earthInfo.name}<br>
                    Mass: ${earthInfo.mass}<br>
                    Radius: ${earthInfo.radius}<br>
                    Period: ${earthInfo.period}<br>
                    Semi-Major Axis: ${earthInfo.semi_major_axis}<br>
                    Temperature: ${earthInfo.temperature}<br>
                    Distance from Earth (light years): ${earthInfo.distance_light_year}<br>
                    Host Star Mass: ${earthInfo.host_star_mass}<br>
                    Host Star Temperature: ${earthInfo.host_star_temperature}<br>
                `;
                
                // Display the modal with updated Earth information
                displayModal(earthText);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });



        
    } else if (planet === 'Mercury') {
        const name = 'Mercury';
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/planets?name=' + name,
            headers: { 'X-Api-Key': 'OenUhRJlBvjxHysC5KmM8w==4Fsh4anLYOklhMCB'},
            contentType: 'application/json',
            success: function(result) {
                const mercuryInfo = result[0];
                let mercuryText = getPlanetInformation('Mercury'); // Existing info text for Mercury
                
                // Append API results to the existing text
                mercuryText += `
                    Name: ${mercuryInfo.name}<br>
                    Mass: ${mercuryInfo.mass}<br>
                    Radius: ${mercuryInfo.radius}<br>
                    Period: ${mercuryInfo.period}<br>
                    Semi-Major Axis: ${mercuryInfo.semi_major_axis}<br>
                    Temperature: ${mercuryInfo.temperature}<br>
                    Distance from Earth (light years): ${mercuryInfo.distance_light_year}<br>
                    Host Star Mass: ${mercuryInfo.host_star_mass}<br>
                    Host Star Temperature: ${mercuryInfo.host_star_temperature}<br>
                `;
                
                // Display the modal with updated Mercury information
                displayModal(mercuryText);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    } else if (planet === 'Venus') {
        const name = 'Venus';
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/planets?name=' + name,
            headers: { 'X-Api-Key': 'OenUhRJlBvjxHysC5KmM8w==4Fsh4anLYOklhMCB'},
            contentType: 'application/json',
            success: function(result) {
                const venusInfo = result[0];
                let venusText = getPlanetInformation('Venus'); // Existing info text for Venus
                
                // Append API results to the existing text
                venusText += `
                    Name: ${venusInfo.name}<br>
                    Mass: ${venusInfo.mass}<br>
                    Radius: ${venusInfo.radius}<br>
                    Period: ${venusInfo.period}<br>
                    Semi-Major Axis: ${venusInfo.semi_major_axis}<br>
                    Temperature: ${venusInfo.temperature}<br>
                    Distance from Earth (light years): ${venusInfo.distance_light_year}<br>
                    Host Star Mass: ${venusInfo.host_star_mass}<br>
                    Host Star Temperature: ${venusInfo.host_star_temperature}<br>
                `;
                
                // Display the modal with updated Venus information
                displayModal(venusText);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    } else if (planet === 'Mars') {
        const name = 'Mars';
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/planets?name=' + name,
            headers: { 'X-Api-Key': 'OenUhRJlBvjxHysC5KmM8w==4Fsh4anLYOklhMCB'},
            contentType: 'application/json',
            success: function(result) {
                const marsInfo = result[0];
                let marsText = getPlanetInformation('Mars'); // Existing info text for Mars
                
                // Append API results to the existing text
                marsText += `
                    Name: ${marsInfo.name}<br>
                    Mass: ${marsInfo.mass}<br>
                    Radius: ${marsInfo.radius}<br>
                    Period: ${marsInfo.period}<br>
                    Semi-Major Axis: ${marsInfo.semi_major_axis}<br>
                    Temperature: ${marsInfo.temperature}<br>
                    Distance from Earth (light years): ${marsInfo.distance_light_year}<br>
                    Host Star Mass: ${marsInfo.host_star_mass}<br>
                    Host Star Temperature: ${marsInfo.host_star_temperature}<br>
                `;
                
                // Display the modal with updated Mars information
                displayModal(marsText);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    } else if (planet === 'Jupiter') {
        const name = 'Jupiter';
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/planets?name=' + name,
            headers: { 'X-Api-Key': 'OenUhRJlBvjxHysC5KmM8w==4Fsh4anLYOklhMCB'},
            contentType: 'application/json',
            success: function(result) {
                const jupiterInfo = result[0];
                let jupiterText = getPlanetInformation('Jupiter'); // Existing info text for Jupiter
                
                // Append API results to the existing text
                jupiterText += `
                    Name: ${jupiterInfo.name}<br>
                    Mass: ${jupiterInfo.mass}<br>
                    Radius: ${jupiterInfo.radius}<br>
                    Period: ${jupiterInfo.period}<br>
                    Semi-Major Axis: ${jupiterInfo.semi_major_axis}<br>
                    Temperature: ${jupiterInfo.temperature}<br>
                    Distance from Earth (light years): ${jupiterInfo.distance_light_year}<br>
                    Host Star Mass: ${jupiterInfo.host_star_mass}<br>
                    Host Star Temperature: ${jupiterInfo.host_star_temperature}<br>
                `;
                
                // Display the modal with updated Jupiter information
                displayModal(jupiterText);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    } else if (planet === 'Saturn') {
        const name = 'Saturn';
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/planets?name=' + name,
            headers: { 'X-Api-Key': 'OenUhRJlBvjxHysC5KmM8w==4Fsh4anLYOklhMCB'},
            contentType: 'application/json',
            success: function(result) {
                const saturnInfo = result[0];
                let saturnText = getPlanetInformation('Saturn'); // Existing info text for Saturn
                
                // Append API results to the existing text
                saturnText += `
                    Name: ${saturnInfo.name}<br>
                    Mass: ${saturnInfo.mass}<br>
                    Radius: ${saturnInfo.radius}<br>
                    Period: ${saturnInfo.period}<br>
                    Semi-Major Axis: ${saturnInfo.semi_major_axis}<br>
                    Temperature: ${saturnInfo.temperature}<br>
                    Distance from Earth (light years): ${saturnInfo.distance_light_year}<br>
                    Host Star Mass: ${saturnInfo.host_star_mass}<br>
                    Host Star Temperature: ${saturnInfo.host_star_temperature}<br>
                `;
                
                // Display the modal with updated Saturn information
                displayModal(saturnText);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    } else if (planet === 'Uranus') {
        const name = 'Uranus';
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/planets?name=' + name,
            headers: { 'X-Api-Key': 'OenUhRJlBvjxHysC5KmM8w==4Fsh4anLYOklhMCB'},
            contentType: 'application/json',
            success: function(result) {
                const uranusInfo = result[0];
                let uranusText = getPlanetInformation('Uranus'); // Existing info text for Uranus
                
                // Append API results to the existing text
                uranusText += `
                    Name: ${uranusInfo.name}<br>
                    Mass: ${uranusInfo.mass}<br>
                    Radius: ${uranusInfo.radius}<br>
                    Period: ${uranusInfo.period}<br>
                    Semi-Major Axis: ${uranusInfo.semi_major_axis}<br>
                    Temperature: ${uranusInfo.temperature}<br>
                    Distance from Earth (light years): ${uranusInfo.distance_light_year}<br>
                    Host Star Mass: ${uranusInfo.host_star_mass}<br>
                    Host Star Temperature: ${uranusInfo.host_star_temperature}<br>
                `;
                
                // Display the modal with updated Uranus information
                displayModal(uranusText);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    } else if (planet === 'Pluto') {
        const name = 'Pluto';
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/planets?name=' + name,
            headers: { 'X-Api-Key': 'OenUhRJlBvjxHysC5KmM8w==4Fsh4anLYOklhMCB'},
            contentType: 'application/json',
            success: function(result) {
                const plutoInfo = result[0];
                let plutoText = getPlanetInformation('Pluto'); // Existing info text for Pluto
                
                // Append API results to the existing text
                plutoText += `
                    Name: ${plutoInfo.name}<br>
                    Mass: ${plutoInfo.mass}<br>
                    Radius: ${plutoInfo.radius}<br>
                    Period: ${plutoInfo.period}<br>
                    Semi-Major Axis: ${plutoInfo.semi_major_axis}<br>
                    Temperature: ${plutoInfo.temperature}<br>
                    Distance from Earth (light years): ${plutoInfo.distance_light_year}<br>
                    Host Star Mass: ${plutoInfo.host_star_mass}<br>
                    Host Star Temperature: ${plutoInfo.host_star_temperature}<br>
                `;
                
                // Display the modal with updated Pluto information
                displayModal(plutoText);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    } else {
        // For other planets, show existing information
        let information = getPlanetInformation(planet);
        displayModal(information);
    }
}
// getPlanetInformation, displayModal, closeModal functions remain unchanged...


function getPlanetInformation(planet) {
    let information = '';

    switch (planet) {
        case 'Sun':
            information = 'The Sun is the star at the center of the Solar System. <br>'; 
            break;
        case 'Mercury':
            information = 'Mercury is the smallest planet in the Solar System.<br>';
            break;
        case 'Venus':
            information = 'Venus is sometimes called Earth’s twin.<br>';
            break;
        case 'Earth':
            information = 'Earth is the third planet from the Sun and the only astronomical object known to harbor life.<br>';
            break;
        case 'Mars':
            information = 'Mars is often called the Red Planet.<br>';
            break;
        case 'Jupiter':
            information = 'Jupiter is the largest planet in the Solar System.<br>';
            break;
        case 'Saturn':
            information = 'Saturn is known for its prominent ring system.<br>';
            break;
        case 'Uranus':
            information = 'Uranus is unique among the planets because it spins on its side.<br>';
            break;
        case 'Neptune':
            information = 'Neptune is the most distant planet in the Solar System.<br>';
            break;
        case 'Pluto':
            information = 'Pluto was considered the ninth planet until it was reclassified as a "dwarf planet."<br>';
            break;
        default:
            information = 'Information not available.';
            break;
    }

    return information;
}

function displayModal(content) {
    const modal = document.getElementById('myModal');
    const modalContent = document.getElementById('modalContent');

    // Set the content of the modal
    modalContent.innerHTML = content;

    // Display the modal
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

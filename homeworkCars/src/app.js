
let carsData;

let carApiService = {
    getData: async function (){
    try {
        let response = await fetch('https://raw.githubusercontent.com/anamihajlovska/Homework_AdvancedJS/main/cars.json');
        let data = await response.json();
        carsData = data;
        console.log(data);
        displayDataService.displayData();
    } catch (error) {
        console.log(`An error occurred`, error);
    }
}
}


let displayDataService = {
    displayData: function () {
        let table = document.getElementById("table");
        let tableHTML = `<table>
            <tr>
                <th>Type</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Doors</th>
                <th>Gas Type</th>
                <th>Color</th>
                <th>Is New</th>
                <th>Horsepower</th>
            </tr>`;
        
        carsData.forEach(car => {
            tableHTML += `
                <tr>
                    <td>${car.type}</td>
                    <td>${car.brand}</td>
                    <td>${car.model}</td>
                    <td>${car.doors}</td>
                    <td>${car.gasType}</td>
                    <td>${car.color}</td>
                    <td>${car.isNew}</td>
                    <td>${car.horsepower}</td>
                </tr>`;
        });

        tableHTML += `</table>`;
        table.innerHTML = tableHTML;
    }
}

let filterService = {
    filterData: function() {
        let type = document.getElementById("type").value;
        let brand = document.getElementById("brand").value;
        let model = document.getElementById("model").value.toLowerCase();
        let doors = document.getElementById("doors").value;
        let gasType = document.getElementById("gasType").value;
        let color = document.getElementById("color").value.toLowerCase();
        let newCheck = document.getElementById("new").checked;
        let oldCheck = document.getElementById("old").checked;
        let horsepower = document.getElementById("horsepower").value
        console.log(typeof doors)
        let filteredData = carsData.filter(car => {
            return (type === "" || type === car.type) &&
             (brand === "" || brand === car.brand) &&
             (model === "" || model === car.model.toLowerCase()) && 
             (doors === "" || +doors === car.doors) &&
             (gasType === "" || gasType === car.gasType) &&
             (color === "" || color === car.color.toLowerCase()) && 
             ((newCheck === car.isNew) || (oldCheck === !car.isNew)) &&
             (horsepower === "" || +horsepower === car.horsepower);
        })
        
       displayFilteredData(filteredData);
        

    }
}



    function displayFilteredData (filteredData){
    let table = document.getElementById("table");
    table.innerHTML = "";
    let tableHTML = `<table>
        <tr>
            <th>Type</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Doors</th>
            <th>Gas Type</th>
            <th>Color</th>
            <th>Is New</th>
            <th>Horsepower</th>
        </tr>`;
        console.log(filteredData)
            if(filteredData.length > 0){
               tableHTML += filteredData.map(car =>
                    `<tr>
                    <td>${car.type}</td>
                    <td>${car.brand}</td>
                    <td>${car.model}</td>
                    <td>${car.doors}</td>
                    <td>${car.gasType}</td>
                    <td>${car.color}</td>
                    <td>${car.isNew}</td>
                    <td>${car.horsepower}</td>
                </tr>`)
            } else{
            tableHTML += '<tr><td>NO DATA FOUND</td></tr>'
            }

        

        tableHTML += `</table>`;
        table.innerHTML = tableHTML;
        
        
        
}

carApiService.getData();

let search = document.getElementById("search");

search.addEventListener("click", function(event){
    event.preventDefault();
    filterService.filterData();
})


function resetTableData(){
    table.innerHTML = "";
    displayDataService.displayData();
}

function resetFilterInputs (id){
    id.forEach(id =>{
        let input = document.getElementById(id);
        if(input){
            input.value = "";
        }
        if(input){
            input.checked = "";
        }
    })
}

let resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", function(event){
    event.preventDefault();
    resetTableData()
    let categories = ["type", "brand", "model", "doors", "gasType", "color", "new", "old", "horsepower" ];
    resetFilterInputs(categories);
})







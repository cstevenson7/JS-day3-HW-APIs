function getJson()
{
    let season = document.querySelector("#season").value;
    let round = document.querySelector('#round').value;
    fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(rawData => {        

        for(let i = 0; i < 7; i++){
            console.log(i)
            let position = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position
            let position_text = document.querySelector('#position')
            position_text.innerHTML = position
            
            // let givenName = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
            // let givenName_text = document.querySelector('#givenName')
            // givenName_text.innerHTML = givenName
            // console.log(givenName_text)

            let familyName = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName
            let familyName_text = document.querySelector('#familyName')
            familyName_text.innerHTML = familyName
            console.log(familyName_text)

            let nationality = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality
            let nationality_text = document.querySelector('#nationality')
            nationality_text.innerHTML = nationality

            let sponsor = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;
            let sponsor_text = document.querySelector('#sponsor')
            sponsor_text.innerHTML = sponsor

            let points = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points
            let points_text = document.querySelector('#points')
            points_text.innerHTML = points
                      
        }

        // //use a for loop to the /top 7 F1 drivers
        
            for(let i = 0; i <7; i++){  
                // Get a reference to the table
                let tableRef = document.getElementById("#f1table");
                 // Insert a row at  index i
                let newRow = tableRef.insertRow(-1);

                // Insert a First new cell in the row at index 0 - POSITION
                let newCell1 = newRow.insertCell(0);
                // Append a text node to the cell
                let tbl_position = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position                
                let newText1 = document.createTextNode(tbl_position);
                newCell1.appendChild(newText1);

                // All other cells are added to the bottom fot the table (-1) - NAME
                let newCell2 = newRow.insertCell(-1);
                // Append a text node to the cell
                let tbl_givenName = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
                let tbl_lastname = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName 
                let fullName =  tbl_givenName + " " + tbl_lastname           
                let newText2 = document.createTextNode( fullName);
                newCell2.appendChild(newText2);



                // All other cells are added to the bottom fot the table (-1) - NATIONALITY
                let newCell3 = newRow.insertCell(-1);
                // Append a text node to the cell
                let tbl_nationality = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality    
                let newText3 = document.createTextNode(tbl_nationality);
                newCell3.appendChild(newText3);

                // All other cells are added to the bottom fot the table (-1) - SPONSOR
                let newCell4 = newRow.insertCell(-1);
                // Append a text node to the cell
                let constructors_name = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;          
                let newText4 = document.createTextNode( constructors_name );
                newCell4.appendChild(newText4);

                // All other cells are added to the bottom fot the table (-1) - POINTS
                let newCell5 = newRow.insertCell(-1);
                // Append a text node to the cell
                let tbl_points = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points        
                let newText5 = document.createTextNode( tbl_points);
                newCell5.appendChild(newText5);


             

        //     let tbl_name = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
        //     let display_name= document.createElement('tr')
        //     display_name.innerHTML = tbl_name
        //     document.body.append(display_name)


        //     let tbl_nationality = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality
        //     let display_nationality = document.createElement('tr')
        //     display_nationality.innerHTML = tbl_nationality
        //     document.body.append(display_nationality)


        //     let constructors_name = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;                                         
        //     let display_constructors = document.createElement('tr')
        //     display_constructors.innerHTML = constructors_name
        //     document.body.append(display_constructors)

        //     let tbl_points = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points
        //     let display_points = document.createElement('tr')
        //     display_points.innerHTML = tbl_points
        //     document.body.append(display_points)

        }
    
    })
}

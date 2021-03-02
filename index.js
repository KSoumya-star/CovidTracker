//https://api.covid19api.com/summary;

const gobutton = document.querySelector('#gobutton');


gobutton.addEventListener('click', async(eve) => {
  eve.preventDefault();
  const respdata = await getApiData();
  
  
  let countryData= respdata.Countries;
  // const country = respdata.Countries[0].country;
  // const newConfirmed = respCountries[0].NewConfirmed;
  // const totalConfirmed =  Countries[0].TotalConfirmed;
  // const totalDeaths =  Countries[0].TotalDeaths;
  // const newRecovered =  Countries[0].NewRecovered;
  // const totalRecovered =  Countries[0].TotalRecovered;

  //const cardHTML = createCardHtml(countryData) ;
 
  
  let cardCovid = '';
  console.log(countryData);
  for (let i = 0; i < countryData.length; i++) {
    cardCovid += createCardHtml(countryData[i]);
  }
  console.log(cardCovid);
  document.querySelector("#outputData").innerHTML = headerdata + cardCovid;
});

const getApiData = async () => {
  let url = 'https://api.covid19api.com/summary';
  console.log(url);
  let response = await fetch(url);
  let data = await response.json();
  return data;
  };

  const createCardHtml = (covidData) => `
  <tr>
          <td> ${covidData.Country}</td>
          <td> ${covidData.NewConfirmed}</td>
          <td>${covidData.TotalConfirmed}</td>
          <td>${covidData.TotalDeaths}</td>
          <td>${covidData.NewRecovered}</td>
          <td>${covidData.TotalRecovered}</td>
        </tr>
        `
        ;

  
        const headerdata= `
        <thead class=thead-dark>
            <tr>
              
              <th>Country</th>
              <th>NewConfirmed</th>
              <th>TotalConfirmed</th>
              <th>TotalDeaths</th>
              <th>NewRecovered</th>
              <th>TotalRecovered</th>

            </tr>
          </thead>`;
  
  
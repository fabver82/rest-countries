const getAllCountries = async ()=>{
    const reponse = await fetch('https://restcountries.com/v2/all');
    const datas = await reponse.json();
    console.log(datas);
}
const getCountryByName = async (name)=>{
    const reponse = await fetch(`https://restcountries.com/v2/name/${name}`);
    const datas = await reponse.json();
    return datas;
}
const countriesHtml = document.getElementById('countries');
const fillDatas = async (name)=>{
    let countries = await getCountryByName(name);
    console.log(countries);
    for (country of countries){
        countriesHtml.innerHTML += `
        <articles class="card">
            <picture class="card__flag"><img class="card__img" src="${country.flag}" alt="${country.name} flag"></picture>
            <h2 class="card__title">${country.name}</h2>
            <h3 class="card__population-header">Population:<span class="card__population-content">${country.population}</span> </h3>
            <h3 class="card__region-header">Region:<span class="card__region-content">${country.region}</span> </h3>
            <h3 class="card__capital-header">Capital:<span class="card__capital-content">${country.capital}</span> </h3>
        </articles>`
    }
}

const search = document.getElementById('submit-search');
const searchInput=document.getElementById('search-input');

search.addEventListener('click',async ()=>{
    countriesHtml.innerHTML = '';
    await fillDatas(searchInput.value);
})


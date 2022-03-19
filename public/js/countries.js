const getAllCountries = async ()=>{
    const reponse = await fetch('https://restcountries.com/v2/all');
    const datas = await reponse.json();
    return datas
}
const getCountryByName = async (name)=>{
    const reponse = await fetch(`https://restcountries.com/v2/name/${name}`);
    const datas = await reponse.json();
    return datas;
}

const fillDatas = async (name='All',region='')=>{
    let countries;
    if (name=='All' || name==''){
        countries = await getAllCountries();
    }else{
        countries = await getCountryByName(name);
    }
    // console.log(countries);
    countriesHtml.innerHTML = '';
    for (country of countries){
        if (region!=='' && region==country.region){
            countriesHtml.innerHTML += `
        <articles class="card">
            <picture class="card__flag"><img class="card__img" src="${country.flag}" alt="${country.name} flag"></picture>
            <h2 class="card__title">${country.name}</h2>
            <h3 class="card__population-header">Population:<span class="card__population-content">${country.population}</span> </h3>
            <h3 class="card__region-header">Region:<span class="card__region-content">${country.region}</span> </h3>
            <h3 class="card__capital-header">Capital:<span class="card__capital-content">${country.capital}</span> </h3>
        </articles>`
        }
        if (region==''){
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
}
const countriesHtml = document.getElementById('countries');
const search = document.getElementById('submit-search');
const searchInput=document.getElementById('search-input');
searchInput.addEventListener('keyup',async ()=>{
    let region = document.getElementById('dropdown').textContent;
    console.log(region);
    if (region=='Filter by Region'){
        console.log('ok')
        await fillDatas(searchInput.value);
    }else{
        await fillDatas(searchInput.value,region);
    } 
})
window.onload = async()=>{
    await fillDatas();
}






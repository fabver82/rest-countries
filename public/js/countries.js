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
const fillTemplate= (country,template,elParent)=>{
    let pop = country.population.toLocaleString();

    const clone = document.importNode(template.content, true);
    let card = clone.querySelector('.card');
    let cardImage = clone.querySelector('.card__img');
    let cardTitle = clone.querySelector('.card__title');
    let cardPopulation = clone.querySelector('.card__population-content');
    let cardRegion = clone.querySelector('.card__region-content');
    let cardCapital = clone.querySelector('.card__capital-content');
    cardImage.src=country.flag;
    cardTitle.textContent = country.title;
    cardPopulation.textContent = pop;
    cardRegion.textContent = country.region;
    cardCapital.textContent = country.capital;
    card.addEventListener('click',()=>{
        window.location.href=`./details.html?name=${country.id}`;
    })
    elParent.append(clone);
//     return `<articles id="card" data-country="${country.name}" class="card">
//     <picture class="card__flag"><img class="card__img" src="${country.flag}" alt="${country.name} flag"></picture>
//     <h2 class="card__title">${country.name}</h2>
//     <h3 class="card__population-header">Population:<span class="card__population-content">${pop}</span> </h3>
//     <h3 class="card__region-header">Region:<span class="card__region-content">${country.region}</span> </h3>
//     <h3 class="card__capital-header">Capital:<span class="card__capital-content">${country.capital}</span> </h3>
// </articles>`
}
const filterDatas = async (name='All',region='')=>{
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
            fillTemplate(country,template,countriesHtml);
        
        }
        if (region==''){
            fillTemplate(country,template,countriesHtml);
        }
    }
}
const template = document.getElementById('card-template');
const countriesHtml = document.getElementById('countries');
const search = document.getElementById('submit-search');
const searchInput=document.getElementById('search-input');
searchInput.addEventListener('keyup',async ()=>{
    let region = document.getElementById('dropdown').textContent;
    if (region=='Filter by Region '){
        console.log('ok')
        await filterDatas(searchInput.value);
    }else{
        await filterDatas(searchInput.value,region);
    } 
})
window.onload = async()=>{
    await filterDatas();
}






//get a parameter from an url
const getParamFromUrl = (param)=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
  }

const getCountryByName = async (name)=>{
    const reponse = await fetch(`https://restcountries.com/v2/name/${name}`);
    const datas = await reponse.json();
    return datas[0];
}
const getCountryByCode = async (code)=>{
    const reponse = await fetch(`https://restcountries.com/v2/alpha/${code}`);
    const datas = await reponse.json();
    return datas;
}

const fillDatas = async (name)=>{
    const country = await getCountryByName(name);
    console.log(country)
    document.querySelector('.card__img').src=country.flag;
    document.querySelector('.country-details__name').textContent=country.name;
    document.querySelector('.country-details__native-content').textContent = country.nativeName;
    document.querySelector('.country-details__population-content').textContent = country.population.toLocaleString();
    document.querySelector('.country-details__region-content').textContent = country.region;
    document.querySelector('.country-details__subregion-content').textContent = country.subregion;
    document.querySelector('.country-details__capital-content').textContent = country.capital;
    document.querySelector('.country-details__domain-content').textContent = country.topLevelDomain.toString();
    document.querySelector('.country-details__currencies-content').textContent = toArray(country.currencies).toString();
    document.querySelector('.country-details__languages-content').textContent = toArray(country.languages).toString();
    
    let borderList = document.querySelector('.borders__list')
    fillBorders(borderList,country)
    
    
}

async function fillBorders(container,country){
    for (borderCode of country.borders){
        let borderCountry = await getCountryByCode(borderCode)
        console.log(borderCountry);
        let list = document.createElement('li');
        list.classList.add('borders__item');
        let link = document.createElement('a')
        link.classList.add('borders__link');
        link.textContent=borderCountry.name;
        link.href=`./details.html?name=${borderCountry.name}`
        list.appendChild(link)
        container.appendChild(list)
    }
    console.log(container);
}
function toArray(array){
    let ar=[];
    for (el of array){
        ar.push(el.name)
    }
    return ar;
}

fillDatas(getParamFromUrl('name'))
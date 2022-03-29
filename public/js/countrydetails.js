//get a parameter from an url
const getParamFromUrl = (param)=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
  }

const getCountryByName = async (name)=>{
    const reponse = await fetch(`https://restcountries.com/v2/name/${name}`);
    const datas = await reponse.json();
    return datas;
}

const country = getCountryByName(getParamFromUrl('name'));
console.log(country);
const amountElement=document.getElementById("amount");
const firstSelect=document.getElementById("firstCurrency");
const secondSelect=document.getElementById("secondCurrency");
const cevirbtn=document.getElementById("btn-cevir");
const outputFirst=document.getElementById("outputFirst");
const outputSecond=document.getElementById("outputSecond");
const outputResult=document.getElementById("outputResult");



cevirbtn.addEventListener("click",()=>{
const amount=Number(amountElement.value) ;
const from=firstSelect.options[firstSelect.selectedIndex].textContent;
const to=secondSelect.options[secondSelect.selectedIndex].textContent;

outputFirst.textContent=from;
outputSecond.textContent=to;


    var myHeaders = new Headers();
    myHeaders.append("apikey", "Luw143VOqPD2TbJl2nvI2qtmAGbc4hSM");
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    
    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
      .then(response => response.json())
        .then(data => outputResult.value=data.result )
      .catch(error => console.log('error', error));
    
})








var inputBuyingPriceRef = document.querySelector("#input-buying-price");
var inputNoOfStockRef = document.querySelector("#input-number-shares");
var inputCurrentPriceRef = document.querySelector("#input-current-price");
var btnRef = document.querySelector("#btn-calculate");
btnRef.addEventListener("click", clickHandler);

var divOutputRef = document.querySelector("#div-output");

function clickHandler() {
  var buyingPrice = inputBuyingPriceRef.value;
  var noOfStocks = inputNoOfStockRef.value;
  var currentPrice = inputCurrentPriceRef.value;

  var profitPerShare = currentPrice - buyingPrice;
  console.log("profitPerShare:", profitPerShare);

  calculate(profitPerShare, noOfStocks);
}

function calculate(profitPerShare, noOfStocks) {
  var netPrice = profitPerShare * noOfStocks;

  if (netPrice === 0) {
    divOutputRef.innerText = netPrice + " No pain no gain, No gain no pain";
  }
  if (netPrice > 0) {
    divOutputRef.innerText = "Yay!! your Profit is " + netPrice;
  }
  if (netPrice < 0) {
    divOutputRef.innerText = "Your Loss is " + netPrice;
  }
}

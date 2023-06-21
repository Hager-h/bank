

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, 
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2023-02-03T23:36:17.929Z",
    "2023-02-04T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};










const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,


  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "ar-Sy",





};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,


  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",



};
const accounts = [account1, account2,account3,account4];


let dataa = document.querySelector(".data");

let palance = document.querySelector(".palance p");

let income = document.querySelector(".colo-1");
let output = document.querySelector(".colo-2");
let interest = document.querySelector(".col");
let showMove = document.querySelector(".partOne");
let message = document.querySelector(".hello p");
let inpUser = document.querySelector(".user");
let pinUser = document.querySelector(".pin");
let btnLogin = document.querySelector(".first-span");
let project = document.querySelector(".proj");

let transferto = document.querySelector(".inpTrans");
let amount = document.querySelector(".amoTrans");
let transClick = document.querySelector(".icoTrans");
let deleteUser = document.querySelector(".co-user");
let deletePin = document.querySelector(".co-pin");
let deleteIco = document.querySelector(".co-icon");
// الخاص  باللوان
let loanIcon = document.querySelector(".loan-icon");
let loanAmount = document.querySelector(".loan");


//التاريخ

let dateOnHtml=document.querySelector(".date-one")
let date=document.querySelector("#text")
let timerCount=document.querySelector(".timer-count")


let timer=function(){
let time=120

let tik=function(){

  let min=String(Math.trunc(time/60)).padStart(2,0)
let sec=String(Math.trunc((time%60))).padStart(2,0)

timerCount.textContent=`${min}:${sec} `
if(time===0){
  clearInterval(counter);
  project.style.opacity="0"
message.textContent=` Log in to get started      `

}
--time 
}

tik()
 counter=setInterval(tik,1000)

return counter




}



function updateUi(acco){



displayMovement(acco);

showBlance(acco);
inc(acco);


}


let formatcurrency=function(value,locall,currenc){
return new Intl.NumberFormat(locall,{
  style:"currency",
  currency:currenc,
}).format(value)

}




let formateDate=function(datee,loca){

  let calcDay=((date1,date2)=>Math.round(Math.abs(date1-date2)/(1000*60*60*24)))
 let dayPassed=calcDay(new Date(), datee)
 if (dayPassed===0) return "Today"
 if (dayPassed===1) return "Yestrday"
 if (dayPassed<=7) return `${dayPassed} days ago`
 else{

  
  
  
return Intl.DateTimeFormat(loca).format(datee)




 }




}










let displayMovement = function(acc,sort=false) {



  const movs= sort?(acc.movements).slice().sort((a,b)=>a-b):(acc.movements)
// show movements
  showMove.textContent = "";
  movs.forEach((mov, i) => {

let datee=new Date(acc.movementsDates[i])

let displayDate=formateDate(datee,acc.locale)

    let type = mov > 0 ? "DEPOSIT" : "WITHDRAWL";

    let  formateCurre =formatcurrency(mov,acc.locale,acc.currency)


    let html = `
<div class="one">
     <div class="depo">
         <p  class=" ${type}"> ${i + 1} ${type}
              </p>

             <span class="date-one" >${displayDate }  </span>

     </div>
     <div class="sec">
         <p> ${formateCurre}
 </p>
     </div>

</div>
`;
    showMove.insertAdjacentHTML("afterbegin", html);
  });
};
// حساب الرصيد الكلى فوق

let showBlance = function (account) {
  let balan = account.movements.reduce(function (ac, cur) {
    return ac + cur;
  });
  // ضفت كى جديد فى الاوبجكت للرصيد عشان هستعمله فى المقارنه وانا بنقل الفلوس
account.balancee=balan
  palance.textContent = formatcurrency(account.balancee,account.locale,account.currency)
  ;
};
// حساب كل الرصيد اللى تحت
let inc = function (account) {
  let inco = account.movements.filter((mov) => mov > 0).reduce((acc, cur) => acc + cur, 0);
  income.textContent = ` ${formatcurrency(inco,account.locale,account.currency)}`

  
  //حساب الاوتبت
  let out = account.movements.filter((mov) => mov < 0).reduce((acc, cur) => acc + cur, 0);
  output.textContent = ` ${formatcurrency(Math.abs(out),account.locale,account.currency)}`

  

  let intr = account.movements
    .filter((mov) => mov > 0)
    .map((mo) => (mo * account.interestRate) / 100)
    .filter((ele) => ele > 1)
    .reduce((acc, cur) => acc + cur);
  interest.textContent= ` ${formatcurrency(intr,account.locale,account.currency)}`

  
};
let showNmame = function (accs) {
  accs.forEach(function (acc) {
    acc.user = acc.owner
      .toLowerCase()
      .split(" ")
      .map((mov) => mov[0])
      .join("");
  });
};
showNmame(accounts);

let counter

let currentAccount
btnLogin.addEventListener("click",function(e){

e.preventDefault()





currentAccount=accounts.find((acc)=>acc.user===inpUser.value)

if(currentAccount?.pin===Number(pinUser.value)){



let useName=currentAccount.owner.split(" ")[0]

message.textContent=` Welcom back, ${useName}`
 project.style.opacity="100"
 inpUser.value=pinUser.value=""
 dataa.style.display="none"

}else{
dataa.style.display="block"
project.style.opacity="0"
message.textContent=` Log in to get started      `

inpUser.value=pinUser.value=""
}
if(counter) clearInterval(counter)

counter=timer()
updateUi(currentAccount)


//التاريخ اللى فوق خالص
let now=new Date()
// (en ,Us)بياحد الغة من المتصفح كانى بكتب 
// let locale=navigator.language

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "numeric",
  year: "numeric",
    // weekday: 'short',
}

date.textContent= `As of ${new Intl.DateTimeFormat(currentAccount.locale,options).format(now)}`








})
// نقل الرصيد Transfer
transClick.addEventListener("click",function(e){
  e.preventDefault()
let money=Number(amount.value)
let receiverAcc=accounts.find((acc)=>acc.user===transferto.value)


if(money>0&&money<=currentAccount.balancee&&receiverAcc&&receiverAcc?.user!==currentAccount.user){
currentAccount.movements.push(-money)
receiverAcc.movements.push(money)



//نقل التاريح للمصفوفة بتاعتة
currentAccount.movementsDates.push(new Date().toISOString())
receiverAcc.movementsDates.push(new Date().toISOString())



updateUi(currentAccount)

}

//بعمل ريست للكاونتر لما انقل بيانات او لون يعد من اول
clearInterval(counter)
counter=timer()

amount.value=transferto.value=""
})
//  للاااكونت المسح

deleteIco.addEventListener("click",function(e){
  e.preventDefault()


if(deleteUser.value===currentAccount.user&&Number(deletePin.value)===currentAccount.pin){

  accounts.splice  ( accounts.findIndex(acc=>acc.user===deleteUser.value),1)
 
message.textContent=` Log in to get started`
project.style.opacity="0"
}




})
// الخاص باللوان
loanIcon.addEventListener("click",function(e){
  e.preventDefault()
  loaNum=Math.floor((loanAmount.value))
if(loaNum> 0&&currentAccount.movements.some(acc=>acc>=loaNum*0.1))
{
  // عشان قيمة اللى فى لون اللى بحولها لحسابى تظهر بعد مدة متظهرش علطول
  setTimeout(function(){

currentAccount.movementsDates.push(new Date().toISOString())



currentAccount.movements.push(loaNum)
updateUi(currentAccount)
},2500)
}

loanAmount.value=""

//بعمل ريست للكاونتر لما انقل بيانات او لون يعد من اول
clearInterval(counter)
counter=timer()
})



// لما اضغط على زرار السورت
let sorted=false
let sortBtn=document.querySelector(".sort")
sortBtn.addEventListener("click",function(e){
  e.preventDefault()
sorted=!sorted
displayMovement(currentAccount,!sorted)

})



// let day=`${now.getDate()}`.padStart(2,0)
// let year=`${now.getFullYear()}`.padStart(2,0)
// let month=`${now.getMonth()+1}`.padStart(2,0)
// let hours=`${now.getHours()}`.padStart(2,0)
// let minuit=`${now.getMinutes()}`.padStart(2,0)
// date.textContent=` As of ${day}/${month}/${year} ${hours}:${minuit}`

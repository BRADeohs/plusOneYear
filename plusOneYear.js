class MyDate extends Date {
  addDays(days) {
    var date = new MyDate(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }
}

 for (let i = 2; i < 9; i++) {
  let s = "body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(3) > tbody > tr:nth-child(" + i + ") > td:nth-child(1) > strong";
  let ti = document.querySelector(s)
  dM(ti);
}
var qi = document.querySelector("body > div > div > table.message > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div:nth-child(1) > font > div > div > div:nth-child(4) > table > tbody > tr > td > table:nth-child(1) > tbody > tr > td:nth-child(2) > strong");
eM(qi);

function dM(select) {
  let tii = select.innerHTML.split(' ');
  let tdi = new MyDate(tii[1]);
  let nextYear = tdi.addDays(364);
  let yyyy = nextYear.getFullYear();
  let mm = nextYear.getMonth() + 1;
  let dd = nextYear.getDate();
  let fin = tii[0] + ' ' + mm + '/' + dd + '/' + yyyy;
  select.innerHTML = fin;   
}

function eM(select) {
  let tii = select.innerHTML.split(' - ');
  let tdi = new MyDate(tii[1]);
  let nextYear = tdi.addDays(364);
  let fDate = nextYear.toLocaleString('en-US', { dateStyle: 'long' });
  let fin = tii[0] + ' - ' + fDate;
  select.innerHTML = fin;   
}

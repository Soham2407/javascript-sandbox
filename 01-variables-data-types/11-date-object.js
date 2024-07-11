let x;

let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth(); // month is 0 based

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;

x = Intl.DateTimeFormat("in").format(d);
x = Intl.DateTimeFormat("default", {
  month: "short",
  year: "numeric",
  day: "numeric",
}).format(d);

x = d.toLocaleString("en-IN", {
  dateStyle: "medium",
  timeStyle: "long",
});

console.log(x);

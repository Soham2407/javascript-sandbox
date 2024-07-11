let d;

d = new Date();

d = d.toDateString();

d = new Date(2025, 6, 23, 12, 30, 0);

d = new Date("2021-07-20T12:30:00");

d = new Date("2021/07/20");

d = Date.now();

d = new Date("2024-07-16 12:30:00");

d = d.getTime();

d = d.valueOf();

d = new Date(1721113200000);

// miliseconds to seconds
d = Math.floor(Date.now() / 1000);

console.log(d);

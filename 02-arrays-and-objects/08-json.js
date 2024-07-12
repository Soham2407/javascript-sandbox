const posts = [
  { id: 1, title: "post 1", body: "this is an post body" },
  { id: 2, title: "post 2", body: "this is an post body" },
  { id: 3, title: "post 3", body: "this is an post body" },
];

// convert into json
const jsonString = JSON.stringify(posts);

// convert json into object
const obj = JSON.parse(jsonString);

console.log(obj);

# Personal Library

[femto-personal-library](https://femto-private-library.herokuapp.com/) is a REST API that partially implements CRUD. It keeps track of the books in a personal library and the number of comment each book has. The project idea was gotten from [freeCodeCamp](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/metric-imperial-converter).

---

### Resources

There are 6 main resources

- Create a book <https://femto-private-library.herokuapp.com/api/books>
- Get all books <https://femto-private-library.herokuapp.com/api/books>
- Delete all books <https://femto-private-library.herokuapp.com/api/books>
- Get a single book <https://femto-private-library.herokuapp.com/api/books/:_id>
- Create a comment for a book <https://femto-private-library.herokuapp.com/api/books/:_id>
- Delete a Single book and all its associated comments <https://femto-private-library.herokuapp.com/api/books/:_id>

---

### How to

you can fetch data with any kind of methods you know(fetch API, Axios, jquery ajax,...)

---

### Create a book

```js
fetch("https://femto-private-library.herokuapp.com/api/books", {
  method: "POST",
  body: JSON.stringify({
    title: "new book",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));
/* will return
{
 _id: mongoose.id,
 title:'new book',
}

If the title is missing from the request body, a 400 error is returned with the following json object
{
  error: `missing required field title`
}

If the book already exists in the database, a 400 error is returned with the following json object
{
  error: `new book already exists
}
*/
```

---

### Get all books

```js
fetch("https://femto-private-library.herokuapp.com/api/books")
  .then((res) => res.json())
  .then((json) => console.log(json));
/*
  will return 
[
    {
        "_id": "test id 1",
        "title": "new book 1",
        "commentCount": 0
    },
    {
        "_id": "test id 2",
        "title": "new book 2",
        "commentCount": 0
    },
    {
        "_id": "test id 3",
        "title": "new book 3",
        "commentCount": 0
    }
]
  */
```

---

### Delete all books

```js
fetch("https://femto-private-library.herokuapp.com/api/books", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((json) => console.log(json));
/*
  will return 
{
  msg: "deleted successfully"
}
  */
```

---

### Get a single book

```js
fetch("https://femto-private-library.herokuapp.com/api/books/:_id")
  .then((res) => res.json())
  .then((json) => console.log(json));
/*
  will return 
{
 "title": "sample book",
 "_id": "sample book id",
 "commentCount": 2,
 "comments": [foo, bar]
}

If no book with the _id passed into the query exists, a 404 error is returned with the following json object 
{
  error: "no book with id sample book id
}
  */
```

---

### Add a comment to a book

```js
fetch("https://femto-private-library.herokuapp.com/api/books/:_id", {
  method: "POST",
  body: JSON.stringify({
    comment: "new comment",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));
/*
  will return 
{
 "title": "sample book",
 "_id": "sample book id",
 "commentCount": 3,
 "comments": [foo, bar, new comment]
}

If the comment field in the request query is empty or contains an invalid value, a 400 error is returned with the following json object
{
  error: "missing required field comment"
}

If no book with the _id passed into the query exists, a 404 error is returned with the following json object 
{
  error: "no book with id sample book id
}
  */
```

---

### Delete a single book

```js
fetch("https://femto-private-library.herokuapp.com/api/books/:_id", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((json) => console.log(json));
/*
  will return 
{
  result: "successfully deleted, _id: _id"
}

If no book with the _id passed into the query exists, a 404 error is returned with the following json object 
{
  error: "no book with id sample book id
}
  */
```

---

### Feedback!!

I'd love your feedback on the API. You can reach me via [email](mailto:chinaemerema@gmail.com) or give me a shout out on [twitter](https://twitter.com/femto_ace?t=nk6ylNm1Zp2l0yiJkCKFeA&s=09)

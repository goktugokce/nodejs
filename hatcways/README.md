# Backend Assessment - Blog Posts

**API Description:** Backend JSON API for returning posts related to given tags. If more than one tag is specified, API will return intersects of the responses. API also has caching which lasts 5 minutes with npm module ```apicache```.

**To start the app run the following commands:**

```text
  npm install
  npm start
 ```

**To test the app run the following command:**

```text
  npm test
 ```

**API constraints:**  

- tags parameter must be given to endpoint as query parmameter. 

**API Path:**

```text
  [GET] /api/posts
 ```

**Responses:**

- Status Code: 200
- Body Message:

```json
{
  status: 200,
  body: {
    "posts": [{
      "id":1,
      "author":"Rylee Paul",
      "authorId":9,
      "likes":960,
      "popularity":0.13,
      "reads":50361,
      "tags": ["tech","health"]
    },
      ...
    ]
  }
}
```

## Fail Cases

- ### Fail case: If query paramater tags is missing 

  Responses:
  - Status Code: 400
  - Body Message:

```json
{
  status: 400,
  body: {
      "error":"Tags parameter is required"
  }
}
```

- ### Fail case: If tags query paramater is incorrect 

  Responses:
  - Status Code: 400
  - Body Message:

```json
{
  status: 404,
  body: { "error": "Cannot found any post related to the tag"}
}
```

- ### Fail case: If sortBy query paramater is incorrect 

  Responses:
  - Status Code: 400
  - Body Message:

```json
{
  status: 404,
  body: { "error": "sortBy parameter is invalid"}
}
```

- ### Fail case: If direction query paramater is incorrect 

  Responses:
  - Status Code: 400
  - Body Message:

```json
{
  status: 404,
  body: { "error": "direction parameter is invalid"}
}
```

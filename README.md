# indexes.do
Durable Object Data Indexing Service

```
{
  Categories: [
    {
      "entityId": 2,
      "description": "Sweet and savory sauces, relishes, spreads, and seasonings",
      "categoryName": "Condiments"
    }
  ]
}
```

the indexes are created as:

```
{
  "Categories.entityId:000000000001": "https://database.do/Categories/1",
  "Categories.description:Sweet and savory sauces, relishes, spreads, and seasonings": "https://database.do/Categories/1",
  "Categories.categoryName:Condiments": "https://database.do/Categories/1"
}
```

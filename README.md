# indexes.do
Durable Object Data Indexing Service

<http://indexes.do/json.path.do/$.data/wikis.do/Porsche>

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
  "Categories.entityId: 000000000001 -> Categories/1": "https://database.do/Categories/1",
  "Categories.description: Sweet and savory sauces, relishes, spreads, and seasonings -> Categories/1": "https://database.do/Categories/1",
  "Categories.categoryName: Condiments -> Categories/1": "https://database.do/Categories/1"
}
```

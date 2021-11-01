# MERN_Reta


## API Document : 
- http://localhost:5000/api-docs/#/

## Documentation MongoDB :

### Import/Export:

Depuis le dossier de mongodb (C:\Program Files\MongoDB\Server\5.0\bin) :

>- MongoDump :
>>``mongodump --uri "mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample_supplies"``
>
>- MongoExport :
>>``mongoexport --uri="mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample_supplies" --collection=sales --out=sales.json``
>
>- MongoRestore :
>>``mongorestore --uri "mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample_supplies"  --drop dump``
>
>- MongoImport :
>>``mongoimport --uri="mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/sample_supplies" --drop sales.json``
>
>**Exemple :** mongorestore C:\Users\Chloe\Downloads\dump


## Documentation Mongoose :

- Emploie de **.limit()** pour le nombre de retour maximum de la commande :

>``
>ProductModel.find({}, (err, docs) => {
>        if (!err) {
>            res.send(docs);
>        } else {
>            console.log('Error to get data: ' + err);
>        }
>    }).limit(5);
>``


## External API

- Open Food Fact (Item = +800 000 products): https://fr.openfoodfacts.org/data 
- Yummly (Recipe): https://developer.yummly.com/documentation.html
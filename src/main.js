const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task1";
mongoClient.connect(connectionUrl, (error, result) => {
  if (error) {
    return console.log("there is am error");
  } else console.log("Done");

  ///
  const db = result.db(databaseName);

  // insert two documents into the users collection
  insertOne;
  db.collection("users").insertOne(
    {
      name: "Rahaf",
      age: 21,
    },
    (error, result) => {
      if (error) console.log("there is an error");
      else console.log(result.insertedId);
    }
  );

  db.collection("users").insertOne(
    {
      name: "Amin",
      age: 32,
    },
    (error, result) => {
      if (error) console.log("there is an error");
      else console.log(result.insertedId);
    }
  );

  // insertMany (10 documents)
  db.collection("users").insertMany(
    [
      {
        name: "Talia",
        age: 27,
      },
      {
        name: "shrouk",
        age: 27,
      },
      {
        name: "Roaa",
        age: 27,
      },
      {
        name: "Alyaa",
        age: 27,
      },
      {
        name: "Mohammed",
        age: 27,
      },
      {
        name: "Osama",
        age: 30,
      },
      {
        name: "Hamada",
        age: 40,
      },
      {
        name: "Amina",
        age: 35,
      },
      {
        name: "Esraa",
        age: 33,
      },
      {
        name: "Mahmoud",
        age: 37,
      },
    ],
    (err, result) => {
      if (err) console.log("there is an error");
      else console.log(result.insertedCount);
    }
  );

  //find all that have 27y
  db.collection("users")
    .find({ age: 27 })
    .toArray((error, userData) => {
      if (error) return console.log("there is an error");
      else console.log(userData);
    });

  //limit them by 3
  db.collection("users")
    .find({ age: 27 })
    .limit(3)
    .toArray((error, userData) => {
      if (error) return console.log("there is an error");
      else console.log(userData);
    });

  // updateOne for name for first 4 documents
  db.collection("users").updateOne(
    {
      _id: mongodb.ObjectId("66b16d690d52b48db51d4af0"),
    },
    {
      $set: { name: "Rofa" },
    }
  );

  db.collection("users").updateOne(
    {
      _id: mongodb.ObjectId("66b16d690d52b48db51d4af2"),
    },
    {
      $set: { name: "shrouk" },
    }
  );

  db.collection("users").updateOne(
    {
      _id: mongodb.ObjectId("66b16d690d52b48db51d4af3"),
    },
    {
      $set: { name: "Talia" },
    }
  );

  db.collection("users").updateOne(
    {
      _id: mongodb.ObjectId("66b16d690d52b48db51d4af4"),
    },
    {
      $set: { name: "laila" },
    }
  );

  // updateOne for age for first persons that have 27y

  db.collection("users").updateOne(
    {
      _id: mongodb.ObjectId("66b16d690d52b48db51d4af2"),
    },
    {
      $inc: { age: 4 },
    }
  );

  db.collection("users").updateOne(
    {
      _id: mongodb.ObjectId("66b16d690d52b48db51d4af3"),
    },
    {
      $inc: { age: 4 },
    }
  );

  db.collection("users").updateOne(
    {
      _id: mongodb.ObjectId("66b16d690d52b48db51d4af4"),
    },
    {
      $inc: { age: 4 },
    }
  );

  db.collection("users").updateOne(
    {
      _id: mongodb.ObjectId("66b16d690d52b48db51d4af5"),
    },
    {
      $inc: { age: 4 },
    }
  );

  // updateMany for all by 10y

  db.collection("users").updateMany(
    {},
    {
      $inc: { age: 10 },
    }
  );

  db.collection("users")
    .deleteMany({ age: 41 })
    .then((data) => {
      console.log(data.deletedCount);
    })
    .catch((e) => {
      console.log(e);
    });
});

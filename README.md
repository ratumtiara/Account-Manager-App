This is a project about Account Manager App.
created by team 3 (Dimas, Ikhsa, Ratu) for assignment 3

This project using:
1. Express.js (framework backend)
2. EJS (view engine)
3. PostgreSQL (database)
4. ORM menggunakan sequelize
5. Bcrypt (enkripsi password)
6. JWT (buat system mock-login)


DATABASE:

Database name:-

tabel's name: user

Colomn :
1. id {PK, unique}
2. firstName {string, not null}
3. lastName {string, not null?}
4. phoneNumber {Bigint, not null, unique}
5. position {string, (front-end,backend,designer,devOps)}
6.password {String}


CRUD Backend:

1. Create
  endpoint create account with method POST (localhost:3000/user/createuser)
  respon:
  {
            status: 201,
            message: "User created",
            data: {data user yang dibuat}
        }

2. Read 
  * getAll
  endpoint get all user data from database with method GET
  (localhost:3000/user/getall)
  respon:
  {
            status: 200,
            message: "fetch all user success"
            data: [{data1}, {data2}, {dataN}] (array of object)
            }
  * getOne
        endpoint to retrieve one of the User data in the database with the GET method using params like "localhost:3000/user/getone/:id"
        Response:
            {
            status: 200,
            message: "fetch user success"
            data: {data user}
            }

3. Update
  endpoint to update data from a User using params with method PUT
  (localhost:3000/user/updateOne/:id)
  respon:
 {
            status: 200,
            message: "update success",
            data: {data user yang baru terupdate}
        }

4. Delete
  endpoint to delete User use params with method DELETE
  ("localhost:3000/user/deleteuser/:id")
  respon:
  
        {
            status: 200,
            message: "delete success"

        }
        
ADDITIONAL:
Error handler
error handler to check the completeness of the data sent on the request.
response error:
    {
        status: <error status code>,
        message: <error message>
    }

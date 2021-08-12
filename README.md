# Account-Manager-App
Ini adalah tugas kelompok yang terdiri dari 3 orang per kelompok.
Account Manager App adalah sebuah aplikasi web untuk management akun, menggunakan express.js sebagai framework backend dan memanfaatkan
EJS untuk View Engine nya, untuk database menggunakan PostgreSQL namun kita akan menggunakan ORM Sequelize juga.

Pada database memiliki table bernama "User" dengan column-column berikut:
    - id
        Digunakan sebagai Primary Key
    - firstName (String)
        Nama depan dari si pemilik akun
    - lastName (String)
        Nama belakang dari si pemilik akun
    - email (String)
        Email dari si pemilik akun
    - phoneNumber (number)
       Nomor telpon dari si pemilik akun
    - position (String)
        Posisi si pemilik akun dalam sebuah project, namun hanya bisa memilih salah satu dari pilihan berikut: [front-end, back-end, designer, devOps]
    - password (String)
        Password dari akun yang dibuat nanti

Pada backend, buatlah Create, Read, Update, dan Delete (CRUD) untuk table User dengan ketentuan berikut:
    - Create
        Buatlah endpoint untuk membuat akun dengan method POST seperti "localhost:3000/user/createuser".
        Response:
        {
            status: 201,
            message: "User created",
            data: {data user yang dibuat}
        }

    - Read        * getAll
        Buatlah endpoint untuk mengambil seluruh data User yang ada di database dengan method GET seperti "localhost:3000/user/getall"
        Response:
            {
            status: 200,
            message: "fetch all user success"
            data: [{data1}, {data2}, {dataN}] (array of object)
            }
        * getOne
        Buatlah endpoint untuk mengambil salah satu data User yang ada di database dengan method GET menggunakan params seperti "localhost:3000/user/getone/:id"
        Response:
            {
            status: 200,
            message: "fetch user success"
            data: {data user}
            }
    - Update
        Buatlah endpoint untuk meng-update data dari suatu User menggunakan params dengan method PUT seperti "localhost:3000/user/updateOne/:id"
        Response:
        {
            status: 200,
            message: "update success",
            data: {data user yang baru terupdate}
        }
    - Delete
        Buatlah endpoint untuk men-delete User menggunakan params dengan method DELETE seperti "localhost:3000/user/deleteuser/:id"
        Response:
        {
            status: 200,
            message: "delete success"

        }
Buatlah error handler untuk melakukan pengecekan atas kelengkapan data yang dikirim pada request.
Jika data kurang lengkap, maka kirimkan response error seperti:
    {
        status: <error status code>,
        message: <error message>
    }


Ketentuan:


    - Endpoint "localhost:3000/" digunakan untuk menampilkan file ejs, file ini akan berisi fitur-fitur untuk memanggil endpoint-endpoint diatas
    - Tampilkan response dari server di file ejs, desain maupun cara menampilkan nya bebas, buat yang rapih yaa

Bonus (opsional):
    - manfaatkan Bcrypt untuk enkripsi password.
    - buatlah sistem mock-login untuk mengetest akun-akun yang telah dibuat dengan memanfaatkan JWT.

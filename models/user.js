'use strict';
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    checkPassword= password => bcrypt.compareSync(password, this.password)

    generateToken = () =>{
      const payload ={
        id: this.id,
        name:this.email
      }

      const rahasia ="ini rahasia";
      const token = jwt.sign(payload, rahasia);
      return token;
    }
    static authenticate = async ({email, password}) => {
      try {
        //lakukan pengecekan, ada gak sih usernya?
        const user = await this.findOne ({where: {email:email}})
        if (!user) return Promise.reject("user not found!")

        const isPasswordVallid = user.checkPassword(password)
        if (!isPasswordVallid) return Promise.reject ("Wrong Passsword")

        return Promise.resolve(user)
      } catch (err){
        return Promise.reject(err)
      }
    };

  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.BIGINT,
    position: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: async (user) => {
        console.log('Encrypting password...')
        user.password = await bcrypt.hash(user.password, saltRounds)
      },
      afterCreate: async (user) => {
        console.log('Create Success!')
      },
      beforeBulkCreate: async(user) => {
        user.password = await bcrypt.hash(user.password, saltRounds)
      }
    }
  
  });
  return User;
};
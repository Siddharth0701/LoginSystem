import * as express from '@types/express';
/// <reference path="express" />
const db=require('../util/database');
module.exports=class user{
  constructor (name,email,password)  {
    this.name=name;
    this.email=email;
    this.password=password;
  }
  static find (email){
    return db.execute(
        'SELECT * FROM post."users" where email=?',[email]
    )
  }
  static save(user){
    return db.execute(
        'INSERT INTO posts."users"("name","email","password") VALUES(?,?,?)',[user.name,user.email,user.password]
    )
  }
  };

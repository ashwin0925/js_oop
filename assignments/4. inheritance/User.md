# Inheritance

User
  -properties
    -name
    -score
  -methods
    -increaseScroe: returns score increased by 1
    -decreaseScore: returna score decreased by 1

PaidUser
  -properties
    -name
    -score
    -balance
  -methods
    -increaseScroe: returns score increased by 1
    -decreaseScore: returna score decreased by 1
    -increaseBalance: returna balance decreased by 1

Using Inheritance convert the above into following patterns.

1. Prototypal Pattern
2. Pseudoclassical Pattern
3. Classes

//Prototypal Pattern

function User(name, score){
  var properties = Object.create(UserMethods);
   properties.name = name;
   properties.score = score;
  return properties;
}

const UserMethods = {
  increaseScore: function () {
    return this.score = ++this.score
},
  decreaseScore: function () {
    return this.score = --this.score
  }
}

Object.setPrototypeOf(PaidUserMethods, UserMethods);

function PaidUser(name,score,balance){
  let paidUserObj = User(name, score);
  paidUserObj.balance = balance;
  Object.setPrototypeOf(paidUserObj, PaidUserMethods);
  return paidUserObj;
}

 const PaidUserMethods ={
   increaseBalance: function () {
   return this.balance = ++this.balance
  },
  decreaseBalance : function () {
   return this.balance = --this.balance
  }
 }

var ashwin = PaidUser('ashwin', 0, 100);
ashwin.increaseBalance()


// Pseudoclassical Pattern

function User(name,score){
   this.name = name;
   this.score = score;
   User.prototype.increaseScore = function () {
     return this.score = ++this.score
   }
    User.prototype.decreaseScore = function () {
       return this.score = --this.score
    }
}

 function PaidUser (name,score,balance) {
   User.call (this,name,score);
   this.balance = balance;
    PaidUser.prototype.increaseBalance = function () {
      return this.balance = ++this.balance
    }
    PaidUser.prototype.decreaseBalance = function () {
        return this.balance = --this.balance
    }
   Object.setPrototypeOf(PaidUser.prototype,User.prototype);
   }

var ashwin = new PaidUser('ashwin',1,100);
ashwin.increaseBalance()


// class

class User {
  constructor (name,score){
    this.name = name;
    this.score = score;
  }
  increase () {
    return this.score = ++this.score
  };
  decrease () {
   return this.score = --this.score
  };
}

class PaidUser extends User {
  constructor(name,score,balance){
    super(name,score);
    this.balance = balance;
    
}
  increaseBalance() {
    return this.balance = ++this.balance
  }
  decreaseBalance() {
    return this.balance = --this.balance
  }
}
var ashwin = new PaidUser('ashwin',0,100);
ashwin.increase()
ashwin.increaseBalance()

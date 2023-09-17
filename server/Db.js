const { MongoClient } = require("mongodb");
const { esbuildVersion } = require("vite");
const uri = "mongodb+srv://vinitsharma2480:QAhpkZPDyJYRFHzu@cluster0.3ged7hz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri)

const dataBase = client.db("ChatAPp")
const MessageCollections = dataBase.collection("messages")
const UsersCollections = dataBase.collection("users")


async function login_signup(userName, Password, way) {
    console.log("i am runnning ")
    const Info = await checkExistance(userName);
    if (way == "LogIn") {
        console.log(Info)
        if (Info.isExist) {
            console.log( `password is ${Password} and password from mongo is ${Info.User.password}`)
            if (Info.User.password == Password) {
                
                return true
            }
            else {
                return false
            }
        }
        else {
            return false
        }

    }
    else {
        console.log("in")
        console.log(Info)
        if (!Info.isExist) {
            console.log("info not exist")
            insertUser(userName, Password)
            return true
        }
        else {
            console.log("info exist")
            return false
        }

    }

}


async function checkExistance(UserName) {

    const UserInfo = await UsersCollections.findOne({ Name: UserName })
    console.log("i am under the existance")
    

    if (UserInfo) {
        return {
            isExist: true,
            User: UserInfo
        }
    }
    else {
        return {
            isExist: false,
            User: null
        }
    }
}


async function insertUser(UserName , password){
    UsersCollections.insertOne(
        {
            Name : UserName,
            password:password
        }
    )
}

module.exports = login_signup
import connectMySqlDb from "../db/connectMySqlDb"

class Post {
    constructor(procedureText) {
        this.procedureText = procedureText
    }

    async save(){
        let d = new Date()
        let yyyy = d.getFullYear()
        let mm = d.getMonth() + 1
        let dd = d.getDate()

        let createdAt = `${yyyy}-${mm}-${dd}`

        let sql = 
        `INSERT TNTO OperatingProcedure(procedureText, createdAt)
        VALUES('${this.procedureText}','${createdAt}')`

        const [newPost, _] = await connectMySqlDb.execute(sql)

        return newPost
    }

    static findAll(){

    }
}

export default Post
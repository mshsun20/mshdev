import conn from "../db/dbcon.js";

const create = async (req, res) => {
    try {
        const { acc_uname, acc_pass, acc_fname, acc_eml, acc_phn } = req.body
        const qry = `select * from accounts where accounts.acc_uname='${acc_uname}'`
        const qry2 = `insert into accounts(acc_uname, acc_pass, acc_fname, acc_eml, acc_phn) values('${acc_uname}', '${acc_pass}', '${acc_fname}', '${acc_eml}', '${acc_phn}')`

        const [AccExtst] = await conn.query(qry)
        if (AccExtst?.length > 0) res.status(409).json({ message: `Account data already exist.`, statuscode: 409, data: AccExtst })
        else {
            const [AccRes] = await conn.query(qry2)
            if (AccRes) res.status(201).json({ message: `Account data created successfully.`, statuscode: 201, data: AccRes })
            else res.status(401).json({ message: `Account creation failed.`, statuscode: 401 })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: `Internal Server Error.`, statuscode: 500 })
    }
}

const read = async (req, res) => {
    try {
        const qry = `select * from accounts`
        const [Acc] = await conn.query(qry)
        res.status(200).json({ message: `Account data created successfully`, statuscode: 200, data: Acc })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: `Internal Server Error.`, statuscode: 500 })
    }
}


export default { create, read }
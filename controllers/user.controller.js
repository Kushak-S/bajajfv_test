
module.exports = {
    getReq:(req,res)=>{
        res.status(200).send({"operation_code":"1"})
    },
    postReq:(req,res)=>{
        let data = req.body.data;
        let numbers = [];
        let alaphabets = [];
        for(const x of data){
            if(!isNaN(x)){
                numbers.push(x)
            }else{
                alaphabets.push(x)
            }
        }
        res.status(200).send({
            "is_success": true,
            "user_id": "john_doe_17091999",
            "email" : "john@xyz.com",
            "roll_number":"ABCD123",
            "numbers": numbers,
            "alphabets": alaphabets
        })
    }
}

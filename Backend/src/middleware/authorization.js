import Jwt  from "jsonwebtoken";

export const verifyToken= async (req, res, next) => {

try{
    let token = req.header("authorization");
    if(!token){
        res.status(403).send("access denied");
    }

    if(token.startsWith("Bearer ")){
        token =token.split(" ")[1]
    console.log(token)
    }

    const verified=Jwt.verify(token, process.env.JWT_SECRET)
    console.log({verified})
    req.user= verified
    next();

}
catch(err){
    res.status(500).send(err.message);
}

}
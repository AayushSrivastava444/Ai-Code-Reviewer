import main from "../services/ai.service.js"

export default async (req, res)=>{
      const code=req.body.code

      if(!code){
         return res.status(400).send("Prompt is empty")
      }

      const response= await main(code);

      res.send(response);
}
import handler from '../../app/middelwares/nextconnect'
import getValidators from '../../app/application/validatorservice';

handler.get(async (req,res)=>{
    res.json(await getValidators());
})

export default handler;
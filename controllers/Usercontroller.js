import catat from "../models/Usermodel.js";

// GET
async function getcatat(req, res) {
  try {
    const response = await catat.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

// CREATE
async function createcatat(req, res) {
  try {
    const inputResult = req.body;
    await catat.create(inputResult);
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
}

export { getcatat, createcatat };

export const updatecatat = async(req, res)=> {
  try {
    const inputcatat = req.body;

    await catat.update(inputcatat, {
      where : { 
        id: req.params.id }
    });
    res.status(200).json({ msg: "catat Updated" });

} catch (error) {
  console.log(error.message);
}
}

export const deletecatat = async (req,res)=>{
  try {
    await catat.destroy({
      where:{
        id : req.params.id
      }
    });
    res.status(204).json({msg:"user berhasil dihapus"});
  } catch (error){
    console.log(error.message);
  }
}
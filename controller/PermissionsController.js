const Permissions = require('../models/TestPermissions');

const PermissionsController = {
    addPermission: async (req,res) =>{
        const permission = new Permissions({
            category: req.body.category,
            userAlbums: req.body.userAlbums
        });

        try{
            const savedPermissions = await permission.save();
            res.status(201);
            res.json(savedPermissions);
        }catch(err){
            res.json(err);
        }
    },
    findPermissionByCategory: async (req,res)=>{
        try{
            const permissions = await Permissions.find({category : req.params.category});
            res.json(permissions);
        }catch(err){
            res.json(err);
        }
    }
};

module.exports = PermissionsController;
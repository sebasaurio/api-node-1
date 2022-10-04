
export const isAdminRole = async(req, res, next) => {
    if(!req.userLogged){
        return res.status(500).json({
            message: 'user logged is required'
        })
    }

    const {role, name} = req.userLogged
    if(role !== 'ADMIN_ROLE'){
        return res.status(401).json({
            message: 'insufficent privileges'
        })
    }

    next()
}

export const hasValidRole = async(...roles) => {
    return (req, res, next) => {
        if(!req.userLogged){
            return res.status(500).json({
                message: 'user logged is required'
            })
        }
    
        if(!roles.includes(req.userLogged.role)){
            return res.status(401).json({
                message: 'insufficent privileges'
            }) 
        }
        
        next()
    }
}
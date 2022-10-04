import Role from '../models/role.js';
import User from '../models/user.js';


export const IsRoleValid = async (role) => {
    const existRole = await Role.findOne({ Role: role });
    if (!existRole) {
      throw new Error(`Role ${role} not exist in db`);
    }
  }

export const IsAlreadyExistEmail = async(email) => {
    const alreadyExist = await User.findOne({ email });
    if (alreadyExist) {
        throw new Error('User already exist')
    }
}

export const UserExistByEmail = async (id) => {
  const alreadyExist = await User.findById(id);
  if(!alreadyExist){
    throw new Error(`User with id ${id} didnt exist`)
  }
}
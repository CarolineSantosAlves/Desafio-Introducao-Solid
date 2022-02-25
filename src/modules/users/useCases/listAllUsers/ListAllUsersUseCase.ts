import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const verifyUser = this.usersRepository.findById(user_id);

    if (!verifyUser) {
      throw new Error("User not exists");
    }

    if (!verifyUser.admin) {
      throw new Error("User not is admin");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };

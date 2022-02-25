import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const verifyAdmin = this.usersRepository.findById(user_id);

    if (!verifyAdmin) {
      throw new Error("User is not admin");
    }

    this.usersRepository.turnAdmin(verifyAdmin);

    return verifyAdmin;
  }
}

export { TurnUserAdminUseCase };

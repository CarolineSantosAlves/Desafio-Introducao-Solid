import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      const userId = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).send(userId);
    } catch (error) {
      return response.status(404).json({ error: "Error" });
    }
  }
}

export { ShowUserProfileController };

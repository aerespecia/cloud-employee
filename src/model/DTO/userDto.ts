import { UserQueryParam } from "./userQueryParam";

export class UserDTO implements Readonly<UserDTO>{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    state: string;
    petExperience: string;

    public parseParams(params: UserQueryParam) {
        this.email = params.email;
        this.firstName = params.first_name;
        this.lastName = params.last_name;
        this.state = params.state;
        this.petExperience = params.pet_experience;
    }
}
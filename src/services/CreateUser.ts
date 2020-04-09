interface TechObject {
  title: string,
  experience: number;
};

interface CreateUserData {
  name?: string,
  email: string, // string | boolean
  password: string,
  techs: string[] //Array<string | TechObject>
};

export default function CreateUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password
  };

  return user;
}
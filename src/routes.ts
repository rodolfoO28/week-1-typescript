import { Request, Response } from 'express';

import CreateUser from './services/CreateUser';

export default function HelloGoStack(request: Request, response: Response) {
  const user = CreateUser({
    email: 'rdf2806@gmail.com',
    password: '123456',
    techs: [
      'NodeJS',
      'ReactJS',
      'React Native'
    ]
  });

  return response.json({ message: 'Hello GoStack', user });
};
import Card from "@/components/card";
import React from "react";

type User = {
  id: string;
  name: string;
  email: string;
  username: string;
};

const About = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  return (
    <div>
      {users.map((user: User) => {
        return (
          <Card key={user.id}>
            <div>
              <h1>Name: {user.name}</h1>
              <h2>Username: {user.username}</h2>
              <h3>Email: {user.email}</h3>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default About;

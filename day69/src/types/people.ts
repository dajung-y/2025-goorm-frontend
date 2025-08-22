interface UserData {
  id?: number;
  name?: string;
}

const u1: UserData = {};
const u2: UserData = { id:3 };
const u3: UserData = { id:4, name: "sam"};

type FullUserData = Required<UserData>

const u4: FullUserData = { id:5, name:"bob" }
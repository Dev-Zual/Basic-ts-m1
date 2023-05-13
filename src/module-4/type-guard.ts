// key of guard
type Alphaneumeric = string | number;
function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

// in guard
type NormalUserType = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUserType | AdminUser) {
  if ("role" in user) {
    return `hello i'm an ${user.role}`;
  } else {
    return "hello i'm normal user";
  }
}

const normalUser1 = { name: "Mr. Normal" };
const adminUser1 = { name: "Mr. Admin", role: "admin" };

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));

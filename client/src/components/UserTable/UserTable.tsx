import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  lastSeen: string;
  blocked: boolean;
}

const initialUsers: User[] = [
  { id: 1, name: "Alex Clare", email: "a_clare42@gmail.com", lastSeen: "5 minutes ago", blocked: false },
  { id: 2, name: "Jim Morrison", email: "dmtimer9@dealyaari.com", lastSeen: "less than a minute ago", blocked: false },
  { id: 3, name: "Nina Simone", email: "marishabelin@giftcode-ao.com", lastSeen: "3 weeks ago", blocked: true },
  { id: 4, name: "Frank Zappa", email: "zappa_f@citybank.com", lastSeen: "less than a minute ago", blocked: false },
];

function UserTable() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className={user.blocked ? "text-muted" : ""}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.lastSeen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;

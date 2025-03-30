import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/admin/users";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token"); // Берем токен из localStorage
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Передаем токен в заголовке
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Ошибка загрузки пользователей");
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Список пользователей</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name} - {user.email} - {user.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;

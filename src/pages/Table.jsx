import { useTranslation } from "react-i18next";

const Table = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "he";

  // Sample large table data
  const data = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", department: "IT", status: "Active", location: "New York", date: "2023-08-01" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor", department: "Marketing", status: "Inactive", location: "Los Angeles", date: "2023-06-15" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User", department: "Finance", status: "Active", location: "Chicago", date: "2023-07-20" },
    { id: 4, name: "David White", email: "david@example.com", role: "Admin", department: "HR", status: "Active", location: "San Francisco", date: "2023-05-10" },
    { id: 5, name: "Emily Clark", email: "emily@example.com", role: "User", department: "Sales", status: "Inactive", location: "Boston", date: "2023-09-05" }
  ];

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold text-center mb-4">{t("table.title")}</h2>

      <div className="w-full overflow-x-auto">
        <table className={`min-w-full border-collapse border border-gray-300 shadow-lg rounded-lg ${isRTL ? "text-right" : "text-left"}`}>
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 border border-gray-300">{t("table.id")}</th>
              <th className="p-3 border border-gray-300">{t("table.name")}</th>
              <th className="p-3 border border-gray-300">{t("table.email")}</th>
              <th className="p-3 border border-gray-300">{t("table.role")}</th>
              <th className="p-3 border border-gray-300">{t("table.department")}</th>
              <th className="p-3 border border-gray-300">{t("table.status")}</th>
              <th className="p-3 border border-gray-300">{t("table.location")}</th>
              <th className="p-3 border border-gray-300">{t("table.dateJoined")}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100 transition">
                <td className="p-3 border border-gray-300">{user.id}</td>
                <td className="p-3 border border-gray-300">{user.name}</td>
                <td className="p-3 border border-gray-300">{user.email}</td>
                <td className="p-3 border border-gray-300">{user.role}</td>
                <td className="p-3 border border-gray-300">{user.department}</td>
                <td className="p-3 border border-gray-300">{user.status}</td>
                <td className="p-3 border border-gray-300">{user.location}</td>
                <td className="p-3 border border-gray-300">{user.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

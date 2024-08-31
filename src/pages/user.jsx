
import UserTable from "../components/user/table.user";
import UserForm from "../components/user/user.form";


const UserPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <UserForm />
      <UserTable />
    </div>
  )
}

export default UserPage;
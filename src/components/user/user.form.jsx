import { Input } from "antd";
import { Button, Flex } from 'antd';
import { convertLegacyProps } from "antd/es/button";
import ColumnGroup from "antd/es/table/ColumnGroup";
import { useState } from "react";
const UserForm = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [pasword, setPasword] = useState("")
  const [phone, setPhone] = useState("")

  const handleClickBtn = () => {
    console.log("check form ", { fullName, email, pasword, phone })
  }
  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>FullName</span>
          <Input
            value={fullName}
            onChange={(event) => { setFullName(event.target.value) }} />
        </div>
        <div>
          <span>Email</span>
          <Input value={email}
            onChange={(event) => { setEmail(event.target.value) }} />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            value={pasword}
            onChange={(event) => { setPasword(event.target.value) }}
          />
        </div>
        <div>
          <span>Phone numeber</span>
          <Input value={phone}
            onChange={(event) => { setPhone(event.target.value) }}
          />
        </div>
        <div>
          <Button
            //onClick=>{() handleClickBtn ()}
            onClick={handleClickBtn}
            type="primary">Create Users

          </Button>
        </div>

      </div>
    </div>
  )
}

export default UserForm;
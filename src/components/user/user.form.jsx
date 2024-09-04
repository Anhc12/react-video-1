import { Input, notification } from "antd";
import { Button, Flex } from 'antd';
import { convertLegacyProps } from "antd/es/button";
import ColumnGroup from "antd/es/table/ColumnGroup";
import { useState } from "react";

import Password from "antd/es/input/Password";
import { createUserAPI } from "../../sevices/api.sevice";
const UserForm = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPasword] = useState("")
  const [phone, setPhone] = useState("")

  const handleClickBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phone)
    console.log("check res : ", res)
    if (res.data) {
      notification.success({
        message: "create user",
        description: "tạo user thành công"
      })
      console.log("check res ", res.data.data)
    }
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
            value={password}
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
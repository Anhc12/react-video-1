

import './style.css';
const MyComponent = () =>{
  // const anhc = "hoang anh1";//string ok
  // const anhc = "30";//number ok
  // const anhc = "true";//boolean no
  // const anhc = "underfined";//no
  // const anhc = null;//no
  const anhc = [1, 2, 3]
  // const anhc = {
  //   name: "anhc",
  //   age: 30
  // }
  return(
    <>
    <div>{JSON.stringify(anhc)} & React JS</div>
    <div>{console.log("anhc")}</div>
    <div 
    style={
      {borderRadius:"10px"}
    }
    className="child">child</div>
    </>
  ) ;
}
export default MyComponent;
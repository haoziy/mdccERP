//验证管理人员登录
isAdmin = () => {
  return `SELECT user_name,user_password FROM table_user`
}
addAdmin = () => {
  return `INSERT INTO table_user 
          ("user_name","user_password","") VALUES (?,?)`
}
module.exports = {
  isAdmin,
  addAdmin
}
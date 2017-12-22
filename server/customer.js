/**
 * Created by shenqiao on 2017/12/20.
 */
const getAllCustomer = function()
{
    return "SELECT A.customer_id as customerId," +
        "A.customer_name as customerName," +
        "A.customer_deal_state as customerDealState," +
        "DATE_FORMAT(A.customer_create_time,'%Y-%m-%d') as customerDate " +
        "FROM table_customer A " +
        "WHERE A.customer_avtive = 1"
}

const  updateCustomerStatus = ()=>{
    return "UPDATE table_customer A SET A.customerDealState = ?";
}

const addCustomer = ()=>{
    return "INSERT INTO table_customer" +
        " (customer_id,customer_name,customer_telephone,customer_create_time,customer_deal_state,customer_avtive) " +
        "VALUES(?,?,?,NOW(),0,1)"
}

const bindCustomerAndChannel = ()=>{
    return "INSERT INTO table_channel_customer_binding " +
        "(`binding_id`, `binding_channel_id`, `binding_customer_id`) " +
        " VALUES(?,?,?)";
}
const bindCustomerAndStaff = ()=>{
    return "INSERT INTO table_staff_customer_binding (binding_id,binding_staff_id,binding_customer_id) " +
        "VALUES(?,?,?)";
}
const bindCustomerAndSegment = ()=>{
    return "INSERT INTO table_segment_customer_binding (binding_id,segment_id,customer_id) " +
        "VALUES(?,?,?)";
}

module.exports = {
    addCustomer,
    getAllCustomer,
    updateCustomerStatus,
    bindCustomerAndSegment,
    bindCustomerAndStaff,
    bindCustomerAndChannel
}
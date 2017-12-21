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

module.exports = {
    getAllCustomer
}
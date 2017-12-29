/**
 * Created by shenqiao on 2017/12/29.
 */


export const valiedString = (str,maxLength)=>{
    if(typeof str != 'string')
    {
        return false;
    }

    //验证手机号是否正确
    // var phoneReg = /(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    // if(!phoneNum.test(str)){
    //     return false;
    // }

    //判断输入号码是否小于最大号码长度
    // if(phoneNum.length!=maxLength){
    //     return false;
    // }
    if(!str)
    {
        return false;
    }else {
        return str.length>0&&str.length<=maxLength;
    }

}

// export const valiedString = {
//     entryName:(str,maxLength)=>{
//         if(typeof str != 'string')
//         {
//             return false;
//         }
//         if(str.length>maxLength){
//            return false;
//         }
//         if(!str){
//             return false;
//         }else {
//             return str.length>0&&str.length<=maxLength;
//         }
//     },
//     entryPhoneNum:(PhoneNum,length)=>{
//         if(typeof PhoneNum != 'number') return false;
//         if(phoneNum.length != length) return false;
//     }

// }

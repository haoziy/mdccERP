import {BaseHandler,API_MAP} from '../index'

export const ChannelHandler =
{
    getAllChannel:(success,failed)=>{
        BaseHandler.postHttpRequest(
            BaseHandler.customUrlAndApi(BaseHandler.baseURL,API_MAP.getAllChannel),
            {},
            (successData)=>{
                let data = successData.data;
                success(data)
            },
            (failedData)=>{

            }
        )
    }

}
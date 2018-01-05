import {BaseHandler,API_MAP} from '../index'

export const userHander={
  isAdmin:(success,failed)=>{
    BaseHandler.postHttpRequest(
      BaseHandler.customUrlAndApi(BaseHandler.baseURL,API_MAP.isAdmin),
      {},
      (successData)=>{
        let data = successData.data;
        success(data&&data.data?data.data:[])
    },
    (failed)=>{
        success([])
    }
    )
  },
  addAdmin:(success,failed)=>{
    BaseHandler.postHttpRequest(
      BaseHandler.customUrlAndApi(BaseHandler.baseURL,API_MAP.addAdmin),
      param,
      (successData)=>{
          success(successData)
      },
      (failed)=>{
          success()
      }
    )
  }
}
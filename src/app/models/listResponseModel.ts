import { ResponseModel } from "./responseModel";

export interface ListResponseModel<T> extends ResponseModel{
    data:T[];
}
//dönecek olan liste 

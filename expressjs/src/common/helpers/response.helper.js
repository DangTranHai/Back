import statusCodes from "http-status-codes";

export const responseSuccess = (data , message = "OK" , statusCode = 200, ) => {
    return {
        status: "Success !",
        statusCode: statusCode,
        message: message,
        data : data
    }
}


export const responseErr =  ( message = "Internal Server Error", statusCode = statusCodes.INTERNAL_SERVER_ERROR, stack) => {
    return {
        status: "error !",
        statusCode: statusCode,
        message: message,
        // stack: nơi hienr thị chi tiết của lỗi bao gồm đường dẫn tới lỗi ko hiển thị trên môi trường production chỉ hiển thị trên môi trường development
        stack: stack,
    }
}
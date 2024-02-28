import ACCESS_ENUM from "./accessEnum"

/**
 * 校验用户权限
 * @param loginUser 登录用户
 * @param needAccess 需要的权限
 * @returns 有无权限
 */
const checkAccess = (loginUser:any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
    //获取登录用户的权限
    const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;

    //不需要权限
    if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
        return true;
    }

    //需要登录才能访问
    if (needAccess === ACCESS_ENUM.USER) {
        //用户未登录
        if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
            return false;
        }
    }

    //需要管理员权限
    if (needAccess === ACCESS_ENUM.ADMIN) {
        if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
            return false;
        }
    }
    return true;
}

export default checkAccess;
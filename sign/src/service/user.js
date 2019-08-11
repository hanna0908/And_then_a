import fly from '@/utils/request';
//登录接口
export let login = code => {
    return fly.post('/user/code2session', { code })
}
// 解密数据
export let decrypt = params => {
    return fly.post('/user/decrypt', params)
}
//获取生物认证
export let fingerPrint = params => {
    return fly.post("/user/fingerPrint", params)
}
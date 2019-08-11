import fly from '@/utils/request';
// 添加面试
export let addSign = params => {
    // console.log(params, "111111")
    return fly.post('/sign', params);
}

// 获取面试列表
export let getSignList = params => {
    return fly.get('/sign', params);
}

// 获取面试详情
export let getSignDetail = id => {
    console.log(id, 'id')
    return fly.get(`/sign/${id}`);
}

// 更新面试状态
export let updateSignDetail = (id, params) => {
    console.log(id, params)
    return fly.put('/sign/' + id, params);
}



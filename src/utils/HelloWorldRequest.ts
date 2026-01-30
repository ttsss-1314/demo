import axios from "axios";
import md5 from "md5";

const BAIDU_CONFIG = {
    appid: import.meta.env.VITE_BAIDU_APPID || '20260126002547345',
    secretKey: import.meta.env.VITE_BAIDU_SECRET_KEY || 'RwKExrX09dLeWnpBRmvL'
}

const helloWorldRequest= axios.create({
    baseURL:"/fanyi",
    timeout:10000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

export const translateText = (params: {
    q: string,
    from?: string,
    to?: string
}) => {
    const { q, from = 'auto', to = 'zh' } = params;
    // 1. 生成随机数
    const salt = Date.now().toString();
    // 2. 生成签名：md5(appid + q + salt + secretKey)
    const sign = md5(BAIDU_CONFIG.appid + q + salt + BAIDU_CONFIG.secretKey);
    // 3. 构建请求参数（使用 URLSearchParams 或 FormData）
    const formData = new URLSearchParams();
    formData.append('q', q);
    formData.append('from', from);
    formData.append('to', to);
    formData.append('appid', BAIDU_CONFIG.appid);
    formData.append('salt', salt);
    formData.append('sign', sign);

    return helloWorldRequest({
        method: "POST",
        url: "/api/trans/vip/translate",
        data: formData.toString(), // 注意：这里应该是 data，不是 params
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
};

export default helloWorldRequest;
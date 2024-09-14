import axios from 'axios';

// 创建一个 Axios 实例
const request = axios.create({
    baseURL: 'localhost:', // 替换为你的 API 基础 URL
    timeout: 10000, // 请求超时时间
});

// 添加请求拦截器
request.interceptors.request.use(config => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(response => {
    if (response.config.responseType === "blob" || response.config.responseType === "arraybuffer") {
      return response;
    }
    const { code, data, message } = response.data;
    if (code === 200) {
      return response.data;
    }
    ElMessage.error(message || "系统出错");
    return Promise.reject(new Error(message || "Error"));
}, error => {
  // if (error.response.data) {
  //   const { code, message, data } = error.response.data;
  //   if (code === ResultEnum.TOKEN_INVALID) {
  //     ElMessageBox.confirm("当前页面已失效，请重新登录", "提示", {
  //       confirmButtonText: "确定",
  //       cancelButtonText: "取消",
  //       type: "warning",
  //     }).then(() => {
  //       const userStore = useUserStoreHook();
  //       userStore.resetToken().then(() => {
  //         location.reload();
  //       });
  //     });
  //   } else if (data.code === ResultEnum.LOGINERROR) {
  //     ElMessage.error("无效的客户");
  //   } else {
  //     ElMessage.error(message || "系统出错");
  //   }
  // }
  return Promise.reject(error.message);
});

export default request;
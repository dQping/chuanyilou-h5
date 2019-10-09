// 本文件可以把所有的api接口安装到全局，之后在main.js文件中导入就可以用了
import apiList from './apiList';

const install = function(Vue) {
    if (install.installed) return;

    install.installed = true;
    Object.defineProperties(Vue.prototype, {
        $api: {
            get() {
                return apiList;
            }
        }
    });
};

export default {
    install
};

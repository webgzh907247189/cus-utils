export const jsStr = `(function(options) {
    const ideName = options.ideName ?? 'vscode';
    const SKIP = 'SKiP';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const documentClickEvent = (event) => {
        let completeFilepath = event.target.getAttribute('complete-filepath');
        let currentElement = event.target;
        let parentElement;

        while (completeFilepath === null) {
            if (completeFilepath === SKIP) {
                return;
            }
            const nodeName = currentElement.nodeName.toLowerCase();
            // console.log(nodeName, "nodeNamenodeName");

            if (nodeName === 'body') {
                throw new Error('请检查 babel-plugin-jsxfileattribute 插件是否开启');
            }

            parentElement = currentElement.parentElement;

            completeFilepath = parentElement.getAttribute('complete-filepath');

            currentElement = parentElement;
        }

        if (completeFilepath !== SKIP) {
            // console.log(completeFilepath, 'completeFilepath');

            window.location.assign(ideName + '://file' + completeFilepath);
        }
    };

    if (isMobile) {
        let fragementElement = document.createElement('div');
        // 样式设置
        const styleObj = {
            width: '200px',
            height: '80px',
            color: 'green',
            backgroundColor: 'red',
            position: 'fixed',
            borderRadius: '44px',
            top: '0px',
            fontSize: '16px',
            left: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '9999',
        };

        for (const key in styleObj) {
            const element = styleObj[key];
            fragementElement.style[key] = styleObj[key];
        }
        fragementElement.setAttribute('complete-filepath', SKIP);

        fragementElement.appendChild(document.createTextNode('点击我  开启唤起 vscode 开关'));

        fragementElement.addEventListener(
            'click',
            () => {
                // 取 反
                window.ISMOBILECLICK = !window.ISMOBILECLICK;
            },
            true,
        );

        document.addEventListener(
            'click',
            (event) => {
                if (window.ISMOBILECLICK) {
                    documentClickEvent(event);
                }
            },
            true,
        );

        document.body.appendChild(fragementElement);
    } else {
        document.addEventListener('dblclick', documentClickEvent);
    }
    console.log('%c%s', 'color: red;font-size: 28px;background: #fff;', '已成功开启 launch IDE 功能');
})(options ?? {})`;
export default function launchIDEConfig(ideName?: string) {
    const jsStr1 = `(()=>{let ideName = '${ideName}';let options = { ideName: ideName };${jsStr};})()`;
    const jsStr2 = `(()=>{let options = {};${jsStr};})()`;
    return ideName ? jsStr1 : jsStr2;
}

export const jsStr = `(function (options) {
    const ideName = options.ideName ?? "vscode";
    const SKIP = "SKiP";

    const getLineColumn = (completeFilepath) => {
      const [filePath, line, column] = completeFilepath.split(':')

      return {
        filePath,
        line,
        column
      }
    }

    const formatLaunchIdeUrl = {
      'webstorm': (completeFilepath) => {
        const { line, column, filePath } = getLineColumn(completeFilepath)
        return "webstorm://open?file=" + filePath + "&line=" + line + "&column=" + column
      },
      'vscode':  (completeFilepath) => {
        return "vscode://file" + completeFilepath
      },
      'default':  (completeFilepath) => {
        return ideName + "://file" + completeFilepath
      },
    }

    let getUrlFn = options.userGetUrl ? options.userGetUrl : (formatLaunchIdeUrl[ideName] ?? formatLaunchIdeUrl['default']);

    const OPENIDE = (completeFilepath) => {
      const url = getUrlFn(completeFilepath)
      window.location.assign(url);
    }

    const documentClickEvent = (event) => {
      let completeFilepath = event.target.getAttribute("complete-filepath");
      let currentElement = event.target;
      let parentElement;

      // altKey 没有false， 不触发 唤起 ide 功能  ->  后续逻辑不在执行
      if (!event.altKey) {
        return
      }

      while (completeFilepath === null) {
        if (completeFilepath === SKIP) {
          return;
        }
        const nodeName = currentElement.nodeName.toLowerCase();
        // console.log(nodeName, "nodeNamenodeName");

        if (nodeName === "body") {
          completeFilepath = null
          return;
          // 修改 之前 找不到 completeFilepath 就报错的逻辑
          //   throw new Error("请检查 babel-plugin-jsxfileattribute 插件是否开启");
        }

        parentElement = currentElement.parentElement;

        completeFilepath = parentElement?.getAttribute?.("complete-filepath");

        currentElement = parentElement;
      }

      if (completeFilepath !== SKIP && window.ISCLICK) {
        if (!completeFilepath) {
          console.wran('没有在点击的元素 以及 元素父级 找到 completeFilepath 属性')
          return;
        }
        console.log(completeFilepath, "completeFilepath");

        OPENIDE(completeFilepath)
        window.ISCLICK = false;
      }
    };

    document.addEventListener("click", documentClickEvent);

    const ALT = "Alt";
    window.addEventListener("keydown", (event) => {
      if (event.altKey) {
        window.ISCLICK = true;
      }
    });
    window.addEventListener("keyup", (event) => {
      window.ISCLICK = false;
    });
    console.log(
      "%c%s",
      "color: red;font-size: 28px;background: #fff;",
      "已成功开启 launch IDE 功能",
    );

    console.log(
      "%c%s",
      "color: green;font-size: 16px;background: #fff;",
      "按住 Option(Alt) 键 同时 点击页面元素, 即可唤起 IDE",
    );
  })(options ?? {});
`;
export default function launchIDEConfig(ideName?: string, userGetUrl?: (completeFilepath: string) => string) {
    const jsStr1 = `(() => { let ideName = '${ideName}'; let options = { ideName: ideName }; let userGetUrlObj = { ${userGetUrl} }; if (userGetUrlObj.userGetUrl) { options.userGetUrl = userGetUrlObj.userGetUrl; }; ${jsStr}; })()`;
    const jsStr2 = `(() => { let options = {}; ${jsStr}; })()`;
    return ideName ? jsStr1 : jsStr2;
}

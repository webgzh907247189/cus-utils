export const jsStr = `(function (options) {
    const ideName = options.ideName ?? "vscode";
    const SKIP = "SKiP";

    const documentClickEvent = (event) => {
      let completeFilepath = event.target.getAttribute("complete-filepath");
      let currentElement = event.target;
      let parentElement;

      while (completeFilepath === null) {
        if (completeFilepath === SKIP) {
          return;
        }
        const nodeName = currentElement.nodeName.toLowerCase();
        // console.log(nodeName, "nodeNamenodeName");

        if (nodeName === "body") {
          throw new Error("请检查 babel-plugin-jsxfileattribute 插件是否开启");
        }

        parentElement = currentElement.parentElement;

        completeFilepath = parentElement?.getAttribute?.("complete-filepath");

        currentElement = parentElement;
      }

      if (completeFilepath !== SKIP && window.ISCLICK && completeFilepath) {
        console.log(completeFilepath, "completeFilepath");

        window.location.assign(ideName + "://file" + completeFilepath);
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
export default function launchIDEConfig(ideName?: string) {
    const jsStr1 = `(()=>{let ideName = '${ideName}';let options = { ideName: ideName };${jsStr};})()`;
    const jsStr2 = `(()=>{let options = {};${jsStr};})()`;
    return ideName ? jsStr1 : jsStr2;
}

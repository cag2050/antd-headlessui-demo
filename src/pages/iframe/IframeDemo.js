import {useRef, useEffect} from "react";

import "./IframeDemo.less"

// 覆盖同源iframe里面的样式（不同源，没法修改）
const IframeDemo = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (iframe) {
            iframe.onload = () => {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

                // 检查是否能够访问 iframe 内容（跨域问题可能会阻止访问）
                if (iframeDoc) {
                    // 通过选择器修改样式
                    const element = iframeDoc.querySelector('.button-class');
                    if (element) {
                        // element.style.display = 'none'; // 例如：隐藏元素
                    }

                    const style = iframeDoc.createElement('style');
                    style.type = 'text/css';
                    style.innerHTML = `
                        body {
                          background-color: lightblue;
                        }
                        h1 {
                          color: red;
                        }
                        .button-class {
                          font-size: 20px;
                          text-align: center;
                          color: blue;
                        }
                      `;
                    iframeDoc.head.appendChild(style);
                }
            };
        }
    }, []);

    return (
        <>
            <div style={{height: '100%'}}>
                {/*<iframe className="iframe-self" src="http://172.27.128.113:31018/grafana/d/k8s_views_global/kubernetes-views-global?orgId=1&refresh=30s&from=now-24h&to=now&theme=light"></iframe>*/}
                <iframe ref={iframeRef} className="iframe-self" src="/button/button-demo"></iframe>
            </div>
        </>
    )
}

export default IframeDemo;
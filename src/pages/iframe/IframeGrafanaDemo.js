import {useRef, useEffect} from "react";

import "./IframeDemo.less"

// 覆盖同源iframe里面的样式（不同源，没法修改）
const IframeGrafanaDemo = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (iframe) {
            iframe.onload = () => {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

                // 检查是否能够访问 iframe 内容（跨域问题可能会阻止访问）
                if (iframeDoc) {
                    // 通过选择器修改样式
                    // const element = iframeDoc.querySelector('.button-class');
                    // if (element) {
                    //     element.style.display = 'none'; // 例如：隐藏元素
                    // }

                    const style = iframeDoc.createElement('style');
                    // style.type = 'text/css';
                    style.innerHTML = `
                        .grafana-app .main-view > main {
                            padding-top: 40px
                        }
                        .grafana-app .main-view > div:nth-of-type(1) > div:nth-of-type(1) {
                            display: none
                        }
                        .grafana-app .main-view > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) {
                            display: none
                        }
                        .grafana-app .main-view > div:nth-of-type(1) > div:nth-of-type(2) > nav {
                            display: none
                        }
                        .grafana-app .main-view > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) {
                            display: none
                        }
                        .grafana-app .main-view > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) {
                            display: none
                        }
                        .grafana-app .main-view > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) {
                            display: none
                        }
                        .grafana-app .main-view > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(5) {
                            display: none
                        }
                        .grafana-app .main-view > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) {
                            display: none
                        }
                        .grafana-app .main-view > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > button {
                            display: none
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
                <iframe ref={iframeRef} className="iframe-self" src="/grafana/grafana-demo1"></iframe>
            </div>
        </>
    )
}

export default IframeGrafanaDemo;
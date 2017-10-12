/**
 * Copyright (C) 2017 微回收
 * All rights reserved
 * @Author: suchen(335167469@qq.com)
 * @Date: 2017/10/9 16:13
 * @Description:
 */

function getArea(cityid,countystr){
    let str = countystr;

    let m = str.split("</a>");

    let arr = [];

    for(let i=0; i<m.length-1; i++){
        let cname = m[i].match(/[\u4e00-\u9fa5]+/)[0]
        let id = m[i].match(/\d+/)[0]
        let obj = {
            "id": id,
            "cname": cname,
            "upid": cityid,
            "ename": null,
            "pinyin": "",
            "level": "3"
        }

        arr.push(obj);
    }

    arr.sort(function(a,b){
        return parseInt(a.id) - parseInt(b.id)
    })

    arr.forEach(function(item){
        var m = JSON.stringify(item);
        console.log(m+',')
    })
}

getArea('710100','<a title="北投" attr-id="710109" href="javascript:;">北投</a><a title="大安" attr-id="710105" href="javascript:;">大安</a><a title="大同" attr-id="710102" href="javascript:;">大同</a><a title="南港" attr-id="710111" href="javascript:;">南港</a><a title="内湖" attr-id="710110" href="javascript:;">内湖</a><a title="信义" attr-id="710107" href="javascript:;">信义</a><a title="士林" attr-id="710108" href="javascript:;">士林</a><a title="松山" attr-id="710104" href="javascript:;">松山</a><a title="万华" attr-id="710106" href="javascript:;">万华</a><a title="文山" attr-id="710112" href="javascript:;">文山</a><a title="中山" attr-id="710103" href="javascript:;">中山</a><a title="中正" attr-id="710101" href="javascript:;">中正</a>')

var fs = require('fs');
var iconv = require('iconv-lite');
var csv = require('fast-csv');

var newData = [];

csv
    .fromPath('data.csv',{headers: true})
    .on('data', function(data){
        var lastLine = data.product_details.replace(/'/g,'').split(';');
        console.log(lastLine);
        var proLen = lastLine.length;
        if(proLen > 2){
            for(var i=0; i<proLen-1; i++){
                if(i == 0){
                    var newLine = {
                        'order_id': data.order_id,
                        'customer_id': data.customer_id,
                        'payment_company': data.payment_company,
                        'payment_country': data.payment_country,
                        'shipping_city': data.shipping_city,
                        'shipping_country': data.shipping_country,
                        '国家是否相同': data['国家是否相同'],
                        '标题1': lastLine[0].split(',')[0],
                        '标题2': lastLine[0].split(',')[1],
                    };
                }else{
                    var newLine = {
                        'order_id': '',
                        'customer_id': '',
                        'payment_company': '',
                        'payment_country': '',
                        'shipping_city': '',
                        'shipping_country': '',
                        '国家是否相同': '',
                        '标题1': lastLine[i].split(',')[0],
                        '标题2': lastLine[i].split(',')[1],
                    };
                }

                newData.push(newLine);
            }
        }else{
            var newLine = {
                'order_id': data.order_id,
                'customer_id': data.customer_id,
                'payment_company': data.payment_company,
                'payment_country': data.payment_country,
                'shipping_city': data.shipping_city,
                'shipping_country': data.shipping_country,
                '国家是否相同': data['国家是否相同'],
                '标题1': lastLine[0].split(',')[0],
                '标题2': lastLine[0].split(',')[1]
            }
            newData.push(newLine);
        }
        console.log(newData);
    })
    .on('end',function(){
        console.log('read done');
        console.log('start write');
        csv
            .writeToPath('new.csv', newData, {headers: true})
            .on('finish',function(){
                console.log('write done!')
            })
    })


---
title: JavaScript广度优先与深度优先遍历
tags: JavaScript
---


还可以基于iterator遍历

对于树形结构数据的遍历

```
{
        "ID": "112",
        "Name": "全公司",
        "ParentID": "0",
        "StopFlag": "0",
        "Code": "001",
        "Children": [
            {
                "ID": "3847",
                "Name": "考勤测试部门",
                "ParentID": "112",
                "StopFlag": "0",
                "Code": "",
                "Children": [
                    {
                        "ID": "4004",
                        "Name": "9999",
                        "ParentID": "3847",
                        "StopFlag": "0",
                        "Code": ""
                    },
                    {
                        "ID": "4001",
                        "Name": "111",
                        "ParentID": "3847",
                        "StopFlag": "0",
                        "Code": "111"
                    }
                ]
            },
            {
                "ID": "3876",
                "Name": "测试bug",
                "ParentID": "112",
                "StopFlag": "0",
                "Code": "",
                "Children": [
                    {
                        "ID": "677",
                        "Name": "一级部门5",
                        "ParentID": "3876",
                        "StopFlag": "0",
                        "Code": "",
                        "Children": [
                            {
                                "ID": "4002",
                                "Name": "呃呃呃",
                                "ParentID": "677",
                                "StopFlag": "0",
                                "Code": ""
                            }
                        ]
                    }
                ]
            },
            {
                "ID": "3889",
                "Name": "研发中心",
                "ParentID": "112",
                "StopFlag": "0",
                "Code": ""
            }
        ]
    }

```


1. 广度优先遍历

```
 // 广度优先遍历
        /* let arrBreadth = []
         function breadthFirst(data) {
         var queue = [],
         next = data[0];
         while (next) {
         arrBreadth.push(next)
         if (next.Children && next.Children.length ) {
         next.Children.forEach((item)=>{
         queue.push(item)
         })
         }
         next = queue.shift();
         }
         }


         breadthFirst(deptTree)
         console.log(arrBreadth)*/
```



2. 深度优先遍历

```javascript
const loop = data => data.map(item=>{
	if(item.Children && item.Children.length){

		return item

	}

})
```
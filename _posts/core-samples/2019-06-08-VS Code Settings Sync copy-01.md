---
layout: post
category : lessons
title : 'VS Code Settings Sync 同步設定 - 上篇'
tagline: " - 將VS Code 設定上傳到GitHub"
tags : [VScode, Github]
---
{% include JB/setup %}

每次換新設備新環境都要重新設定VS Code，會忘記自己設定過什麼，實在有夠麻煩，查詢了一下，發現Settings Sync這個好東西。  

使用插件：[Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)  
用途：可以跨平台、設備同步 ( 需配合GitHub )

## Step.1
在你要分享設定的VS Code 安裝 Settings Sync 插件，安裝好後，重新啟動讓它執行。

![avatar](https://cdn-images-1.medium.com/max/1000/1*X9FFdTYkqgxXe-M__f_RcA.jpeg)

## Step.2
到你的 GitHub 頁面，點選右上角選單進入 Settings→

![avatar](https://cdn-images-1.medium.com/max/2000/1*XL_557HsIpUeHw2CbdldyA.jpeg)

接著左下角進入 Developer settings→

![avatar](https://cdn-images-1.medium.com/max/1500/1*GkqrbY9DgDrm9HdQEvRA_w.jpeg)

接著左下角進入 Personal access tokens→  
再點選右側進入 Generate New Token→

![avatar](https://cdn-images-1.medium.com/max/1000/1*hv1O09c-zRV0QIWgimjzuA.jpeg)

在Token description輸入你想命名的名稱(範例：vscode_sync)，並勾選 gist ，按下 Generate token！

![avatar](https://cdn-images-1.medium.com/max/1000/1*s1E00ykFRsn0gotLp69dxw.jpeg)
![avatar](https://cdn-images-1.medium.com/max/1000/1*vXNJJI7jznbLeWJFUdJrng.jpeg)

這時候會跑出一段亂碼(Token)，請將它複製起來

![avatar](https://cdn-images-1.medium.com/max/1000/1*r4hD-nrghYH8kQmWOjwmYw.jpeg)

## Step.3
回到VS Code，按下上傳快捷鍵：
```
Shift + Alt + U
```
這時候會跳出視窗要你輸入Token，貼上後按下 Enter

![avatar](https://cdn-images-1.medium.com/max/1500/1*CPaXiDCJQOIWVktUa1qx-g.png)

成功的話會自動跑出 syncSummary.txt的文件

![avatar](https://cdn-images-1.medium.com/max/1000/1*ffaif1X5UICBfp1qB-9GUQ.jpeg)

請將Token、Gist複製起來，下一篇《VS Code Settings Sync 同步設定(2)》將告訴你如何下載上傳到GitHub的設定檔。
# BtmVulScan

## bytomd 节点安全性审计
### 扫描
1. 扫描 节点是否打开 9888 端口
2. 或者 __先知计划__ 中探测到的节点
3. 或者 更强大一点的，服务指纹识别，这里没做具体研究，但是个方向

### 可能存在的漏洞
如果扫描到节点，并且使用了 `--auth.disable` 取消了 require  `accsess_token` 那么钱包可被远程访问，存在危险，比如:

1. 看交易/余额
2. 导出 keystore
3. 弱密码爆破
4. 甚至 通过 `connect-peer`, `disconnet-peer` 恶意隔离网络，构造区块/交易
5. ...

### bytomd 弱密码爆破
1. 目前只是 支持扫描 本地 localhost:9888 或者 [临时先知节点api](http://52.82.28.100:9889/list-nodes) 中返回的节点, 可以修改 `weak_password/scan.js` 自行 hardcode 添加一些节点，或者  读取自己服务指纹识别扫描到的 节点列表文件等等
2. 因为只是一个样例，目前弱密码字典中只有 “111”，”222“，可以自行添加读取 密码字典文件功能
    1. 用户信息收集
        1. [Cr3dOv3r](https://github.com/D4Vinci/Cr3dOv3r): 根据邮箱自动搜索泄漏的密码信息，也可测试账户密码在各大网站能否登录的工具
        2. [Sreg](https://github.com/n0tr00t/Sreg): 通过输入 email, phone, username 的返回用户注册的所有互联网护照信息
        8. [gitleaks](https://github.com/zricethezav/gitleaks): Searches full repo history for secrets and keys
        5. [gitscan](https://github.com/sea-god/gitscan): Github信息搜集，可实时扫描查询git最新上传有关邮箱账号密码信
        4. [GitPrey](https://github.com/repoog/GitPrey): GitHub 敏感信息扫描工具
        3. [GitHack](https://github.com/lijiejie/GitHack): `.git` 文件夹泄漏利用工具
        6. [truffleHog](https://github.com/dxa4481/truffleHog): GitHub 敏感信息扫描工具,包括检测 commit 等
        7. [GitHarvester](https://github.com/metac0rtex/GitHarvester): github Repo信息搜集工具
        8. [x-patrol](https://github.com/MiSecurity/x-patrol): github泄露扫描系统
    2. 字典生成
        1. [cupp](https://github.com/Mebus/cupp): 根据用户习惯生成弱口令探测字典脚本
        2. [genpAss](https://github.com/RicterZ/genpAss): 中国特色的弱口令生成器
        3. [pydictor](https://github.com/LandGrey/pydictor): 暴力破解字典建立工具
    3. 现成字典
        1. [wfuzz/wordlist](https://github.com/xmendez/wfuzz/tree/master/wordlist)
        2. [htpwdScan/dict/](https://github.com/lijiejie/htpwdScan/tree/master/dict)
        3. [awBruter/aWordShellPwd.txt](https://github.com/theLSA/awBruter/blob/master/aWordShellPwd.txt)
        4. [x-crack/*.dic](https://github.com/netxfly/x-crack)
        5. [Blasting_dictionary](https://github.com/rootphantomer/Blasting_dictionary)
        7. [Openwall wordlists collection](http://www.openwall.com/wordlists/)
        6. [nozzlr/wordlists/unix_passwords.txt](https://github.com/intrd/nozzlr/blob/1.1/wordlists/unix_passwords.txt)
3. 使用方法
    ```
    npm insatll
    node scan.js
    ```


### 拥有 keystore，知道密码，恢复私钥
[Paladz](https://github.com/Paladz): 
>需要暴力推 idx 但是难度不大

[wincss](https://github.com/wincss):
>和生成了多少地址有关系，不需要遍历所有的 idx ，做几次付款交易，通过找钱生成的地址就都回来了

## 运行在 以太坊 上原 erc20 btm 合约审计
nil

## 运行在 btm 上合约的审计
nil

## bytom go语言代码审计
nil

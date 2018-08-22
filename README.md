# BtmVulScan

## bytomd 节点安全性审计
1. 扫描 节点是否打开 9888 端口, 或者 __先知计划__ 中探测到的节点
2. 如果打开，并且使用了 `--auth.disable` 取消了 require  `accsess_token` 那么钱包可被远程访问，存在危险，比如看交易/余额，导出 keystore, 弱密码爆破 等等,
甚至，比如 通过 `connect-peer`, `disconnet-peer` 恶意隔离网络，构造区块/交易

### bytomd 弱密码爆破


## 拥有 keystore，知道密码，恢复私钥
[Paladz]: 
>>>需要暴力推 idx 但是难度不大

[wincss]""
>>>和生成了多少地址有关系，不需要遍历所有的 idx ，做几次付款交易，通过找钱生成的地址就都回来了

## 运行在 以太坊 上原 erc20 btm 合约审计
nil

## 运行在 btm 上合约的审计
nil

## bytom go语言代码审计
nil

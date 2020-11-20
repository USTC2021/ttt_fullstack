# git 的分支

创建仓库(.git隐藏文件)
- 克隆 git clone 仓库地址
    创建分支并且切换到分支上 git checkout -b dev
    切换到分支上 git checkout main
    合并分支 git merge dev
    删除分支 git branch -d dev
    查看状态 git status
    查看分支情况 git log
    将dev合并到master上，并且不启用快进模式 git merge --no-ff -m 'merge with no-ff' dev
    尘封地址 git stash list
    封印 git stash pop
    查看到上一次未提交更改的情况 git diff 文件名
    ```未提交到远程仓库反悔
    回退到上一个版本 git reset --hard HEAD^(也可以是commit记录)
    ```
- git init (创建了.git隐藏文件但没有与GitHub中仓库连接)
  git add .
  git commit -m ''
  git remote add git-learn(别名) 仓库地址
  git push
  git push --set-upstream git-learn master
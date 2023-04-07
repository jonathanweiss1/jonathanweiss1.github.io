---
title: Fix git credential manager wrong username
slug:  git-credential-manager-uses-wrong-username
tag: git, programming, how-to
image: images/git.png
---

GitHub is the version control system of choice for many programmers. When working with multiple GitHub accounts on the same device, i recently ran into an issue where git tried to use the wrong user account while trying to push to GitHub.

<!--more-->
GitHub is the version control system of choice for many programmers. When working with multiple GitHub accounts on the same device, i recently ran into an issue where git tried to use the wrong user account while trying to push to GitHub.

To resolve this, try to follow these steps:

<br />
Navigate to the repository folder, then use 

```git credential-manager delete https://github.com```

to remove the old user account.

<br />
Make sure that you are signed in to the GitHub Account you want to use in your web browser. The next time you use 

```git push```

you should be prompted to connect the current GitHub account.
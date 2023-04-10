---
title: How to recombine split zip folders
slug:  recombine-split-zip-folders
tag: files, programming, how-to
image: /images/zip.png
---

This short post shows how split zip files can be recombined so that you can extract the content. 
<!--more-->

If you ever get a compressed .zip folder that has been split into multiple smaller ones (like data.zip.001, data.zip.002, ...), you can simply use your command line to combine them back into one. A folder that has been split like this is just one large file that has been cut into multiple parts. So just take those parts and stick them back together:

Navigate to the folder where your zip is located. The files should look something like this:

```
    data.zip.001
    data.zip.002
    data.zip.003
```

If you are on windows and the files are located on a local drive, use:

```copy /b data.zip.001+data.zip.002+data.zip+003 data.zip```
to join them.

If the files are located on a remote drive, use:
``` copy /b /z data.zip.001+data.zip.002+data.zip+003 data.zip```

Header image created by Smashicons on [Flaticon](https://www.flaticon.com/free-icons/zip-format).
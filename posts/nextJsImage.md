---
title: "[NEXT.js] How to use Image component"
date: "September 13 2022"
excerpt: "Use case of Image component"
cover_image: "/images/posts/next.png"
alt: "image"
tags: ["NextJs", "Image"]
---

This is the Image Component and Image Optimization.
<br>

## Dependency
```javascript
"marked": "^4.1.0",
"next": "12.2.5",
```
<br>

## How to use?
```javascript
import Image from "next/image";

<Image
   src={obj.img}
   alt={obj.title}
   layout="fill"
   objectFit="cover"
   objectPosition="50% 0"
   width="280px"
   height="150px"
 ></Image>

```
The <Image /> component requires 
src URL,   width and height or layout=fill

<br>

## What is width and height for?

These two are size for the image, but it doesn’t care about the ratio.
so the image size will be magnified or scaled down vertically or horizontally, while braking the ratio if the ratio of width and height  in the component not the same as the image. 

<br>

## What is layout=“fill”?
```javascript
<div style={{
    width:"200px",
    height:"100px",
    position:"relative"}}>
<Image
   src={obj.img}
   alt={obj.title}
   layout="fill"
 ></Image>
</div>
```

layout=“fill” will make the image expands till the parent width and height. This might brake the ratio as the same as above.

<br>

## How to keep the ratio?
```javascript
<Image
   src={obj.img}
   alt={obj.title}
   layout="fill"
   objectFit="content"
 ></Image>
```

Generally there are two ways. first, set width and height which ratio is the exactly the same as the image ratio. But this is is not optimal for dynamic image size. Better idea is use objectFit = content or cover. 
Content makes the image size change to the prop size until the image width or height meet while keeping the ratio. In result, blank space might be applied.
Cover makes the image size change to the set size until both the image width and height meet. In result, the image size scale up or down toward the center and some part might be stick out.

<br>

## Use objectPosition to control the stick out.
```javascript
<Image
   src={obj.img}
   alt={obj.title}
   layout="fill"
   objectFit="cover"
   objectPosition="50% 0"
 ></Image>

```

The objectPosition attribute handles the stick out. Default value is 
```javascript
   objectPosition="50% 50%"
```
 This means move to the center of the image. Left value indicates x-axis.that 0 is left, 100 is right.
The right value indicates y-axis that 0 is top to bottom 100.

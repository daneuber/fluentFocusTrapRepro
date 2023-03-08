# Repro of Fluent Focus Trap issue w iFrame

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Demos issue of Fluent [Dialog](https://developer.microsoft.com/en-us/fluentui#/controls/web/dialog) / [FocusTrap](https://developer.microsoft.com/en-us/fluentui#/controls/web/focustrapzone) with inner iframe element not properly trapping focus

Use `npm start` to launch repro

https://user-images.githubusercontent.com/22989057/223813158-b035b696-a380-4f52-81f9-e568de66a9ba.mp4

Raw HTML produced in repro of issue: 
```
<div id="ModalFocusTrapZone39" class="ms-Dialog-main main-114">
<div aria-hidden="true" tabindex="0" data-is-visible="true" data-is-focus-trap-zone-bumper="true" style="pointer-events: none; position: fixed;">
</div>
<div class="ms-Modal-scrollableContent scrollableContent-110" data-is-scrollable="true">
<div class="content-121">
<div class="ms-Dialog-header header-123">
<div id="Dialog37-title" role="heading" aria-level="1" class="ms-Dialog-title title-126">
</div>
<div class="topButton-127"></div>
</div>
<div class="ms-Dialog-inner inner-124">
<div class="ms-Dialog-content innerContent-125">
<iframe src="../innerFrameContent.html" title="test iframe">
#document
<html>
<head><head>
<body style="background-color:powderblue">
        <p>iframe content text here</p>
        <div class="modalButtons">
        <button type="button" onclick="alert('Hello world!')">btn1</button>
        <button type="button" onclick="alert('Hello world!')">btn2</button>
        <button type="button" onclick="alert('Hello world!')">btn3</button>
        <button type="button" onclick="alert('Hello world!')">btn4</button>
        </div>
</body>
</html>
</iframe>
<div aria-hidden="true" tabindex="0" data-is-visible="true" data-is-focus-trap-zone-bumper="true" style="pointer-events: none; position: fixed;"></div></div>
```

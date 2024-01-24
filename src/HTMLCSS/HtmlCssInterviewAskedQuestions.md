//pending
--->defer and async
 doctype
div span
new html5features
page responsive using html how(meta tags) 
semantic vs normal
Describe HTML layout structure.
display block inline
centering an element
canvas breif
zindex
semantic tags use
block vs inline
image height change wihtout using height width
grid vs flex 
css vs sass,mixins, compile time or run time
dark mode after 6pm how?
form validation only using html. 
ul to ol. 
sass mixins and variables. can variables be done in css3? 
preprocessor ,use
inline vs blcok
psudeo class pseudo element
//pending
________________________________________________________________________________
**-->what is box model?**
css box model is simply a box that wraps around every html element.it consists of: content, padding border and margin.box model works in a way such that setting width and height properties of an element with CSS, sets width and height of the content area only. total width and height of an element comes by including the padding and borders.
Total element width = width + left padding + right padding + left border + right border
Total element height = height + top padding + bottom padding + top border + bottom border
margin is not included in the actual size of the box. The box's total width and height stops at the border.
box-sizing property allows us to include the padding and border in an element's total width and height.
box-sizing: content-box - default ,only content, padding border not included
box-sizing: border-box - all included
**-->how to include css in a html file?**
inline css- style attribute
internal css- <style> tag in <head> or <body>
external css-same project or from some other server hosted file-
<!-- <link rel="stylesheet" type="text/css" href="styles.css">
<link rel="stylesheet" type="text/css" href="https://example.com/path/to/external-styles.css"> -->
**position property**
static, relative, fixed, absolute, sticky
-position: static-default-positioned according to the normal flow of the page-top, bottom, left, and right properties dont affect
-relative - positioned relative to its normal position - top, right, bottom, and left work-other content DO NOT adjust to fit into any gap left by the element
-fixed-positioned relative to the viewport-means it always stays in the same place even on scrolling-top, right, bottom, and left works-no gap is created here
-absolute-positioned relative to the nearest positioned ancestor(not sticky)-instead of positioned relative to the viewport,like fixed-if an absolute positioned element has no positioned ancestors,it uses the document body, and moves along with page scrolling-absolute positioned elements are removed from the normal flow, and can overlap elements.
div.relative {position: relative;}
div.absolute {position: absolute;top: 80px;right: 0;}
-sticky-positioned based on the user's scroll position-relative and fixed-positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed);
-position: absolute or position: fixed, the element is taken out of the normal flow, and other elements may be positioned as if the absolutely or fixed positioned element does not exist


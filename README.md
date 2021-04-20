# Five Day Forecast built w/ React
I built this to get back in the hang of things using React. This is the first project I built with extensive usage of react hooks. I also experimented with React-Bootstrap for the first time after working with it a bit in a Web Dev Simplified Tutorial I followed (link: https://youtu.be/tBr-PybP_9c). 

## Cool stuff:

I went back and forth on whether I should use Moment or datefns to help with showing the date in each rendered forecast box. I ended up using neither, and worked with the Date and Intl.DateTimeFormat to format the date. I thought it was cool that I could do it with regular stuff included with browser javascript, at least.

My decision to forego the extra time libraries started here:
https://dev.to/dmtrkovalenko/you-might-not-need-date-fns-23f7

  
##Todos

-Create a button that switches from imperial units to metric

-Add a form bar that allows the user to input a zipcode

-Switch from card graphics to a table graphic for the forecast on smaller devices

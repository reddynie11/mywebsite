      
                
                navigator.getBattery().then(function(battery) 
                {   
                    var bar = document.getElementById("progress");
                    var output = document.getElementById("out");
                    
                    var abc = battery.level*100+"%";
                    console.log(battery.level)
                    bar.setAttribute("style", `width:${abc}`)
                    output.innerHTML = "Your device current battery level is " + Math.floor(battery.level*100) + "%";
                    console.log(typeof(abc) )
                    if (abc >= "85%")
                    {
                        bar.setAttribute("style", `width:${abc}; background : green;`)
                        document.getElementById("msg").innerText = "*Device battery is almost full";
                        document.getElementById("msg").setAttribute("style", `color : green;`)
                    }
                    else if (abc >= "61%" && abc <= "84%")
                    {
                        bar.setAttribute("style", `width:${abc}; background : #FF9900;`)
                        document.getElementById("msg").innerText = "*Device battery is at optimal level, please carry on with your work";
                        document.getElementById("msg").setAttribute("style", `color : #FF9900;`)
                    }
                    else if (abc >= "20%" && abc <= "60%")
                    {
                        bar.setAttribute("style", `width:${abc}; background : #FFC300;`)
                        document.getElementById("msg").innerText = "*Device battery is halfway, recommend to charge";
                        document.getElementById("msg").setAttribute("style", `color : #FFC300;`)
                    }
                    else
                    {
                        bar.setAttribute("style", `width:${abc}; background : red;`)
                        document.getElementById("msg").innerText = "*Battery low !!! Kindly charge your device to avoid unexpected shutdown";
                        document.getElementById("msg").setAttribute("style", `color : red;`)
                    }
                    

                    // if(battery.level >= 0.75 && battery.level < 1)
                    //     {
                    //         // // var abc = battery.level*100+"%";
                    //         // output.innerHTML = "Your current battery level is " + battery.level*100 + "%";
                    //         // document.getElementById("msg").innerText = "*Device battery is almost full";
                    //         // bar.setAttribute("style", `width:${abc}`)
                    //         bar.setAttribute("style", `background : green;`)
                    //         // document.getElementById("msg").setAttribute("style", `color : green;`)
                    //         // document.getElementById("bar").setAttribute("style", `border : 2px solid green;`)
                    //     }
                    // else if(battery.level >= 0.5 && battery.level < 0.75)
                    //     {
                    //         // output.innerHTML = "Your current battery level is " + battery.level*100 + "%";
                    //         // document.getElementById("msg").innerText = "*Device battery is at optimal level, please carry on with your work";
                    //         // bar.setAttribute("style", `width:${abc}`)
                    //         bar.setAttribute("style", `background : orange;`)
                    //         // document.getElementById("bar").setAttribute("style", `border : 2px solid orange;`)
                    //     }
                    // else if(battery.level >= 0.2 && battery.level < 0.5)
                    //     {
                    //         // var abc = battery.level*100+"%";
                    //         // output.innerHTML = "Your current battery level is " + battery.level*100 + "%";
                    //         // document.getElementById("msg").innerHTML = "*Device battery is at optimal level, please carry on with your work";
                    //         // bar.setAttribute("style", `width:${abc}`)
                    //         bar.setAttribute("style", `background : yellow;`)
                    //         // document.getElementById("bar").setAttribute("style", `border : 2px solid yellow;`)
                    //     }
                    // else(battery.level >= 0.01)
                    //     {
                    //         // output.innerHTML = "Your current battery level is " + battery.level*100 + "%";
                    //         // document.getElementById("msg").innerText = "*Battery low !!! Kindly charge your device to avoid unexpected shutdown";
                    //         // bar.setAttribute("style", `width:${abc}`)
                    //         bar.setAttribute("style", `background : red;`)
                    //         // document.getElementById("msg").setAttribute("style", `color : red;`)
                    //     // }
                    





                    // output.innerHTML = "Your curent battery level is " + battery.level*100 + "%";
                    // var abc = battery.level*100+"%";
                    // console.log(abc)
                    // output.innerHTML = "Your current battery level is " + battery.level*100 + "%";
                    // bar.setAttribute("style", `width: ${abc}`)
                    // if(battery.level < 50) batfil.style.background = #FF5722;
                    
                });

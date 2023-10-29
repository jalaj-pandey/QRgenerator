function genQR()
        {
            var gapi="https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
            var myimg=document.getElementById("img");
            var mytext=document.getElementById("qrtext").value;
            var mysize=document.getElementById("size").value;

            if (mytext!=="" && mysize=="350")
            {
                myimg.src=gapi+"350x350"+"&chl="+mytext;
                // https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=hello
            }

            else if(mytext!=="" && mysize=="150")
            {

                myimg.src=gapi+"150x150"+"&chl="+mytext;
            }

            else if(mytext!=="" && mysize=="200")
            {
                myimg.src=gapi+"200x200"+"&chl="+mytext;
            }

            else if (mytext!=="" && mysize=="250")
            {
                myimg.src=gapi+"250x250"+"&chl="+mytext;
            }

            else if (mytext!=="" && mysize=="300")
            {
                myimg.src=gapi+"300x300"+"&chl="+mytext;
            }

            else
            {
                alert("Please Enter Text");
            }
        
        }

        function genTQR()
        {
            var gapi="https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
            var myimg=document.getElementById("img");
            var mytext=document.getElementById("qrtfile").value;
            var mysize=document.getElementById("size").value;

            if (mytext!=="" && mysize=="350")
            {
                myimg.src=gapi+"350x350"+"&chl="+mytext;
            }

            else if(mytext!=="" && mysize=="150")
            {

                myimg.src=gapi+"150x150"+"&chl="+mytext;
            }

            else if(mytext!=="" && mysize=="200")
            {
                myimg.src=gapi+"200x200"+"&chl="+mytext;
            }

            else if (mytext!=="" && mysize=="250")
            {
                myimg.src=gapi+"250x250"+"&chl="+mytext;
            }

            else if (mytext!=="" && mysize=="300")
            {
                myimg.src=gapi+"300x300"+"&chl="+mytext;
            }

            else
            {
                alert("Please Upload your file");
            }
        
        }

        function genMQR()
        {
            var gapi="https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
            var myimg=document.getElementById("img");
            var mytext=document.getElementById("qrmedia").value;
            var mysize=document.getElementById("size").value;

            if (mytext!=="" && mysize=="350")
            {
                myimg.src=gapi+"350x350"+"&chl="+mytext;
            }

            else if(mytext!=="" && mysize=="150")
            {

                myimg.src=gapi+"150x150"+"&chl="+mytext;
            }

            else if(mytext!=="" && mysize=="200")
            {
                myimg.src=gapi+"200x200"+"&chl="+mytext;
            }

            else if (mytext!=="" && mysize=="250")
            {
                myimg.src=gapi+"250x250"+"&chl="+mytext;
            }

            else if (mytext!=="" && mysize=="300")
            {
                myimg.src=gapi+"300x300"+"&chl="+mytext;
            }

            else
            {
                alert("Please Upload your file");
            }
        
        }
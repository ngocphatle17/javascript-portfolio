var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// Declare a variable to keep track of the currently active tab
let activeTabName = null;

function opentab(tabname, event) {
    if (activeTabName === tabname) {
        event.currentTarget.classList.remove("active-link");
        document.getElementById(tabname).classList.remove("active-tab");
        activeTabName = null;
    } else {
        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
        activeTabName = tabname;
    }
}


var sidemenu = document.getElementById("sidemenu");

const scriptURL = 'https://script.google.com/macros/s/AKfycbymX5w_Hz6BtG-tptzF-yMfc4EJXsBAlLNRHFJ8jYw1yvmB3AkCbM2Py_uW2cptbJGd/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg");

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{ 
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
  })

  function trackGitHubClick(event) {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();
    
    // Track the click event if needed
    // Add any tracking code here
    
    // Open the specified URL in the current tab
    var url = "https://github.com/ngocphatle17/personal-projects/tree/main/WeatherApp-main";
    window.location.href = url;
}


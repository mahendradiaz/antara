$(function() {
    // Indonesia
    $(".id").click(function(){
        // Header
        // $(".navbar-nav").children().eq(0).text("Beranda");
        // $(".navbar-nav").children().eq(1).text("Tentang Kami");
        // $(".navbar-nav").children().eq(2).text("PLTS Atap");
        // $(".navbar-nav").children().eq(3).text("Tanpa Investai");
        // $(".navbar-nav").children().eq(4).text("F.A.Q");
        // $(".navbar-nav").children().eq(5).text("Kontak");
        $(".dropdown-toggle").removeClass(".change-en");
        $(".dropdown-toggle").addClass(".change-id");
        // Section
        $(".h1").text("Menjadikan warga negara Indonesia menjadi energi mandiri.");
        $(".h4").text("Hadirkan akses energi terbaru ke jutaan orang");
        $(".calculate .title").text("Hitung tabungan Anda");
        $(".form-label1").text("Input Listrik Perbulan");
        $(".form-label2").text("Daya Listrik Terpasang (Watt)");
        // About
    });
});

$(function() {
    // English
    $(".en").click(function() {
        // Header
        // $(".navbar-nav").children().eq(0).text("Home");
        // $(".navbar-nav").children().eq(1).text("About Us");
        // $(".navbar-nav").children().eq(2).text("Roof PLTS");
        // $(".navbar-nav").children().eq(3).text("No Invesment");
        // $(".navbar-nav").children().eq(4).text("F.A.Q");
        // $(".navbar-nav").children().eq(5).text("Contact");
        $(".dropdown-toggle").removeClass(".change-id");
        $(".dropdown-toggle").addClass(".change-en");
        // Section
        $(".h1").text("Making Indonesian citizens become energy independent.");
        $(".h4").text("Bring access to renewable energy to millions of people");
        $(".calculate .title").text("Calculate Your Savings");
        $(".form-label1").text("Monthly Electricity Input");
        $(".form-label2").text("Installed Electrical Power (Watts)");
        // About
    });
});
$(document).ready(function() {
    var content = {
        'ar': {
            'user': 'حسـابي',
            'hero-title': 'عيش حيث يكون أسلوبك في الموضة',
            'description': 'اكتشف الجمال والابتكار في طيفـاني ، حيث يلتقي التراث الإماراتي بالابتكار العالمي. جرب التسوق متعدد الأبعاد واستكشف فرص الاستثمار الفريدة والعملات المشفرة والأزياء الفاخرة والتصميم الحديث، وواجهة سهلة الاستخدام . التسليم إلى جميع أنحاء العالم . انضم إلينا الآن للحصول على تجربة تسوق استثنائية في طيفـاني',
            'linkCommunicate' : 'التواصـل',
            'linkShopping' : 'التسـوق',
            'linkAuction' : 'المـزاد',
            'linkTravel' : 'السفـر',
            'linkCryptocurrencies' : 'العملات الرقمية',
            'linkAdvertising' : 'الإعـلان',
            'linkLibrary' : 'المكتبة',
            'linkFinanceInvestment' : 'تمويل واستثمار',
            'OfficeAdd':'عنوان المكتب',
            'emailAdd':'راسلنا على الايميل',
            'phoneAdd':'الهاتف',
            'officeAddDetails': 'دولة الامارات العربية المتحده ، ابوظبي ، شارع البطين 17 ، ظبي 20028',
            'title_1':'عن شركتنا',
            'title_2':'روابط مفيدة',
            'title_3':'مانقدمـه',
            'title_4':'معرض الصور',
            'aboutOurCompanyDesc':'يعتبر موقع Taifany وجهة موثوقة لشراء ملابس عالية الجودة ومنتجات خاضعة للمراقبة بعناية. يمكنك التسوق بثقة من خلال موقعنا الإلكتروني، حيث نهتم بضمان جودة كل منتج يتم عرضه وتقديمه بأعلى معايير الجودة والمتانة.',
            'Shopping':'التسـوق',
            'Auction':'المـزاد',
            'Travel':'السفـر',
            'Cryptocurrencies':'العملات الرقمية',
            'Advertising':'الإعـلان',
            'Communicate':'التواصـل',
            'FinanceInvestment':'تمويل واستثمار',
            'Library':'المكتبة',
            'CAGC':'إنشاء مجتمع جيد',
            'SHQP':'بيع منتجات عالية الجودة',
            'CSAB':'ربط البائعين والمشترين',
            'TAHB':'حجوزات السفر والعطلات',
            'PWA':'توفير إعلانات واسعة',
            'IC':'تقديم العملات الرقمية',
            'CAPP':'ملفات تعريف الارتباط وسياسة الخصوصية',
            'TAC':'الشروط والأحكام',
        },
        'en': {
            'user' : 'arithmetical',
            'hero-title': 'Live where your style is in fashion',
            'description': 'Discover beauty and innovation at Tiffany, where Emirati heritage meets global innovation. Experience multi-dimensional shopping and explore unique investment opportunities, cryptocurrencies, luxury fashion, modern design, and a user-friendly interface. Worldwide delivery. Join us now for an exceptional shopping experience at Tiffany',
            'linkCommunicate' : 'Communicate',
            'linkShopping' : 'Shopping',
            'linkAuction' : 'Auction',
            'linkTravel' : 'Travel',
            'linkCryptocurrencies' : 'Cryptocurrencies',
            'linkAdvertising' : 'Advertising',
            'linkLibrary' : 'Library',
            'linkFinanceInvestment' : 'Finance & Investment',
            'OfficeAdd':'Office Address',
            'emailAdd':'Send us an email',
            'phoneAdd':'Phone',
            'officeAddDetails': 'United Arab Emirates, Abu Dhabi, Al Bateen Street 17, Abu Dhabi 20028',
            'title_1':'About Our Company',
            'title_2':'Useful Links',
            'title_3':'What we offer',
            'title_4':'Photo Gallery',
            'aboutOurCompanyDesc':'Taifany is a reliable destination for high-quality clothing and carefully monitored products. You can shop with confidence through our website, as we take care of ensuring the quality of every product displayed and presented with the highest standards of quality and durability.',
            'Shopping':'Shopping',
            'Auction':'Auction',
            'Travel':'Travel',
            'Cryptocurrencies':'Cryptocurrencies',
            'Advertising':'Advertising',
            'Communicate':'Communicate',
            'FinanceInvestment':'Finance & Investment',
            'Library':'Library',
            'CAGC':'Create a good community',
            'SHQP':'Sell high quality products',
            'CSAB':'Connecting sellers and buyers',
            'TAHB':'Travel & Holiday Bookings',
            'PWA':'Provide wide advertising',
            'IC':'Introducing Cryptocurrencies',
            'CAPP':'Cookies and Privacy Policy',
            'TAC':'Terms & Conditions',
        }
    };

    // Check if language preference is stored in local storage
    var langPref = localStorage.getItem('langPref');

    // If language preference is not stored, default to Arabic
    if (!langPref) {
        langPref = 'ar';
        localStorage.setItem('langPref', langPref);
    }

    // Update dropdown button text based on language preference
    // $('#languageDropdown').text(langPref === 'en' ? 'English' : 'عربي');

    // Update content based on language preference
    $('.user').text(content[langPref]['user']);
    $('.hero-title').text(content[langPref]['hero-title']);
    $('.description').text(content[langPref]['description']);
    $('#linkCommunicate').text(content[langPref]['linkCommunicate']);
    $('#linkShopping').text(content[langPref]['linkShopping']);
    $('#linkAuction').text(content[langPref]['linkAuction']);
    $('#linkTravel').text(content[langPref]['linkTravel']);
    $('#linkCryptocurrencies').text(content[langPref]['linkCryptocurrencies']);
    $('#linkAdvertising').text(content[langPref]['linkAdvertising']);
    $('#linkLibrary').text(content[langPref]['linkLibrary']);
    $('#linkFinanceInvestment').text(content[langPref]['linkFinanceInvestment']);
    $('#OfficeAdd').text(content[langPref]['OfficeAdd']);
    $('#emailAdd').text(content[langPref]['emailAdd']);
    $('#phoneAdd').text(content[langPref]['phoneAdd']);
    $('#officeAddDetails').text(content[langPref]['officeAddDetails']);
    $('#title_1').text(content[langPref]['title_1']);
    $('#title_2').text(content[langPref]['title_2']);
    $('#title_3').text(content[langPref]['title_3']);
    $('#title_4').text(content[langPref]['title_4']);
    $('#aboutOurCompanyDesc').text(content[langPref]['aboutOurCompanyDesc']);
    $('#Shopping').text(content[langPref]['Shopping']);
    $('#Auction').text(content[langPref]['Auction']);
    $('#Travel').text(content[langPref]['Travel']);
    $('#Cryptocurrencies').text(content[langPref]['Cryptocurrencies']);
    $('#Advertising').text(content[langPref]['Advertising']);
    $('#Communicate').text(content[langPref]['Communicate']);
    $('#FinanceInvestment').text(content[langPref]['FinanceInvestment']);
    $('#Library').text(content[langPref]['Library']);
    $('#CAGC').text(content[langPref]['CAGC']);
    $('#SHQP').text(content[langPref]['SHQP']);
    $('#CSAB').text(content[langPref]['CSAB']);
    $('#TAHB').text(content[langPref]['TAHB']);
    $('#PWA').text(content[langPref]['PWA']);
    $('#IC').text(content[langPref]['IC']);
    $('#CAPP').text(content[langPref]['CAPP']);
    $('#TAC').text(content[langPref]['TAC']);
    
    // Set lang attribute on html element based on language preference
    $('html').attr('lang', langPref);

    // Set language preference when dropdown item is clicked
    $('.dropdown-item').click(function() {
        var selectedLang = $(this).data('lang');
        // $('#languageDropdown').text($(this).text());
        $('.user').text(content[selectedLang]['user']);
        $('.hero-title').text(content[selectedLang]['hero-title']);
        $('.description').text(content[selectedLang]['description']);
        $('#linkCommunicate').text(content[selectedLang]['linkCommunicate']);
        $('#linkShopping').text(content[selectedLang]['linkShopping']);
        $('#linkAuction').text(content[selectedLang]['linkAuction']);
        $('#linkTravel').text(content[selectedLang]['linkTravel']);
        $('#linkCryptocurrencies').text(content[selectedLang]['linkCryptocurrencies']);
        $('#linkAdvertising').text(content[selectedLang]['linkAdvertising']);
        $('#linkLibrary').text(content[selectedLang]['linkLibrary']);
        $('#linkFinanceInvestment').text(content[selectedLang]['linkFinanceInvestment']);
        $('#OfficeAdd').text(content[selectedLang]['OfficeAdd']);
        $('#emailAdd').text(content[selectedLang]['emailAdd']);
        $('#phoneAdd').text(content[selectedLang]['phoneAdd']);
        $('#officeAddDetails').text(content[selectedLang]['officeAddDetails']);
        $('#title_1').text(content[selectedLang]['title_1']);
        $('#title_2').text(content[selectedLang]['title_2']);
        $('#title_3').text(content[selectedLang]['title_3']);
        $('#title_4').text(content[selectedLang]['title_4']);
        $('#aboutOurCompanyDesc').text(content[selectedLang]['aboutOurCompanyDesc']);
        $('#Shopping').text(content[selectedLang]['Shopping']);
        $('#Auction').text(content[selectedLang]['Auction']);
        $('#Travel').text(content[selectedLang]['Travel']);
        $('#Cryptocurrencies').text(content[selectedLang]['Cryptocurrencies']);
        $('#Advertising').text(content[selectedLang]['Advertising']);
        $('#Communicate').text(content[selectedLang]['Communicate']);
        $('#FinanceInvestment').text(content[selectedLang]['FinanceInvestment']);
        $('#Library').text(content[selectedLang]['Library']);
        $('#CAGC').text(content[selectedLang]['CAGC']);
        $('#SHQP').text(content[selectedLang]['SHQP']);
        $('#CSAB').text(content[selectedLang]['CSAB']);
        $('#TAHB').text(content[selectedLang]['TAHB']);
        $('#PWA').text(content[selectedLang]['PWA']);
        $('#IC').text(content[selectedLang]['IC']);
        $('#CAPP').text(content[selectedLang]['CAPP']);
        $('#TAC').text(content[selectedLang]['TAC']);
        
        // Store language preference in local storage
        localStorage.setItem('langPref', selectedLang);
        
        // Change lang attribute on html element based on language
        $('html').attr('lang', selectedLang);
    });
});


$('.mobile_menu_button').click(function(){
    $('.mobile-menu').toggleClass('extend');
});

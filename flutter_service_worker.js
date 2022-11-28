'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ee6948888aa8b96464f39d838e354959",
"assets/assets/animations/categoryloading.json": "a430e90698fb9c40701082592a529845",
"assets/assets/animations/checking-out-online.json": "cd8a66c797ed824cecdd17c64812dc52",
"assets/assets/animations/driver-in-store.json": "2162ce2ca19633d6e2aac52a9137a535",
"assets/assets/animations/ecommerce-mob.json": "cd3b2f279757fa1e0c776d36f7c50a23",
"assets/assets/animations/ecommerce.json": "57dd919c76e862b91ffc5d5a2c0a558e",
"assets/assets/animations/grocery-basket.json": "0428ea564ae22b0e1f77706c13f4b4bb",
"assets/assets/animations/loading-cart.json": "891b52947baf38ff542d01b7ea6b9a59",
"assets/assets/animations/man-online-shopping.json": "a6245acfc49916e92cb0f15fb6e72784",
"assets/assets/animations/mobile-discount.json": "c26360c2bebf6f0812ae1dbf8016acbb",
"assets/assets/animations/moving-cart.json": "876bd8603789ea38d2a2356376fedd39",
"assets/assets/animations/shopping-green.json": "65f1673f701d86fa023d2e1ffaacb61e",
"assets/assets/animations/shopping-loader.json": "c755f92bb263a166d49324c7c65b6012",
"assets/assets/animations/speed-cart.json": "a4cb41105b0982b51035896cd6be6e22",
"assets/assets/animations/splash_cart.json": "a17182757fcd95c3f18f75f46d100694",
"assets/assets/fonts/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/assets/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/assets/fonts/OpenSans-Bold.ttf": "0062c34665a3fc0f2278cd4e955702ec",
"assets/assets/fonts/OpenSans-Regular.ttf": "5a798cdadc7cd321e3f72425b70bface",
"assets/assets/fonts/Quicksand-Bold.ttf": "809cd8ab97c465b57cb1a44b1795f12c",
"assets/assets/fonts/Quicksand-Regular.ttf": "678b12a6a938c32eb5fa88f2f439c2df",
"assets/assets/html/payment.html": "4ace9cee360ae0b4afad11ef837b9daf",
"assets/assets/icons/account_icon.svg": "050bf198505a058640776b75526b21a0",
"assets/assets/icons/app_icon.svg": "70c6df4ae52c7b73d649d72c5a8e7bcc",
"assets/assets/icons/app_icon_color.svg": "8b764f839c415e3ad1234d230a9dbabd",
"assets/assets/icons/arrow_right.svg": "7d2e92d8f069ee2c73f1820beea62dfd",
"assets/assets/icons/Back%2520ICon.svg": "a1540761ddc4d5ebd1ebf7e732a7af0a",
"assets/assets/icons/Bell.svg": "03c0fc05f0c26d3107496511ef140dd2",
"assets/assets/icons/Bill%2520Icon.svg": "c14fba2dc1da1beac210bc96c90568a6",
"assets/assets/icons/Call.svg": "52af54660badff2b15a84fd34203c7ee",
"assets/assets/icons/Camera%2520Icon.svg": "25207a856bce06a7c1f4d695638a0383",
"assets/assets/icons/Cart%2520Icon.svg": "220f5aa89905b1351c4fdf71aee29f11",
"assets/assets/icons/cart_icon.svg": "2d0335789d308b6e20fb1405af3079ce",
"assets/assets/icons/Cash.svg": "9a1bfa4f03729b332bb98439f713637e",
"assets/assets/icons/Chat%2520bubble%2520Icon.svg": "3e6e1ab6925d3db86ce9bd109c121db0",
"assets/assets/icons/Check%2520mark%2520rounde.svg": "e83caa6ca41e8af9229ae29d79f9410b",
"assets/assets/icons/Close.svg": "70478a15e0479750b0b03e000041e9f3",
"assets/assets/icons/Conversation.svg": "291fb6c6acdeb807afb452ae90f930db",
"assets/assets/icons/Discover.svg": "0981b6e74080b318d0bb4255681d2e05",
"assets/assets/icons/Error.svg": "0f876e9b9170982e37bbf767c6ebb47f",
"assets/assets/icons/explore_icon.svg": "f199edd6cd3fcd75dc8991ecb28dfd3f",
"assets/assets/icons/facebook-2.svg": "48bf15d2057966765f384827997a2f41",
"assets/assets/icons/favourite_icon.svg": "723263c98b5f137431ee3883867f0ef8",
"assets/assets/icons/Flash%2520Icon.svg": "8b2bc2fd2894d143940eb565b4a827fe",
"assets/assets/icons/Game%2520Icon.svg": "f913dbd8d0e9e437cfb53d774eb980d9",
"assets/assets/icons/Gift%2520Icon.svg": "6feeb93f33263146741e38f4ebfbccbc",
"assets/assets/icons/google-icon.svg": "38e282dafbaaf9823263d49349670447",
"assets/assets/icons/google.png": "10588e251874bf5c9655289014073350",
"assets/assets/icons/Heart%2520Icon.svg": "a2be4f5f2079f5ff3dbd117eeaa9471e",
"assets/assets/icons/Heart%2520Icon_2.svg": "f728c6b3d75dfab6450f56a2a57633f0",
"assets/assets/icons/Location%2520point.svg": "146ea387710fa420046c0f71b89ad474",
"assets/assets/icons/location_icon.svg": "80fc62a68756ef27754a55638b3cbd1b",
"assets/assets/icons/Lock.svg": "44a5fb6d11a48fd52c87d95e34e7a689",
"assets/assets/icons/Log%2520out.svg": "ef8dc3d612e3e63ae4728a24d9982f13",
"assets/assets/icons/Mail.svg": "6b876f2539a1946b1a946e7a5646e909",
"assets/assets/icons/order_accepted_icon.svg": "3608e9fef718472b7274f615b90aad87",
"assets/assets/icons/Parcel.svg": "45a2e4513281a1c511cff0d7d86439d1",
"assets/assets/icons/Phone.svg": "589731a88a098c9c6d40e32bc11c3d83",
"assets/assets/icons/Plus%2520Icon.svg": "23bd873f0fdef239500d68a150f9fa93",
"assets/assets/icons/Question%2520mark.svg": "7d0f74b3eb3cbeac772cb6a41476cfcf",
"assets/assets/icons/receipt.svg": "e0ecaf4c17597903fa1e8ab3c28fa963",
"assets/assets/icons/remove.svg": "77f17bcf86cb62db1b3ce224d6cb6fd3",
"assets/assets/icons/Search%2520Icon.svg": "5383aff67a0cc61bc20b953c73d87469",
"assets/assets/icons/search_icon.svg": "b474aa3145b73d1859f07ef9e3a3fbd1",
"assets/assets/icons/Settings.svg": "d8fd4b8ed70a516c17d3d981d9a49999",
"assets/assets/icons/Shop%2520Icon.svg": "1eda40840728635d3279f313774d1675",
"assets/assets/icons/shop_icon.svg": "3aa0f795594c10d071400f02645cb2f0",
"assets/assets/icons/splash_screen_icon.svg": "c06d3ec42e6f85f00c3a13ce5b84e739",
"assets/assets/icons/Star%2520Icon.svg": "1ef6ad3bbe15947a5b4d9bf153101fd3",
"assets/assets/icons/Success.svg": "b0a226cdd68878cf33bddc8d9d2cc1f6",
"assets/assets/icons/Trash.svg": "f877c275194b39ca5f21fe7202ca852a",
"assets/assets/icons/twitter.svg": "2186bb91925602b76e5a4384b2198c06",
"assets/assets/icons/User%2520Icon.svg": "950d2f1652bdb59675231707a9124535",
"assets/assets/icons/User.svg": "737d49c1953f8098f618d523b45e5657",
"assets/assets/images/app_logo.png": "8154e20e34766a2143ac7bcdfa6a78b1",
"assets/assets/images/baby_products.jpg": "b41ca79e0b047c6ff021258a069091d9",
"assets/assets/images/bankbg.png": "0294141fa07e35f122937705f321a26b",
"assets/assets/images/beverages.png": "e1f34826f21cc2b99c189681748e83a1",
"assets/assets/images/big-saving.jpg": "4ad1f4f005b0e12480c557a1f27e333d",
"assets/assets/images/body-care.jpg": "8e7e447b474191de540a875b82e9a360",
"assets/assets/images/ecomm.png": "c4653f2f78726ae6a8893adce16f1dbd",
"assets/assets/images/empty-cart.png": "b1b688e0095750d92bf3e2ae1ca56862",
"assets/assets/images/empty_shopping_cart.png": "8700ed0beef824a140c0d18eb81f46e6",
"assets/assets/images/everyday.jpg": "61e1407479f88e823e21365752dc7d4c",
"assets/assets/images/freshfruits.jpg": "05c120d0ad8c2b50f2e47fba579e84b0",
"assets/assets/images/grocery-brand.jpg": "8ec26d15f1f0ab98d9e7c18061fe073e",
"assets/assets/images/grocerycover.jpg": "0d7a5a5194b34114b59ce5386ef4a4b5",
"assets/assets/images/groceryStaples.jpg": "df83267ec69d28b4a973a9711fa785a0",
"assets/assets/images/image-not-found.jpg": "87b4129c1c20e239f7067a8da85e5dac",
"assets/assets/images/Instant_Drinks.jpg": "65c3da5d43097deb2e955751613ad774",
"assets/assets/images/lightening.png": "c5e298ec82f820da126dc228d8b81169",
"assets/assets/images/logo.png": "acc002a58005c630b80e2c1e6750aaa4",
"assets/assets/images/make-it-easy.jpg": "b960cb99cb13ccfbd11a4504a55f71a6",
"assets/assets/images/masalas-cover.jpg": "72fdc079c9f857e61fb061c5663005b8",
"assets/assets/images/mastercard-2.png": "03c20b63d4ffa13484f48fac9d2e32b2",
"assets/assets/images/morefruits.png": "a9fee31b3412d6db53552167fee2c11e",
"assets/assets/images/oils.png": "03fde8155b7b795d3ea64e4fef1b574e",
"assets/assets/images/onboarding.png": "b41a2d966cdf37bf39a183c5159f24d3",
"assets/assets/images/Online_Groceries.png": "4d4fe333d8837045d94c1d4b9c16df5a",
"assets/assets/images/order_accepted_icon.svg": "3608e9fef718472b7274f615b90aad87",
"assets/assets/images/order_failed_image.png": "a7225a3f5470c2a17da11894749542b3",
"assets/assets/images/product-not-found.jpg": "1962a0e630c305dd2d3f94727366682c",
"assets/assets/images/splash-icon.png": "a5613050573455d02f11b2d6edc87886",
"assets/assets/images/visa.png": "e5102f3cf10261b0cf2ddb4c27e66f14",
"assets/assets/images/zigzag-pattern.jpg": "8af9721b40be1642649497bf71728d41",
"assets/FontManifest.json": "b457c9fe05c29f97e91ac3b03e2568ab",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "fec9a4cc2cceb2c1cfa8e735015c6b1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "1e30a675fd053dcfcc73d089d8664abf",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "1ecd7ffea8e67189a1521fb2bd172e0f",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-chrome-192x192.png": "37d78193be3fdf58af0ec9cfa7360833",
"icons/android-chrome-512x512.png": "718dda0e0aee8f3ed3b0d0a757b63932",
"icons/apple-touch-icon.png": "86ce45d935efbb2d9609770da9c38615",
"icons/favicon-16x16.png": "bc06e0568324c5f4e1c5214fa502f11a",
"icons/favicon-32x32.png": "66d8edce008a7506bb1c05f6c3aa361d",
"icons/favicon.ico": "1ecd7ffea8e67189a1521fb2bd172e0f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3bb3945b9b1011fcf38efd70afb3df6b",
"/": "3bb3945b9b1011fcf38efd70afb3df6b",
"main.dart.js": "7024df02711a4c9f535aada8f0f1cd78",
"manifest.json": "0eced926e2f3245d283b1236ceaedfd6",
"splash/img/dark-1x.png": "040339d71ce663a21c8961e5f4b02482",
"splash/img/dark-2x.png": "986fd6e6406476a7fa6004822859041d",
"splash/img/dark-3x.png": "b47e8a41a7705287e48e1c3cd6614a50",
"splash/img/dark-4x.png": "7ace9642c6eb8790bedab84f33e390c9",
"splash/img/light-1x.png": "040339d71ce663a21c8961e5f4b02482",
"splash/img/light-2x.png": "986fd6e6406476a7fa6004822859041d",
"splash/img/light-3x.png": "b47e8a41a7705287e48e1c3cd6614a50",
"splash/img/light-4x.png": "7ace9642c6eb8790bedab84f33e390c9",
"splash/splash.js": "f6ee10f0a11f96089a97623ece9a1367",
"splash/style.css": "1860cbbc7709f7c9fd89c89983d8ecfe",
"version.json": "edaebc6da95d1405c8737f78f65a32e1",
"web_interop.js": "b9df6a6b2bf6b2ebfec9c452dd59a6e9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

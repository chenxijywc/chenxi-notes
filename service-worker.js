/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.html",
    "revision": "0fd13e33f2fc61c7cb40f1a76441e447"
  },
  {
    "url": "404.html",
    "revision": "17473ba490b75d9b7b9dcbcbd3309971"
  },
  {
    "url": "advanced/1.html",
    "revision": "0e2e390131c7c26eb35d801b055ed793"
  },
  {
    "url": "assets/css/0.styles.6aaa91c1.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c898c94a.js",
    "revision": "f859965316b5618dde2481a5f7c70c71"
  },
  {
    "url": "assets/js/11.6c9678bb.js",
    "revision": "1978fece9b02f9cd38d70823d5fb5b53"
  },
  {
    "url": "assets/js/12.961e18aa.js",
    "revision": "5a0c3ab8b250983a7cf05e7b9e1c6a23"
  },
  {
    "url": "assets/js/13.08dd7336.js",
    "revision": "e9b0e167954a32bfb6e1fcb6b3dd2cec"
  },
  {
    "url": "assets/js/14.c80dd20d.js",
    "revision": "ddfe8ece402783d864667ccf5a249eb2"
  },
  {
    "url": "assets/js/15.49c201b0.js",
    "revision": "c9bbe7563ea4bea2fa23e4dc75b7b638"
  },
  {
    "url": "assets/js/16.c4506c79.js",
    "revision": "890c64c39c325215bb76f39e3435b77b"
  },
  {
    "url": "assets/js/17.6e9b6784.js",
    "revision": "988a9b4241f7c7d69fbd4a8aa5e28587"
  },
  {
    "url": "assets/js/18.795d0bd7.js",
    "revision": "0cfe65dcc49cae7e576255b8960ac0b4"
  },
  {
    "url": "assets/js/19.fa1d331a.js",
    "revision": "1a65eb6b41a7481a35f59e5ad7b060dd"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/20.618bc6cf.js",
    "revision": "9531ee777b739411ab9f1965de8ed5d4"
  },
  {
    "url": "assets/js/21.aeb44dfb.js",
    "revision": "117e545c64a4124962be3d978c9e6988"
  },
  {
    "url": "assets/js/3.cd76b007.js",
    "revision": "f43c80665f8a9334505220e32a4ab1dd"
  },
  {
    "url": "assets/js/4.1fe356a8.js",
    "revision": "946d0f7381a24b6ae6799b4a26e04b13"
  },
  {
    "url": "assets/js/5.9fc6dd91.js",
    "revision": "360502b0140606c1642dbf2a64b73ce4"
  },
  {
    "url": "assets/js/6.cdd0e9ef.js",
    "revision": "24bdecc83c6908bf246bacc12348ac82"
  },
  {
    "url": "assets/js/7.233e48b6.js",
    "revision": "be8b0aa611e361a2d5d33070b5e137ac"
  },
  {
    "url": "assets/js/8.21f96142.js",
    "revision": "ee94ac80d3f9a46e2abeb757b30cc000"
  },
  {
    "url": "assets/js/9.f0f81e07.js",
    "revision": "251eb1d67cf4aa47c18e06c0d9d0bed6"
  },
  {
    "url": "assets/js/app.5996fc64.js",
    "revision": "cd5118b11e14dcc9466059dcb0edb486"
  },
  {
    "url": "basic/1.html",
    "revision": "889341ed6c873520a5080088f92b813a"
  },
  {
    "url": "basic/10.html",
    "revision": "248b83587d0448098e4ae2250f6a0d92"
  },
  {
    "url": "basic/11.html",
    "revision": "5a8e9c67ca61052ffb96efaa5940ee6c"
  },
  {
    "url": "basic/2.html",
    "revision": "9a2b079d0f77e42b14b1b99f4bf6796a"
  },
  {
    "url": "basic/3.html",
    "revision": "91a9ad04bc1f862d9f6fbc20acc6f3a6"
  },
  {
    "url": "basic/4.html",
    "revision": "35d4e3c2b8487eae8d099c64158b8c5e"
  },
  {
    "url": "basic/5.html",
    "revision": "5a5cae08a454e196cf40f25c636de1cd"
  },
  {
    "url": "basic/6.html",
    "revision": "de14471c3cf36065a4b61ee5ce2bd514"
  },
  {
    "url": "basic/7.html",
    "revision": "c0f87cab61859d9557a22e86b43bf938"
  },
  {
    "url": "basic/8.html",
    "revision": "77b603bebe473aaeef67cbcb48ecb603"
  },
  {
    "url": "basic/9.html",
    "revision": "e1187b2dde744f939b0ce75c05eeac99"
  },
  {
    "url": "engineering/规范化/commit.html",
    "revision": "006a719faa1d3509cbbd49e49f974c0f"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "b21768ed0290a3e8f29ce22182134437"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/engineering/demo.jpeg",
    "revision": "90da577eabcac3026c17a83e67edc073"
  },
  {
    "url": "images/engineering/example.png",
    "revision": "1ecf7a843ed31b149cf86c669ad10910"
  },
  {
    "url": "images/gitcommit.jpg",
    "revision": "40f73e9e8c183461bada9b09dd93981d"
  },
  {
    "url": "images/photo.jpg",
    "revision": "a7aaffcbb35035872227d734eed24a3f"
  },
  {
    "url": "images/pink.jpg",
    "revision": "8dbee8cee20194743f2307bbfc5973bc"
  },
  {
    "url": "index.html",
    "revision": "058dea056f9df0e0b362103ff85611a8"
  },
  {
    "url": "interview/1.html",
    "revision": "5f8e6297bc30c94d10c8c065cee65a9c"
  },
  {
    "url": "others/1.html",
    "revision": "f52611b5f3773bf529f800f35abc4c94"
  },
  {
    "url": "others/guide.html",
    "revision": "4b89299ae63a0696ab93f2067771dfb0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const c=e=>a(e,d),b={module:{uri:d},exports:r,require:c};s[d]=Promise.all(f.map((e=>b[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-2572b17b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Theme Demo"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/220512-startup.html.6bf4f110.js",revision:"5bb4e8e4a7e185819a0c824dd69a43d4"},{url:"assets/220512-startup.html.d6544f26.js",revision:"53302e65cd8b537fc15fac67221404ee"},{url:"assets/404.81383b74.js",revision:"07528e87d0333ba81d6fc49d6a89da2b"},{url:"assets/404.html.8affa997.js",revision:"980f9b8fd491e4ae825c5f6b20c90c20"},{url:"assets/404.html.c51a5958.js",revision:"d64b20567ce888f90e08ec9acbdd81f9"},{url:"assets/app.fa5dba4b.js",revision:"745f3f0ec96199e1f6032fa9fb1773d1"},{url:"assets/article1.html.198e0fd5.js",revision:"5ea8a7dd27c388f5fda329adddb7d1bb"},{url:"assets/article1.html.52fdb601.js",revision:"07a76748a3c319a075b862d99fbcd099"},{url:"assets/article10.html.86256ec6.js",revision:"11f029d2696460f74304162308949f8c"},{url:"assets/article10.html.ca3a5f59.js",revision:"0e00eaa01f9727890f02e6284c5668ae"},{url:"assets/article11.html.610344b1.js",revision:"6c9b21b76c554b5555da84c0f2537b93"},{url:"assets/article11.html.d5dc0c75.js",revision:"d076a8446de68ee5a99111e1bda98ec0"},{url:"assets/article12.html.2d5461c0.js",revision:"bcf62bac0293f4f0397e8792091ecdef"},{url:"assets/article12.html.af8d7ff9.js",revision:"e3ad93a1d2459512f668b0ce545e900c"},{url:"assets/article2.html.97abf1f6.js",revision:"41424a5ed8486a62592eb7abbad4403f"},{url:"assets/article2.html.c2852c04.js",revision:"69191457adcfaebe0636b1e461509108"},{url:"assets/article3.html.587d5ba1.js",revision:"05c18108331ed4a61bd49fae9c4a3163"},{url:"assets/article3.html.6ab4bcbe.js",revision:"ccad13ac4821a92ea45b3a796ff79de9"},{url:"assets/article4.html.72c0f72f.js",revision:"7830bd7eb2b0e6c5c1eb19a8204a78f5"},{url:"assets/article4.html.ddffa24a.js",revision:"db0ad541e71e6e8efc36069077b98f26"},{url:"assets/article5.html.40f51c03.js",revision:"51d23273fa6bcbee9b63e9e92434ed55"},{url:"assets/article5.html.5e9f0178.js",revision:"a47b6a01b34aa3708f3f5f3491e8ca19"},{url:"assets/article6.html.4a113725.js",revision:"4270aa3c0fc6e4e8bf2aaa12f0003cec"},{url:"assets/article6.html.b8cfb8f0.js",revision:"304a71543938eb0ec137d16883714634"},{url:"assets/article7.html.55e69f97.js",revision:"aeb3226c617a535339c5224854a8f01b"},{url:"assets/article7.html.c8a04b56.js",revision:"698c5ebc5242a7382bb6df1d64d3c52b"},{url:"assets/article8.html.a93c4cf1.js",revision:"adc9f3b923b3bf6a8e9da625cadb7cd7"},{url:"assets/article8.html.ecd87351.js",revision:"4471254248f6a24bccb95a47f3ed651b"},{url:"assets/article9.html.1ea5e292.js",revision:"16f8c1aab298995448ef3ef4d1daf866"},{url:"assets/article9.html.93892cd6.js",revision:"c1bf8a9315d48d3cd785fcd1553a7764"},{url:"assets/auto.esm.15d52109.js",revision:"3005710dc3beaf11158e79fe70a4c0aa"},{url:"assets/Blog.69dcba97.js",revision:"5f1849d8af000cb0a9adc323c66fe62b"},{url:"assets/disable.html.268493fa.js",revision:"677fea737da85cca25a6e1c77197bdf7"},{url:"assets/disable.html.d09648c4.js",revision:"69577980568f036baa8eef2275fba0de"},{url:"assets/encrypt.html.2284abac.js",revision:"ab8a6ca7c1a20a7f1049ec765bc3ea8b"},{url:"assets/encrypt.html.60270f9e.js",revision:"5971074341327d1d3f1a47923647a50a"},{url:"assets/giscus.es.d2953791.js",revision:"c74b717a7906a84e4a2b2b6ba19b0954"},{url:"assets/highlight.esm.d982e650.js",revision:"3457767fb4f7fe757ad6fb071f162a85"},{url:"assets/home.html.5b4d947b.js",revision:"0d146e8266b3d8a894be094f7ad9286b"},{url:"assets/home.html.bc6d01f3.js",revision:"02fffa218d0dd12272d76a6fdbbb6cc6"},{url:"assets/index.1842ee54.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.html.0382fbf3.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.07b87b7d.js",revision:"189c6c167ed2ea8317e97e924b1d6815"},{url:"assets/index.html.10620a76.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.119e3d23.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.12686308.js",revision:"e826494719f96d27618dd600d901483f"},{url:"assets/index.html.1b5e89d3.js",revision:"5a71a2eecafb69294dc4b34c3e84df75"},{url:"assets/index.html.2362abee.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.24da97ee.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.2b33e771.js",revision:"38be38ec58cfcd98cf26a3c9106b2801"},{url:"assets/index.html.313a95a7.js",revision:"c0ec9136f5daa5524dc593231b6a8c58"},{url:"assets/index.html.35e692d3.js",revision:"1d8bdd5f05e9e42e88b49017645c5fd4"},{url:"assets/index.html.35f2afe0.js",revision:"c0a5d8118d6e83507fcd77ddf97dfa85"},{url:"assets/index.html.3d88e741.js",revision:"dde9f174b0ac5f7fadbfb288ac36030a"},{url:"assets/index.html.3e90e2b9.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.4c47ceb1.js",revision:"52ad3aad7f4e895ae73b47d413e9c181"},{url:"assets/index.html.58b4274a.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.614e4040.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.6f4d7110.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.74fda779.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.7da70a09.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.7dc24ff4.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.95d2bcd1.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.97e114da.js",revision:"ed36d97b07dec4ffd9384d5f67062674"},{url:"assets/index.html.9eb88619.js",revision:"d0b7e01bc426379209d686fd6d9b2fcb"},{url:"assets/index.html.9fd9aa27.js",revision:"165aaf051f41436ce81aeae81e1f24d9"},{url:"assets/index.html.a6d6c57c.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.ae7a665a.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.b0c8be7b.js",revision:"aee89527c67c71adf2f551433fd95557"},{url:"assets/index.html.ba6d906d.js",revision:"d3c0ecd5cdb461a5a8a719c8a460f17a"},{url:"assets/index.html.c7fdbfcf.js",revision:"6e03ca0006f6736aa246e391d8db08cd"},{url:"assets/index.html.c8611b98.js",revision:"5f391d0c93b33681885f48bd7666de8f"},{url:"assets/index.html.cb76df66.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.cf9d701b.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.d3627216.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.d643b934.js",revision:"8297603037a05f769b5ab81db8936f36"},{url:"assets/index.html.e031f6bc.js",revision:"982076956c19d88bf838157309e5436e"},{url:"assets/index.html.e1e84366.js",revision:"d1076e8f8c05fb83760a24eda803b5e3"},{url:"assets/index.html.e3457ecb.js",revision:"ea7a7f69440bba505f362e026263e39e"},{url:"assets/index.html.e3e5dbec.js",revision:"cc154cf030ddeba8afb8720ccc1366f5"},{url:"assets/index.html.e44e8420.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.e5cd6a0a.js",revision:"ddde345ee2938e832ee6004d7eb0166b"},{url:"assets/index.html.e6c36cac.js",revision:"e7ae630a9f6622dcc4bb2efe3b7e27a2"},{url:"assets/index.html.eab87cfb.js",revision:"4c99e47b3cf728e511da70f22c3abb65"},{url:"assets/index.html.ebbdf0d1.js",revision:"d379681639b15f5bc882f803fb7e3da4"},{url:"assets/index.html.f5a3d763.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.ff8d4386.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/intro.html.a01b3a85.js",revision:"ccb1124b0a3d49478204baa71083c162"},{url:"assets/intro.html.b81031e6.js",revision:"57f3c94b2e2a3601d4cd213a027d283c"},{url:"assets/Layout.9a8b3f75.js",revision:"85639783a97ba053e0c46acf844e9eda"},{url:"assets/markdown.esm.832a189d.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/markdown.html.81fea8a4.js",revision:"86bb6b4ef5f5b3758905735b567a82c8"},{url:"assets/markdown.html.9d366c5f.js",revision:"94cd9a438906f1ac610d72fc5e598be8"},{url:"assets/math.esm.a3f84b6f.js",revision:"cbf844f27edbc061c86ae840d70389f6"},{url:"assets/mermaid.esm.min.58d06cab.js",revision:"4f5b42900091bd3f182b6050551732ce"},{url:"assets/notes.esm.3c361cb7.js",revision:"eda65c99450fe02da90bde90cc614a56"},{url:"assets/page.html.409d4bda.js",revision:"80bc13f106dd96cbb28f6c853806323d"},{url:"assets/page.html.44255aff.js",revision:"1570d96e5f6eca04eea3791b42e09456"},{url:"assets/photoswipe.esm.92018b73.js",revision:"442a3264b1db7eb84ffc880407e7565d"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/reveal.esm.b96f05d8.js",revision:"f78a424fad98faac5d5ca8ebfbebe94b"},{url:"assets/search.esm.80da4a02.js",revision:"690b84c66badd2f8fa69d57bc7cdad19"},{url:"assets/SkipLink.4f86533f.js",revision:"c6c19e784c0a96e10ecda7d01c5e2ac6"},{url:"assets/Slide.7e9f7fae.js",revision:"7e495b3dc795cdfafe1acf1ab25d6aa0"},{url:"assets/slide.html.746e3c0d.js",revision:"169ad985d0dedfecc3c1dece0c1f8e58"},{url:"assets/slide.html.efe667e0.js",revision:"29b09f8ce7460f05e93b297c1d358e46"},{url:"assets/style.1f372d88.css",revision:"6e259b21ebcdd8c82cd092b1727cff19"},{url:"assets/zoom.esm.8514a202.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"index.html",revision:"267e371db689f4f9b26ccaf6fd5346f5"},{url:"404.html",revision:"aad85241431feedd2e43070327f0f4e6"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
